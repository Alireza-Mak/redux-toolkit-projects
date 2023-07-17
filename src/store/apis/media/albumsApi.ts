import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AlbumType, AlbumsType, UserType } from '../../types/media';
import { faker } from '@faker-js/faker';
import { delay_in_fetch } from '../../../utils';
import url from '../../urls';

const albumsApi = createApi({
  reducerPath: 'albums',
  tagTypes: ['Album', 'UsersAlbums'],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    fetchFn: async (...args) => {
      await delay_in_fetch();
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query<AlbumsType, UserType>({
        providesTags: (result, error, user: UserType) =>
          result
            ? [
                ...result.map((album: AlbumType) => ({
                  type: 'Album' as const,
                  id: album.id,
                })),
                { type: 'UsersAlbums', id: user.id },
              ]
            : [{ type: 'UsersAlbums', id: user.id }],
        query: (user: UserType) => {
          return {
            url: 'albums',
            params: {
              userId: user.id,
            },
            method: 'GET',
          };
        },
      }),
      addAlbum: builder.mutation<AlbumType, UserType>({
        invalidatesTags: (result, error, user: UserType) => [
          { type: 'UsersAlbums', id: user.id },
        ],
        query: (user: UserType) => {
          return {
            url: 'albums',
            body: {
              userId: user.id,
              albumName: faker.commerce.productName(),
            } as AlbumType,
            method: 'POST',
          };
        },
      }),
      deleteAlbum: builder.mutation<{}, AlbumType>({
        invalidatesTags: (result, error, album: AlbumType) => [
          { type: 'Album', id: album.id },
        ],
        query: (album: AlbumType) => {
          return {
            url: `albums/${album.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useAddAlbumMutation,useDeleteAlbumMutation } = albumsApi;
export { albumsApi };
