import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import FavSongCard from './FavSongCard';
import UserNavBar from './UserNavBar';
const Favorites = () => {
  const favorites = useSelector((state) => state.songReducer.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .get('/songs')
      .then((res) => res.data.map((song) => dispatch({ type: 'ADD_TO_FAVORITES', payload: song })))
      .catch((err) => console.log(err));
  }, []);

  console.log('favorites', favorites);

  return (
    <>
      <UserNavBar />
      <div className="favoriteSongs">
        <h1>Favorited Songs</h1>
        {favorites.map((favSong) => {
          return (
            <>
              <div className="favSongCard">
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
    </>
  );
};

export default Favorites;
