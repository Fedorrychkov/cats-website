import {
  createStore,
  combineReducers,
  // applyMiddleware,
} from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { watchFetchHistory } from './sagas/paymentHistory';
// import {
//   paymentHistoryReducer,
//   PaymentHistoryAction,
// } from './reducers/paymentHistory';

export interface IRootState {
  // payments: PaymentHistoryAction;
}

// const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  // payments: paymentHistoryReducer,
});

const store = createStore(reducers);

// sagaMiddleware.run(watchFetchHistory);

export default store;
