const initState = {
  screen: 'home',
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN': {
      return {
        ...state,
        screen: action.payload,
      };
    }
    case 'ALERT_FUNCTION2': {
      return {
        ...state,
        alert2: action.payload,
      };
    }
    default:
      return state;
  }
};
