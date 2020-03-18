import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, Thunk));

sagaMiddleware.run(rootSaga);

export default store;
