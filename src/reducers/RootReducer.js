import { combineReducers } from 'redux';
import chat from './ChatReducer';
import user from './UserReducer';

export default combineReducers({
  chat,
  user
})
