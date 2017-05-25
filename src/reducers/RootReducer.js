import { combineReducers } from 'redux';
import chat from './ChatReducer';
import user from './UserReducer';
import upload from './UploadReducer';

export default combineReducers({
  chat,
  user,
  upload
})
