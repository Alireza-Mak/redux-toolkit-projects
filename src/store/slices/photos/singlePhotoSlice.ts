import { createSlice } from '@reduxjs/toolkit';
import { singlePhotoType } from '../../../store';
import { fetchSinglePhoto } from '../../thunks/singlePhoto/fetchSinglePhoto';
import { addSinglePhoto } from '../../thunks/singlePhoto/addSinglePhoto';

const singlePhotosSlice = createSlice({
  name: 'singlePhoto',
  initialState: {
    error: undefined,
    singlePhoto: {},
    isLoading: false,
  } as singlePhotoType,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSinglePhoto.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(fetchSinglePhoto.fulfilled, (state, action) => {
      return { ...state, isLoading: false, singlePhoto: action.payload };
    });
    builder.addCase(fetchSinglePhoto.rejected, (state, action) => {
      return { ...state, error: action.error.message };
    });
    builder.addCase(addSinglePhoto.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(addSinglePhoto.fulfilled, (state, action) => {
      return { ...state, isLoading: false, singlePhoto: action.payload };
    });
    builder.addCase(addSinglePhoto.rejected, (state, action) => {
      return { ...state, error: action.error.message };
    });
  },
});

export const singlePhotoReducer = singlePhotosSlice.reducer;
