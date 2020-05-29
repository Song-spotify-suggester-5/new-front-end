const userState = {
  user: {
    id: '',
    username: '',
  },
  SigninError: '',
  LoginError: '',
  isLoading: false,
  accountDeleted: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'NETWORK_REQUEST_START':
      return {
        ...state,
        isLoading: true,
        accountDeleted: false,
      };
    case 'NETWORK_REQUEST_SUCCESS':
      return {
        ...state,
        isLoading: false,
        accountDeleted: false,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        SigninError: action.payload,
        isLoading: false,
        accountDeleted: false,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        LoginError: action.payload,
        isLoading: false,
        accountDeleted: false,
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
      case 'DELETE_ACCOUNT_NOTICE':
        return {
          ...state, accountDeleted: true
        }
    default:
      return state;
  }
};

export default userReducer;
