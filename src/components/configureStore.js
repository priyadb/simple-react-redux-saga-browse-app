import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from '../reducers/products';
import sortReducer from '../reducers/sort';
import { watcherSaga } from '../sagas/rootSaga';

const reducer = combineReducers({
  products: productsReducer,
  sort: sortReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
