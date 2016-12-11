import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, routerReducer as routing} from 'react-router-redux';
import {persistState} from 'redux-devtools';
import createLogger from 'redux-logger';

import catalogReducer from '../reducers/catalog';
import userReducer from '../reducers/user';

import DevTools from '../DevTools';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const router = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  catalogReducer: catalogReducer,
  userReducer: userReducer,
  routing: routing,
});

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  DevTools.instrument(),
  persistState(
    window.location.href.match(/[?&]_k=([^&]+)\b/)
  )
);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
