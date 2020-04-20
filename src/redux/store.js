import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native'; // An asynchronous, unencrypted, persistent, key-value storage system for React Native.
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/root.reducer';
import loggerMiddleware from './middleware/logger';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    // 'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    // 'counterReducer',
  ],
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

const composedEnhancer = compose(applyMiddleware(thunk, loggerMiddleware), ...enhancerList);

const store = createStore(persistedReducer, composedEnhancer);

// Middleware: Redux Persist Persister
const persistor = persistStore(store);

export { store, persistor };
