import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import {
  addSong,
  type AppDispatch,
  removeSong,
  type RootState,
  type Song,
} from "../store";

function SongPlaylist() {
  // To Do:
  // Get list of songs

  // Strongly typed selector
  const songPlaylist: Song[] = useSelector((state: RootState) => state.songs);

  // Strongly typed dispatch
  const dispatch = useDispatch<AppDispatch>();

  const handleSongAdd = (song: Song) => {
    const action = addSong(song);
    dispatch(action);
  };
  const handleSongRemove = (song: Song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
