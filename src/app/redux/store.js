import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();
const enhancers = [];
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [
  thunk,
  routerMiddleware
];

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default createStore(
  rootReducers,
  composeWithDevTools(composedEnhancers),

);