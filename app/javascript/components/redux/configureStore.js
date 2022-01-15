/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { elementsReducer } from './elementsReducer';

const rootReducer = combineReducers({
  elements: elementsReducer,
  // additional reducers could be added here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
