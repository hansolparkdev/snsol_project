import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sagaCounterReducer from './sagaCounterReducer';
import thunkCounterReducer from './thunkCounterReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  sagaCounter: sagaCounterReducer,
  thunkCounter: thunkCounterReducer,
  login: loginReducer,
});

export default rootReducer;
