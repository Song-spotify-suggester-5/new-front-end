import React from 'react';
import { useSelector } from 'react-redux';

import FavSongCard from './FavSongCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.songReducer.favorites);



  return (
    <div className='favoriteSongs'>
       <h1>Favorited Songs</h1>
      {favorites.map((favSong) => {
        return (
          <>

          <div className='favSongCard'>
          <FavSongCard
            key={favSong.id}
            title={favSong.title}
            song_by={favSong.song_by}
            released_year={favSong.released_year}
          />
          </div>
          </>
        );
      })}
    </div>
  );
};

export default Favorites;
