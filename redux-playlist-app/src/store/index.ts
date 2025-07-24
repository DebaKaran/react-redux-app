import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

// Define the type for a song (can be expanded later)
type Song = string;

const initialSongsState: Song[] = [];

const songsSlice = createSlice({
  name: "song",
  initialState: initialSongsState,
  reducers: {
    addSong(state, action: PayloadAction<string>) {
      //
      state.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      return state.filter((song) => song !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

// Infer these from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//step 2
export const { addSong, removeSong } = songsSlice.actions;
