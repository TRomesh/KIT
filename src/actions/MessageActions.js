import { SEND_MESSAGE, GET_MESSAGE, SEARCH_MESSAGE, ROOM_USER_LIST_UPDATE } from '../constants/message';
import axios from 'axios';

function getMessage(data) {
  return {
      type: GET_MESSAGE,
      data
  };
}

function searchMessage(data) {
  return {
      type: SEARCH_MESSAGE,
      data
  };
}

export const getPreviousMessages=(user)=>{
  return (dispatch) => {
    return axios.post('http://localhost:3000/message',user).then((data)=>{
                dispatch(getMessage(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}

export const searchMessages=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3000/message',user).then((data)=>{
                dispatch(searchMessage(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}
