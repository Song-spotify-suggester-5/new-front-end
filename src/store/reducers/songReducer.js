const songState = {
  songs: [],
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
        songs: [action.payload],
      };
    case 'FETCH_SONGS_FAILURE':
      return { ...state, fetchError: action.payload };

    case 'ADD_TO_FAVORITES':
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
