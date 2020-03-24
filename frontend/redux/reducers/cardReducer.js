/* eslint-disable camelcase */
export const FETCH_CARDS_START_STARTED = 'FETCH_CARDS_START_STARTED';
export const FETCH_CARDS_SUCCESS_STARTED = 'FETCH_CARDS_SUCCESS_STARTED';
export const FETCH_CARDS_FAIL_STARTED = 'FETCH_CARDS_FAIL_STARTED';

export const FETCH_CARDS_START = 'FETCH_CARDS_START';

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
    default: {
      return state;
    }
  }
};

export default cardReducer;
