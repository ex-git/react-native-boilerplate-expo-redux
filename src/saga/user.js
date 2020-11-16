import {
  take, put, call, fork, cancel, cancelled,
} from 'redux-saga/effects';

import { loginSuccess, loginFailed } from '../redux/user/action';

function* authorize(user, password) {
  try {
    const API = (user, password) => new Promise((res) => {
      console.info('getting token');
      return setTimeout(() => res(user + password), 5000);
    });
    const token = yield call(API, user, password);
    yield put(loginSuccess(token));
    // yield call(Api.storeItem, { token });
    return token;
  } catch (error) {
    yield put(loginFailed(error));
    return null;
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
    }
  }
}

export default function* loginFlow() {
  while (true) {
    const { user, password } = yield take('LOGIN_REQUEST');
    // fork return a Task object
    const task = yield fork(authorize, user, password);
    const action = yield take(['LOGOUT', 'LOGIN_ERROR']);
    if (action.type === 'LOGOUT') { yield cancel(task); }
    // yield call(Api.clearItem, 'token');
  }
}
