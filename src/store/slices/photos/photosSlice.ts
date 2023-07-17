import { createSlice } from '@reduxjs/toolkit';
import { PhotoType,  } from '../../../store';
import { fetchPhotos } from '../../thunks/photos/fetchPhotos';
import { editPhotos } from '../../thunks/photos/editPhotos';

const photosSlice = createSlice({
  name: 'photos',
  initialState: { isLoading: false, photos: [], error: undefined } as PhotoType,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(editPhotos.fulfilled, (state, action) => {
      const newState = state.photos.map((item) => {
        if (item.id === action.payload.id) {
          item.favorite = action.payload.favorite;
          return item;
        }
        return item;
      });
      state.photos = newState;
    });
  },
});

export const photosReducer = photosSlice.reducer;
