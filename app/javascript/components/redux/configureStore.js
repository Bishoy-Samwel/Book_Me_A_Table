/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { elementsReducer } from './elements';

const rootReducer = combineReducers({
  elements: elementsReducer,
  // additional reducers could be added here
});

// eslint-disable-next-line import/prefer-default-export
export const store = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
