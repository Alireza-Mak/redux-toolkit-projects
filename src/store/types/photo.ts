export type Photo = {
  id: number;
  brand: string;
  model: string;
  description: string;
  imageUrl: string;
  companyUrl: string;
  dateCreated: number;
  favorite: boolean;
};
export type Photos = Photo[];

export type PhotoType = {
  isLoading: boolean;
  photos: Photos;
  error: string | undefined;
};
export type singlePhotoType = {
  isLoading: boolean;
  singlePhoto: Photo;
  error: string | undefined;
};
