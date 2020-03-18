import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  SET_USERNAME_STARTED, SET_PASSWORD_STARTED,
  SET_USERNAME, SET_PASSWORD, DO_LOGIN, DO_LOGIN_STARTED,
  DO_LOGIN_SUCCESS, DO_LOGIN_FAIL,
} from '../reducers/sagaLoginReducer';
// import { SAGA_SIGN_IN } from '../reducers/sagaLoginReducer';

const setUsername = function* setUsername(action) {
  yield put({ type: SET_USERNAME_STARTED, payload: action.payload });
};
const setPassword = function* setPassword(action) {
  yield put({ type: SET_PASSWORD_STARTED, payload: action.payload });
};
const doLogin = function* doLogin(action) {
  // yield console.log(action);
  try {
    yield put({ type: DO_LOGIN_STARTED });
    const json = {
      uid: action.payload.username,
      upw: action.payload.password,
    };
    // console.log(json);
    const { data } = yield call([axios, 'post'], 'http://127.0.0.1:3001/auth/signin', json, {
      withCredentials: true, // 쿠키를 주고받을 수 있게됨
    });
    yield put({ type: DO_LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: DO_LOGIN_FAIL });
  }
};

// watch
export const watchSetUsername = function* watchSetUsername() {
  yield takeEvery(SET_USERNAME, setUsername);
};
export const watchSetUserpassword = function* watchSetUserpassword() {
  yield takeEvery(SET_PASSWORD, setPassword);
};

export const watchLogin = function* watchLogin() {
  yield takeEvery(DO_LOGIN, doLogin);
};
