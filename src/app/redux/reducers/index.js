import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { app } from './app';

const rootReducers = combineReducers({
  app,
  router: routerReducer
});

export default rootReducers;