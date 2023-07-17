import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import url from '../../urls';
import { delay_in_fetch } from '../../../utils';
import { AlbumType, PictureType, PicturesType } from '../../types/media';
import { faker } from '@faker-js/faker';

const picturesApi = createApi({
  reducerPath: 'pictures',
  tagTypes: ['AlbumsPictures', 'Picture'],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    fetchFn: async (...args) => {
      await delay_in_fetch();
      return fetch(...args);
    },
  }),
  endpoints(builder) {
    return {
      fetchPictures: builder.query<PicturesType, AlbumType>({
        providesTags: (result, error, album: AlbumType) =>
          result
            ? [
                ...result.map((picture: PictureType) => ({
                  type: 'Picture' as const,
                  id: picture.id,
                })),
                { type: 'AlbumsPictures', id: album.id },
              ]
            : [{ type: 'AlbumsPictures', id: album.id }],
        query: (album: AlbumType) => {
          return {
            url: 'pictures',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPicture: builder.mutation<PictureType, AlbumType>({
        invalidatesTags: (result, error, album: AlbumType) => [
          { type: 'AlbumsPictures', id: album.id },
        ],
        query: (album: AlbumType) => {
          return {
            url: 'pictures',
            body: {
              albumId: album.id,
              pictureUrl: faker.image.url({
                height: 150,
                width: 150,
              }),
            } as PictureType,
            method: 'POST',
          };
        },
      }),
      deletePicture: builder.mutation<{}, PictureType>({
        invalidatesTags: (result, error, picture: PictureType) => [
          { type: 'Picture', id: picture.id },
        ],
        query: (picture: PictureType) => {
          return {
            url: `pictures/${picture.id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const {
  useFetchPicturesQuery,
  useAddPictureMutation,
  useDeletePictureMutation,
} = picturesApi;
export { picturesApi };
