import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CARDS_START, FETCH_CARDS_START_STARTED,
  FETCH_CARDS_SUCCESS_STARTED, FETCH_CARDS_FAIL_STARTED,
  LIKE_CARD_REQUEST, UNLIKE_CARD_REQUEST, ADD_CARD_REPLY_REQUEST, DEL_CARD_REPLY_REQUEST,
  LIKE_CARD_SUCCESS, LIKE_CARDS_FAIL,
  UNLIKE_CARD_SUCCESS, UNLIKE_CARDS_FAIL,
  ADD_CARD_REPLY_SUCCESS, ADD_CARD_REPLY_FAIL,
  DEL_CARD_REPLY_SUCCESS, DEL_CARD_REPLY_FAIL,
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
const likeCard = function* LikeCard(action) {
  try {
    const likeData = {
      boardId: action.payload.board_id,
      userId: action.payload.username,
    };
    // console.log(likeData);
    const { data } = yield call([axios, 'post'], 'http://127.0.0.1:3001/insertLike', likeData, {
      withCredentials: true,
    });
    // console.log(data);
    yield put({ type: LIKE_CARD_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: LIKE_CARDS_FAIL });
  }
};

const unLikeCard = function* LikeCard(action) {
  try {
    const unlikeData = {
      // index: action.payload.index,
      boardId: action.payload.board_id,
      userId: action.payload.username,
    };
    // console.log(unlikeData);
    const { data } = yield call([axios, 'post'], 'http://127.0.0.1:3001/deleteLike', unlikeData, {
      withCredentials: true,
    });
    if (data === true) {
      yield put({ type: UNLIKE_CARD_SUCCESS, payload: unlikeData });
    }
  } catch (e) {
    yield put({ type: UNLIKE_CARDS_FAIL });
  }
};
const addReply = function* addReply(action) {
  try {
    const addReplyData = {
      // index: action.payload.index,
      boardId: action.payload.board_id,
      userId: action.payload.username,
      desc: action.payload.desc,
    };
    const { data } = yield call([axios, 'post'], 'http://127.0.0.1:3001/addReply', addReplyData, {
      withCredentials: true,
    });

    yield put({ type: ADD_CARD_REPLY_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ADD_CARD_REPLY_FAIL });
  }
};

const delReply = function* delReply(action) {
  try {
    const delReplyData = {
      reple_id: action.payload.reple_id,
      boardId: action.payload.board_id,
      userId: action.payload.username,
    };
    const { data } = yield call([axios, 'post'], 'http://127.0.0.1:3001/delReply', delReplyData, {
      withCredentials: true,
    });
    if (data === true) {
      yield put({ type: DEL_CARD_REPLY_SUCCESS, payload: delReplyData });
    }
  } catch (e) {
    yield put({ type: DEL_CARD_REPLY_FAIL });
  }
};

export const watchFetchCard = function* watchFetchCard() {
  yield takeEvery(FETCH_CARDS_START, fetchCard);
};
export const watchLikeCard = function* watchLikeCard() {
  yield takeEvery(LIKE_CARD_REQUEST, likeCard);
};
export const watchUnLikeCard = function* watchUnLikeCard() {
  yield takeEvery(UNLIKE_CARD_REQUEST, unLikeCard);
};
export const watchAddReply = function* watchAddReply() {
  yield takeEvery(ADD_CARD_REPLY_REQUEST, addReply);
};
export const watchDelReply = function* watchDelReply() {
  yield takeEvery(DEL_CARD_REPLY_REQUEST, delReply);
};
