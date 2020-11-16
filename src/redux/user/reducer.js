const initState = {
  token: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        ...state,
        token: action.token,
      };
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        token: null,
      };
    }
    case 'LOG_OUT': {
      return initState;
    }
    default:
      return state;
  }
};
