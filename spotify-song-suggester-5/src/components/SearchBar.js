import axios from 'axios';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SearchBar = () => {
  //set state for song
  const [song, setSong] = useState('');

  const handleChange = (e) => {
    setSong(e.target.value);
  };

  //1. run axios call to get songs
  axios
    .get('https://api.spotify.com/v1/search')
    .then((res) => console.log({ Search_Res: res }))
    .catch((err) => console.error(err.message));
  //2. filter the songs in the .then to include whats in the song state
  return <input value={song} placeholder="search for a song" onChange={handleChange} />;
};
export default SearchBar;
