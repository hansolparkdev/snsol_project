import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, Thunk));

sagaMiddleware.run(mySaga);

export default store;
