const userState = {
  user: {
    id: '',
    username: '',
  },
  SigninError: '',
  LoginError: '',
  chosen: false,
  isLoading: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'NETWORK_REQUEST_START':
      return {
        ...state,
        isLoading: true,
      };
    case 'NETWORK_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        SigninError: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        LoginError: action.payload,
      };
    case 'SAVE_ID':
      return {
        ...state,
        user: { ...state.user, id: action.payload },
      };
    case 'SAVE_USERNAME':
      return {
        ...state,
        user: { ...state.user, username: action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
