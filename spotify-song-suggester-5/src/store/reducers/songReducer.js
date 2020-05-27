const songState = {
  songs: [],
  error: '',
  favorites: [],
  similarSongs: [],
};

const songReducer = (state = songState, action) => {
  switch (action.type) {
    case 'FETCH_SONGS_START':
      return null;
    case 'FETCH_SONGS_SUCCESS':
      return null;
    case 'FETCH_SONGS_FAILURE':
      return null;

    case 'ADD_TO_FAVORITES':
      console.log(action.payload);
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
