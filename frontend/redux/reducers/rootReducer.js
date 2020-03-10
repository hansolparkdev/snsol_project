import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sagaCounterReducer from './sagaCounterReducer';
import thunkCounterReducer from './thunkCounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  sagaCounter: sagaCounterReducer,
  thunkCounter: thunkCounterReducer,
});

export default rootReducer;
