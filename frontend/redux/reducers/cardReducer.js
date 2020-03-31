/* eslint-disable max-len */
/* eslint-disable camelcase */
export const FETCH_CARDS_START_STARTED = 'FETCH_CARDS_START_STARTED';
export const FETCH_CARDS_SUCCESS_STARTED = 'FETCH_CARDS_SUCCESS_STARTED';
export const FETCH_CARDS_FAIL_STARTED = 'FETCH_CARDS_FAIL_STARTED';

export const LIKE_CARD_SUCCESS = 'LIKE_CARD_SUCCESS';
export const LIKE_CARDS_FAIL = 'LIKE_CARDS_FAIL';

export const UNLIKE_CARD_SUCCESS = 'UNLIKE_CARD_SUCCESS';
export const UNLIKE_CARDS_FAIL = 'UNLIKE_CARDS_FAIL';

export const ADD_CARD_REPLY_SUCCESS = 'ADD_CARD_REPLY_SUCCESS';
export const ADD_CARD_REPLY_FAIL = 'ADD_CARD_REPLY_FAIL';

export const DEL_CARD_REPLY_SUCCESS = 'DEL_CARD_REPLY_SUCCESS';
export const DEL_CARD_REPLY_FAIL = 'DEL_CARD_REPLY_FAIL';

// 사가에서 가로챌 액션 값
export const FETCH_CARDS_START = 'FETCH_CARDS_START';
export const LIKE_CARD_REQUEST = 'LIKE_CARD_REQUEST';
export const UNLIKE_CARD_REQUEST = 'UNLIKE_CARD_REQUEST';
export const ADD_CARD_REPLY_REQUEST = 'ADD_CARD_REPLY_REQUEST';
export const DEL_CARD_REPLY_REQUEST = 'DEL_CARD_REPLY_REQUEST';

export const initialState = {
  fetchState: '',
  card: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_START_STARTED: {
      return { ...state, fetchState: 'card_fetching' };
    }
    case FETCH_CARDS_SUCCESS_STARTED: {
      // console.log(action.payload);
      return { ...state, card: action.payload, fetchState: 'card_fetching_success' };
    }
    case FETCH_CARDS_FAIL_STARTED: {
      return { ...state, fetchState: 'card_fetching_fail' };
    }
    case LIKE_CARD_SUCCESS: {
      const card = [...state.card];
      const cardIndex = card.findIndex((v) => v.board_id === action.payload.board_id);
      card[cardIndex].likes = card[cardIndex].likes.concat(action.payload);
      return { ...state, card };
    }
    case UNLIKE_CARD_SUCCESS: {
      const card = [...state.card];
      const cardIndex = card.findIndex((v) => v.board_id === action.payload.boardId);
      const likeIndex = card[cardIndex].likes.findIndex((v) => v.user_id === action.payload.userId);
      card[cardIndex].likes.splice(likeIndex, 1);
      return { ...state, card };
    }
    case ADD_CARD_REPLY_SUCCESS: {
      const card = [...state.card];
      console.log(action.payload);
      const cardIndex = card.findIndex((v) => v.board_id === action.payload.board_id);
      card[cardIndex].replies = card[cardIndex].replies.concat(action.payload);
      // console.log(card[cardIndex].replies);
      return { ...state, card };
    }
    default: {
      return state;
    }
  }
};

export default cardReducer;
