import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducer from './reducers/menu';

const store = createStore(
  combineReducers({
    layout: reducer,
    routing: routerReducer,
  }),
  {},
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
