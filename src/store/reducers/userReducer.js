const userState = {
  user: {
    username: '',
    password: '',
  },
  error: '',
  loading: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case 'SIGNIN_START':
      return{

      }
      case'SIGNIN_FAIL':
      return{

      }
    default:
      return state;
  }
};

export default userReducer;
