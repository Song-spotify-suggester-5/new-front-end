const userState = {
  user: {
    username: '',
    password: '',
  },
  error: '',
  chosen: false,
  loading: false,
};

const userReducer = (state = userState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
