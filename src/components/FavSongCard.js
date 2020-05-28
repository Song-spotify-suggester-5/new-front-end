import React from 'react';

const FavSongCard = ({ title, song_by, released_year }) => {
  function deleteSong() {
    // axioswithAuth call to delete song
  }
  return (
    <div className="Favsong-card">
      <h3>{title}</h3>
      <h5>By: {song_by}</h5>
      <h5>Released: {released_year}</h5>
      <button onClick={() => deleteSong()}>Delete</button>
    </div>
  );
};

export default FavSongCard;
