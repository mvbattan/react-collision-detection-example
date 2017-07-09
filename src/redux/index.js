import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import layout from './LayoutHandler/reducer';

const reducers = combineReducers({ layout });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
