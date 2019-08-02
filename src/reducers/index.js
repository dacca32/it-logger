// root reducer
import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  // all of our application reducers go in here...
  log: logReducer,
  tech: techReducer
})