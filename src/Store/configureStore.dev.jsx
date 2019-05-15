import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducer from '../Reducers/UserReducers';
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  if (module.hot) {
    module.hot.accept('../Reducers/UserReducers', () => {
      const nextReducer = require('../Reducers/UserReducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
