import {
  fork,
} from 'redux-saga/effects';

import loginFlow from './user';
import watchFetchTasks from './fetchData';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(watchFetchTasks);
  // code after fork-effect
}
