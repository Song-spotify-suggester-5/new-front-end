import React from 'react';
import { useSelector } from 'react-redux';

import FavSongCard from './FavSongCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.songReducer.favorites);

  console.log('favorites from store:', favorites);

  return (
    <div>
      {favorites.map((favSong) => {
        return (
          <FavSongCard
            key={favSong.id}
            title={favSong.title}
            artist={favSong.artist}
            releaseDate={favSong.releaseDate}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
