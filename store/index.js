import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { autoRehydrate } from 'redux-persist-immutable';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const middleware = applyMiddleware(thunk); //pick your middleware flavors here

const store = ( undefined === window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
  createStore( reducers, compose(middleware, autoRehydrate()) ) :
  createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      middleware, autoRehydrate()
    )
  );

// persistStore(store, { storage: AsyncStorage, whitelist: ['auth', 'nav'] });

export default store;
