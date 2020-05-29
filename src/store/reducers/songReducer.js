const songState = {
  songs: [
    { title: 'first', song_by: 'firstArtist', released_year: 1999, favorite: false },
    { title: 'second', song_by: 'secondArtist', released_year: 1999, favorite: false },
    { title: 'third', song_by: 'thirdArtist ', released_year: 1999, favorite: false },
    { title: 'fourth', song_by: 'fourthArtist', released_year: 1999, favorite: false },
    { title: 'fifth', song_by: 'fifthArtist ', released_year: 1999, favorite: false },
    { title: 'sixth', song_by: 'sixthArtist ', released_year: 1999, favorite: false },
    { title: 'seventh', song_by: 'seventhArtist', released_year: 1999, favorite: false },
    { title: 'eigth', song_by: 'seventhArtist', released_year: 1999, favorite: false },
    { title: 'ninth', song_by: 'ninthArtist ', released_year: 1999, favorite: false },
    { title: 'tenth', song_by: 'tenthArtist ', released_year: 1999, favorite: false },
    { title: 'eleventh', song_by: 'twelvthArtist ', released_year: 1999, favorite: false },
  ],
  fetchError: '',
  favorites: [],
  postToFavorites: false,
  postError: '',
  similarSongs: [],
};

const songReducer = (state = songState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_START':
      return {
        ...state,
        fetchingSongs: true,
      };
    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case 'FETCH_SONGS_FAILURE':
      return { ...state, fetchError: action.payload };

    case 'ADD_TO_FAVORITES':
      console.log(...state.favorites);
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'DELETE_FROM_FAVORITES':
      return null;
    default:
      return state;
  }
};

export default songReducer;
