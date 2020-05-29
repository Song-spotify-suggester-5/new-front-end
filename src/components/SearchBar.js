import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
//import components
import SongCard from './SongCard';
// import { dummyData } from '../DummyData';

const SearchBar = () => {
  //set state for song
  const [searchInput, setSearchInput] = useState('');


  // redux hooks
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songReducer.songs);
  const fetchError = useSelector((state) => state.songReducer.fetchError);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    // dispatch({ type: 'FETCH_SONGS_START' });
    // axios
    //   .get('https://bw-spotify-songs.herokuapp.com/api/songs ')
    //   .then((res) => {
    //     console.log('res', res.data);
    //     res.data.map((song) => dispatch({ type: 'FETCH_SONGS_SUCCESS', payload: song }));
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: 'FETCH_SONGS_FAILURE',
    //       payload: err.message,
    //     });
    //   });
  }, []);

  // console.log(songs);
  const filtered = songs.filter(
    (track) =>
      track.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      track.song_by.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-bar">
        <input value={searchInput} placeholder="search for a song" onChange={handleChange} />
      </div>
      {fetchError && <h3 className="error">Could not get songs: {fetchError}</h3>}
      <div className="songs-container">
        {filtered.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
