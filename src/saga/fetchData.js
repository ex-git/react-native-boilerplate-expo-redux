import { takeLatest, put } from 'redux-saga/effects';

function* fetchTasksSaga() {
  try {
    const taskResponse = yield fetch('API URL');
    const tasks = yield taskResponse.json();
    yield put({ type: 'FETCH_DATA_SUCCESS', tasks });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILED', message: error.message });
  }
}
export default function* watchFetchTasks() {
  yield takeLatest('FETCH_TASKS_START', fetchTasksSaga);
}
