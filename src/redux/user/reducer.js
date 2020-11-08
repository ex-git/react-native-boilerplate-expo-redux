const initState = {
  isLoggedIn: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_STATUS': {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    case 'LOG_OUT': {
      return {};
    }
    default:
      return state;
  }
};
