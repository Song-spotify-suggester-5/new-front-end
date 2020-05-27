import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import components
import SongCard from './SongCard';
import { dummyData } from '../DummyData';

const SearchBar = () => {
  //set state for song
  const [song, setSong] = useState('');

  const handleChange = (e) => {
    setSong(e.target.value);
  };

  const filtered = dummyData.filter(
    (dummySong) =>
      dummySong.title.toLowerCase().includes(song.toLowerCase()) ||
      dummySong.artist.toLowerCase().includes(song.toLowerCase())
  );
  //1. run axios call to get songs
  //   axiosWithAuth
  //     .post('beckend enpoint for login')
  //     .then((res) => console.log({ Search_Res: res }))
  //     .catch((err) => console.error(err.message));
  //2. filter the songs in the .then to include whats in the song state

  return (
    <div className="search-page">
      <div className="search-bar">
        <input value={song} placeholder="search for a song" onChange={handleChange} />
      </div>

      <div className="songs-container">
        {filtered.map((song) => (
          <SongCard song={song} key={song.id} />
        ))}
      </div>
    </div>
  );
};
export default SearchBar;
