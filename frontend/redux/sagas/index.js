import { takeEvery, put, delay } from 'redux-saga/effects';
import {
  SAGA_UP, SAGA_DOWN, SAGA_UP_ASYNC, SAGA_DOWN_ASYNC,
} from '../reducers/sagaCounterReducer';

function* sagaUpAsync() {
  console.log('saga_up');
  yield delay(1000);
  yield put({ type: SAGA_UP_ASYNC, value: 1 });
}
function* sagaDownAsync() {
  console.log('saga_down');
  yield delay(1000);
  yield put({ type: SAGA_DOWN_ASYNC, value: 1 });
}

export default function* watchAgeUp() {
  console.log('watch');
  yield takeEvery(SAGA_UP, sagaUpAsync);
  yield takeEvery(SAGA_DOWN, sagaDownAsync);
}
