import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';


const SongCard = ({ song }) => {
  const { id, title, artist, releaseDate } = song;
  const dispatch = useDispatch();

  function addTofavorites() {
    console.log(song);
    dispatch({ type: 'ADD_TO_FAVORITES', payload: song });
  }

  return (
    <div className="song-card">
      <p>{id}</p>
      <h3>{title}</h3>
      <h5>By: {artist}</h5>
      <h5>Released: {releaseDate}</h5>
      <div className="heart" onClick={() => addTofavorites()}>
        <AiOutlineHeart />
      </div>
      <button className="similar-songs">More Songs Like This 🔎</button>
    </div>
  );
};

export default SongCard;
