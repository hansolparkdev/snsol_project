/* eslint-disable camelcase */
export const SET_USERNAME_STARTED = 'SET_USERNAME_STARTED';
export const SET_PASSWORD_STARTED = 'SET_PASSWORD_STARTED';
export const DO_LOGIN_STARTED = 'DO_LOGIN_STARTED';
export const DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS';
export const DO_LOGIN_FAIL = 'DO_LOGIN_FAIL';
export const SESSION_CHECK_STARTED = 'SESSION_CHECK_STARTED';
export const SESSION_CHECK_HAVE = 'SESSION_CHECK_HAVE';
export const SESSION_CHECK_NONE = 'SESSION_CHECK_NONE';

// SAGA Action
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const DO_LOGIN = 'DO_LOGIN';
export const SESSION_CHECK = 'SESSION_CHECK';

export const initialState = {
  username: '',
  password: '',
  name: '',
  loginStatus: undefined,
  loginErrorMsg: '',
};

const sagaLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME_STARTED: {
      return { ...state, username: action.payload };
    }
    case SET_PASSWORD_STARTED: {
      return { ...state, password: action.payload };
    }
    case DO_LOGIN_STARTED: {
      return { ...state, loginStatus: 'ongoing' };
    }
    case DO_LOGIN_SUCCESS: {
      return { ...state, loginStatus: 'success' };
    }
    case DO_LOGIN_FAIL: {
      return { ...state, loginStatus: 'failed' };
    }
    case SESSION_CHECK_STARTED: {
      return { ...state };
    }
    case SESSION_CHECK_HAVE: {
      const { user_id, name } = action.payload.session_data.user;
      const username = user_id;
      return {
        ...state,
        username,
        name,
        loginStatus: 'success',
      };
    }
    case SESSION_CHECK_NONE: {
      return { ...state, loginStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
};

export default sagaLoginReducer;
