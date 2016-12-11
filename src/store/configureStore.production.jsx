import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware, routerReducer as routing} from 'react-router-redux';
// import reducers from 'reducers';

import catalogReducer from '../reducers/catalog';
import userReducer from '../reducers/user';

const router = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  catalogReducer: catalogReducer,
  userReducer: userReducer,
  routing: routing,
});

const enhancer = applyMiddleware(thunk, router);

const configureStore = initialState => {
  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
