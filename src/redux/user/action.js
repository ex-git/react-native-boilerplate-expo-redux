export const changeLoginStatus = (status) => async (dispatch, getState) => {
  console.info('status', status);
  dispatch({
    type: 'UPDATE_LOGIN_STATUS',
    payload: status,
  });
};
