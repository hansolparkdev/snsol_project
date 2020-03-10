export const SAGA_UP = 'SAGA_UP';
export const SAGA_DOWN = 'SAGA_DOWN';
export const SAGA_UP_ASYNC = 'SAGA_UP_ASYNC';
export const SAGA_DOWN_ASYNC = 'SAGA_DOWN_ASYNC';

export const sagaIncrement = () => ({
  type: SAGA_UP,
  value: 1,
});

export const sagaDecrement = () => ({
  type: SAGA_DOWN,
  value: 1,
});

export const initialState = {
  sagaValue: 1,
};

const sagaCounterReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case SAGA_UP_ASYNC:
      newState.sagaValue += action.value;
      break;
    case SAGA_DOWN_ASYNC:
      newState.sagaValue -= action.value;
      break;
    default:
      return newState;
  }
  return newState;
};

export default sagaCounterReducer;
