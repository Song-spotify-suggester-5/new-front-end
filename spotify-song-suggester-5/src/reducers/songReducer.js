const initialState = {
    songs: [],
    error: "",
    chosen: false,
    favSongs: [],
    recommenedSongs: [],
  };

const songReducer = () => (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_SONGS_START':
        return null;

    
    
    
    
    
        
        default: return state
    }
    }

export default songReducer;