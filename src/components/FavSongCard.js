import React from 'react';

const FavSongCard = ({ title, artist, releaseDate }) => {
  function deleteSong() {
    // axioswithAuth call to delete song
  }
  return (
    <div className="Favsong-card">
      <h3>{title}</h3>
      <h5>By: {artist}</h5>
      <h5>Released: {releaseDate}</h5>
      <button onClick={() => deleteSong()}>Delete</button>
    </div>
  );
};

export default FavSongCard;
