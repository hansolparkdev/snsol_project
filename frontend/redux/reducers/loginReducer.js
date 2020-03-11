import axios from 'axios';

export const THUNK_LOGIN_SUCCESS = 'THUNK_LOGIN_SUCCESS';
export const THUNK_LOGIN_ERROR = 'THUNK_LOGIN_ERROR';


export const thunkLoginSuccess = (data) => ({
  type: THUNK_LOGIN_SUCCESS,
  data,
});

export const thunkLoginError = (data) => ({
  type: THUNK_LOGIN_ERROR,
  data,
});

export const thunkIncrementAsync = (id, pw) => (dispatch) => {
  axios.post(
    'http://127.0.0.1:3001/auth/signin',
    {
      uid: id,
      upw: pw,
    },
  ).then((response) => {
    console.log(response);
    dispatch(thunkLoginSuccess(response));
  }).catch((err) => {
    alert(err.response.data);
    dispatch(thunkLoginError(err.response.data));
    // idInput.current.value = '';
    // pwInput.current.value = '';
    // idInput.current.focus();
  });
};

export const initialState = {
  loginState: false,
  loginErrorMsg: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case THUNK_LOGIN_SUCCESS:
      return { ...state, loginState: true };
    case THUNK_LOGIN_ERROR:
      return { ...state, loginErrorMsg: action.data };
    default:
      return { ...state };
  }
};

export default loginReducer;
