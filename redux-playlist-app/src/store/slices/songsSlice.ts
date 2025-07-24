import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../actions";

// Define the type for a song (can be expanded later)
export type Song = string;

const initialSongsState: Song[] = [];

const songsSlice = createSlice({
  name: "song",
  initialState: initialSongsState,
  reducers: {
    addSong(state, action: PayloadAction<Song>) {
      //
      state.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<Song>) => {
      return state.filter((song) => song !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export default songsSlice.reducer;
