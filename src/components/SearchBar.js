import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import components
import SongCard from './SongCard';
// import { dummyData } from '../DummyData';

const SearchBar = () => {
  //set state for song
  const [song, setSong] = useState('');
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songReducer.songs);
  const fetchError = useSelector((state) => state.songReducer.fetchError);
  const handleChange = (e) => {
    setSong(e.target.value);
  };

  const filtered = songs.filter(
    (tracks) =>
      tracks.title.toLowerCase().includes(song.toLowerCase()) ||
      tracks.artist.toLowerCase().includes(song.toLowerCase())
  );
  // 1. run axios call to get songs
  dispatch({ type: 'FETCH_SONGS_START' });
  axios
    .get('https://bw-spotify-songs.herokuapp.com/api/songs')
    .then((res) => dispatch({ type: 'FETCH_SONGS_SUCCESS', payload: res.data.message }))
    .catch((err) =>
      dispatch({
        type: 'FETCH_SONGS_FAILURE',
        payload: `Could not get songs: ${err.message}`,
      })
    );
  // 2. filter the songs in the .then to include whats in the song state

  return (
    <div className="search-page">
      <div className="search-bar">
        <input value={song} placeholder="search for a song" onChange={handleChange} />
      </div>
      {fetchError && <h3 className="error">{fetchError}</h3>}
      <div className="songs-container">
        {filtered.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
