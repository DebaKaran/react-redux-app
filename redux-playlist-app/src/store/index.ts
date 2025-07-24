import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./slices/songsSlice";
import { addSong, removeSong } from "./slices/songsSlice";
import moviesSlice from "./slices/moviesSlice";
import { addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

export const store = configureStore({
  reducer: {
    songs: songsSlice,
    movies: moviesSlice,
  },
});

// Infer these from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { addSong, removeSong, addMovie, removeMovie, reset };
