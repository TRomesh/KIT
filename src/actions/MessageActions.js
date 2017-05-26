import { SEND_MESSAGE, GET_MESSAGE, SEARCH_MESSAGE, ROOM_USER_LIST_UPDATE, FAIL_GET_MESSAGE, FAIL_SEARCH_MESSAGE } from '../constants/message';
import axios from 'axios';

axios.defaults.headers.common['authorization'] = sessionStorage.getItem('jwtToken');

function getMessage(data) {
  return {
      type: GET_MESSAGE,
      data
  };
}

function getMessageFail(data) {
  return {
      type: FAIL_GET_MESSAGE,
      data
  };
}

function searchMessage(data) {
  return {
      type: SEARCH_MESSAGE,
      data
  };
}

function searchMessageFail(data) {
  return {
      type: FAIL_SEARCH_MESSAGE,
      data
  };
}

export const getPreviousMessages=(user)=>{
  return (dispatch) => {
    return axios.post('http://localhost:3000/message',user).then((data)=>{
                dispatch(getMessage(data));
            }).catch((error)=>{
                dispatch(getMessageFail(error));
            });
        };
}

export const searchMessages=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3000/message',user).then((data)=>{
                dispatch(searchMessage(data));
            }).catch((error)=>{
                dispatch(searchMessageFail(error));
            });
        };
}
