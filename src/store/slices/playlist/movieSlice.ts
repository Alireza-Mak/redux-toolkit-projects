import { createSlice } from '@reduxjs/toolkit';
import { AddPlaylistAction, PlaylistItemType, PlaylistType, RemovePlaylistAction } from '../../index';
import { resetApp } from '../../actions/playlist';

const movieSlice = createSlice({
  name: 'movie',
  initialState: [] as PlaylistType,
  reducers: {
    addMovie: (state: PlaylistType, action: AddPlaylistAction) => [
      ...state,
      action.payload,
    ],
    removeMovie: (state: PlaylistType, action: RemovePlaylistAction) => [
      ...state.filter((item: PlaylistItemType) => item.id !== action.payload),
    ],
  },
  extraReducers(builder) {
    builder.addCase(resetApp, () => []);
  },
});
export const moviesReducer = movieSlice.reducer;
export const { addMovie, removeMovie } = movieSlice.actions;
