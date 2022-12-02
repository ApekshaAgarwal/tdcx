import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';

import thunkMiddleware from 'redux-thunk';
import { apiServiceMiddleware } from '../components/API';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

const isDev = process.env.NODE_ENV === 'development';

const config = {
  key: 'root',
  storage,
  whitelist: ['user', 'projectSearchFilter'],
  debug: isDev // to get useful logging
};
const reducers = persistCombineReducers(config, rootReducer);
const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware, apiServiceMiddleware];
if (isDev ) {
  middleware.push(loggerMiddleware);
}
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = {
  enhancers
};

export const store = configureStore({
  reducer: reducers,
  middleware:middleware
});
export const persistor = persistStore(store, persistConfig, () => {});
