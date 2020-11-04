const initState = {
  locale: 'en',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCALE': {
      return {
        ...state,
        locale: action.payload,
      };
    }
    case 'LOG_OUT': {
      return {};
    }
    default:
      return state;
  }
};
