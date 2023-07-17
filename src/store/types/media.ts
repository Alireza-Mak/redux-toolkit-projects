export interface UserType {
  id: number;
  userName: string;
}
export type UsersType = UserType[];

export type fetchUsersAction = {
  type: string;
  payload: UserType[];
};
export type addUserAction = {
  type: string;
  payload: UserType;
};
export type deleteUserAction = {
  type: string;
  payload: UserType;
};

export interface AlbumType {
  id: number;
  userId: number;
  albumName: string;
}
export type AlbumsType = AlbumType[];

export interface PictureType {
  id: number;
  albumId: number;
  pictureUrl: string;
}
export type PicturesType = PictureType[];
