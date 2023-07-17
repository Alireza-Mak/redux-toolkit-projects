import {  configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesReducer } from '../slices/playlist/movieSlice';
import { songsReducer } from '../slices/playlist/songSlice';
import { addCarReducer } from '../slices/car/addCarSlice';
import { editCarReducer } from '../slices/car/editCarSlice';
import { carsReducer } from '../slices/car/carsSlice';
import { photosReducer } from '../slices/photos/photosSlice';
import { singlePhotoReducer } from '../slices/photos/singlePhotoSlice';
import { usersReducer } from '../slices/media/usersSlice';
import { albumsApi } from '../apis/media/albumsApi';
import { picturesApi } from '../apis/media/picturesApi';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
    addcar: addCarReducer,
    editCar: editCarReducer,
    allCars: carsReducer,
    photos: photosReducer,
    singlePhoto: singlePhotoReducer,
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [picturesApi.reducerPath]: picturesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(picturesApi.middleware);
  },
});

setupListeners(store.dispatch);
export { store };
