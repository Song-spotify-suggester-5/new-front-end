import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';

const SongCard = ({ song }) => {
  const { id, title, song_by, released_year } = song;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.songReducer.favorites);
  const [clicked, setClicked] = useState(false);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function addTofavorites() {
    // post to save favorite songs
    favorites.map((favorite) => favorite.id === id && setMatch(true));

    !match &&
      axiosWithAuth()
        .post('/songs', song)
        .then((res) => console.log('posted to favorites', res))
        .catch((err) => console.log(err));
    setClicked(true);
  }

  return (
    <div className="song-card">
      <div className="song-card-info">
        <p>{id}</p>
        <h3>{title}</h3>
        <h5>By: {song_by}</h5>
        <h5>Released: {released_year}</h5>
      </div>

      <div className="song-card-features">
        <div
          className="heart"
          onClick={() => {
            addTofavorites();
            setClicked(!clicked);
          }}>
          {clicked === true ? <AiFillHeart className={'clicked-heart'} /> : <AiOutlineHeart />}
        </div>

        <button className="similar-songs">
          More of this
          <span role="img" aria-label="emoji">
            🔎
          </span>
        </button>
      </div>
    </div>
  );
};

export default SongCard;
