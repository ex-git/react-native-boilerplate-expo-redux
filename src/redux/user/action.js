import { setLocale } from '../../utils';

export const updateLocale = (locale) => async (dispatch, getState) => {
  try {
    await setLocale(locale);
    dispatch({
      type: 'UPDATE_LOCALE',
      payload: locale,
    });
  } catch (error) {
    console.log('error, getstore', error);
  } finally {
    console.log('done');
  }
};
export const fake = ({ storeIds }) => async (dispatch, getState) => {
  try {
    console.info('ok');
  } catch (error) {
    console.log('error, getstore', error);
  } finally {
    console.log('done');
  }
};
