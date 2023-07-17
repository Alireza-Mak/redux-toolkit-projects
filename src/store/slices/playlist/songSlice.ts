import { createSlice } from '@reduxjs/toolkit';
import { PlaylistItemType, PlaylistType } from '../../index';
import { resetApp } from '../../actions/playlist';
const songsSlice = createSlice({
  name: 'song',
  initialState: [] as PlaylistType,
  reducers: {
    addSong: (state: PlaylistType, action) => [...state, action.payload],
    removeSong: (state: PlaylistType, action) => [
      ...state.filter((song: PlaylistItemType) => song.id !== action.payload),
    ],
  }, extraReducers(builder) {
    builder.addCase(resetApp,()=>[])
  }
  
});
export const songsReducer = songsSlice.reducer;
export const { addSong, removeSong } = songsSlice.actions;
