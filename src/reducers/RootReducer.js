import { combineReducers } from 'redux';
import ChatReducer from './ChatReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  chat: ChatReducer,
  user: UserReducer
})
