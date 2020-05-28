import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

const SongCard = ({ song }) => {
  const { id, title, song_by, released_year } = song;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.songReducer.favorites);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {}, [favorites]);

  function addTofavorites() {
    !favorites.includes(song) && dispatch({ type: 'ADD_TO_FAVORITES', payload: song });
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
        <div className="heart">
          <AiOutlineHeart
            className={`heart-outline${clicked === true ? '-hide' : ''}`}
            onClick={() => addTofavorites()}
          />
          <AiFillHeart className={`heart-fill${clicked === true && '-on'}`} />
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
