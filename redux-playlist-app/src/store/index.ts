import {
  configureStore,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

// Define the type for a song (can be expanded later)
export type Song = string;
export type Movie = string;

const initialSongsState: Song[] = [];
const initialMoviesState: Movie[] = [];

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
  extraReducers: (builder) => {
    builder.addCase("movie/reset", () => {
      return [];
    });
  },
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: initialMoviesState,
  reducers: {
    addMovie(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      return state.filter((movie) => movie !== action.payload);
    },
    reset: () => {
      return [];
    },
  },
});

export const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

// Infer these from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//step 2
export const { addSong, removeSong } = songsSlice.actions;
export const {
  addMovie,
  removeMovie,
  reset: resetMovies,
} = moviesSlice.actions;
