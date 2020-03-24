import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import sagaCounterReducer from './sagaCounterReducer';
import thunkCounterReducer from './thunkCounterReducer';
import followReducer from './followReducer';
import cardReducer from './cardReducer';
import sagaLoginReducer from './sagaLoginReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  sagaCounter: sagaCounterReducer,
  thunkCounter: thunkCounterReducer,
  follow: followReducer,
  card: cardReducer,
  sagaLogin: sagaLoginReducer,
});

export default rootReducer;
