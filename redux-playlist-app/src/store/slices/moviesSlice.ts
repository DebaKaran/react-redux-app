import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../actions";

export type Movie = string;

const initialMoviesState: Movie[] = [];

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialMoviesState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<Movie>) => {
      return state.filter((movie) => movie !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reset, () => {
      return [];
    });
  },
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
