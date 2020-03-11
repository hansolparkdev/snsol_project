
export const THUNK_UP_COUNTER = 'THUNK_UP_COUNTER';
export const THUNK_DOWN_COUNTER = 'THUNK_DOWN_COUNTER';


export const thunkIncrement = () => ({
  type: THUNK_UP_COUNTER,
  value: 3,
});

export const thunkDecrement = () => ({
  type: THUNK_DOWN_COUNTER,
  value: 3,
});

export const thunkIncrementAsync = () => (dispatch) => {
  setTimeout(() => {
    // 1 초뒤 dispatch 합니다
    dispatch(thunkIncrement());
  }, 100);
};

export const thunkDecrementAsync = () => (dispatch) => {
  setTimeout(() => {
    // 1 초뒤 dispatch 합니다
    dispatch(thunkDecrement());
  }, 100);
};

export const initialState = {
  thunkValue: 1,
};

const thunkCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case THUNK_UP_COUNTER:
      return { ...state, thunkValue: state.thunkValue + action.value };
    case THUNK_DOWN_COUNTER:
      return { ...state, thunkValue: state.thunkValue - action.value };
    default:
      return { ...state };
  }
};

export default thunkCounterReducer;
