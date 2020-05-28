const userState = {
  user: {
    username: '',
    password: '',
  },
  SigninError: '',
  LoginError: '',
  chosen: false,
  loading: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'NETWORK_REQUEST_START':
      return {
        ...state,
        loading: true,
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
    default:
      return state;
  }
};

export default userReducer;
