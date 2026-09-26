import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import {persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

export const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  persistStore(store, () => {
    console.log('restored reducers');
  });
  return store;
};
