export const changeScreen = (screen) => async (dispatch, getState) => {
  try {
    await dispatch({
      type: 'CHANGE_SCREEN',
      payload: screen,
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('done');
  }
};
export const function2 = (num) => async (dispatch, getState) => {
  try {
    // dispatch({
    //   type: 'ALERT_FUNCTION2',
    //   payload: num,
    // });
  } catch (error) {
    console.log(error);
  } finally {
    console.log('done');
  }
};
