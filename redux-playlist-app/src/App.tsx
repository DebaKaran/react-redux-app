import { useDispatch } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

import { resetMovies, resetSongs, type AppDispatch } from "./store";

export default function App() {
  // Strongly typed dispatch
  const dispatch = useDispatch<AppDispatch>();

  const handleResetClick = () => {
    dispatch(resetMovies());
    dispatch(resetSongs());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
