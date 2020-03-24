import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_FOLLOW_COUNT_VALUE, FETCH_FOLLOW_COUNT_VALUE_STATED,
} from '../reducers/followReducer';
// import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

const fetchFollowing = function* fetchFollowing(action) {
  try {
    const { data } = yield call([axios, 'get'], `http://127.0.0.1:3001/follow?userId=${action.payload}`, {
      withCredentials: true,
    });
    yield put({ type: FETCH_FOLLOW_COUNT_VALUE_STATED, payload: data });
  } catch (e) {
    // yield put();
  }
};

const watchFollow = function* watchFollow() {
  yield takeEvery(FETCH_FOLLOW_COUNT_VALUE, fetchFollowing);
};

export default watchFollow;
