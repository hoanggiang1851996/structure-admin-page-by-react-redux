import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/RootReducer';
import promise from 'redux-promise';

const enhancer = applyMiddleware(promise);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
};
