import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const SongCard = ({ title, artist }) => (
  <div className="song-card">
    <h3>{title}</h3>
    <h5>{artist}</h5>
    <div className= 'heart'>
    <AiOutlineHeart />
    </div>

  </div>
);

export default SongCard;
