import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sagaCounterReducer from './sagaCounterReducer';
import thunkCounterReducer from './thunkCounterReducer';
// import loginReducer from './loginReducer';
import sagaLoginReducer from './sagaLoginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  sagaCounter: sagaCounterReducer,
  thunkCounter: thunkCounterReducer,
  // login: loginReducer,
  sagaLogin: sagaLoginReducer,
});

export default rootReducer;
