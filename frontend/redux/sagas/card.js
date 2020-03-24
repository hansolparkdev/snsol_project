import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CARDS_START, FETCH_CARDS_START_STARTED,
  FETCH_CARDS_SUCCESS_STARTED, FETCH_CARDS_FAIL_STARTED,
} from '../reducers/cardReducer';
// import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

const fetchCard = function* fetchFollowing(action) {
  try {
    yield put({ type: FETCH_CARDS_START_STARTED });
    const { data } = yield call([axios, 'get'], `http://127.0.0.1:3001/cards?userId=${action.payload}`, {
      withCredentials: true,
    });
    yield put({ type: FETCH_CARDS_SUCCESS_STARTED, payload: data });
  } catch (e) {
    yield put({ type: FETCH_CARDS_FAIL_STARTED });
  }
};

const watchFetchCard = function* watchFetchCard() {
  yield takeEvery(FETCH_CARDS_START, fetchCard);
};

export default watchFetchCard;
