import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";
import {
  addMovie,
  removeMovie,
  type AppDispatch,
  type Movie,
  type RootState,
} from "../store";

function MoviePlaylist() {
  // Get list of movies
  // Strongly typed selector
  const moviePlaylist: Movie[] = useSelector(
    (state: RootState) => state.movies
  );

  // Strongly typed dispatch
  const dispatch = useDispatch<AppDispatch>();

  const handleMovieAdd = (movie: Movie) => {
    // Add movie to list of movies
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie: Movie) => {
    // Remove movie from list of movies
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
