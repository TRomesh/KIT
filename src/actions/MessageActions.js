import { SEND_MESSAGE, GET_MESSAGE, ROOM_USER_LIST_UPDATE } from '../constants/message';
import axios from 'axios';


export function sendMessage(msg) {
  return {
    type: SEND_MESSAGE,
    payload: msg
  }
}


export function getMessage(msg) {
  return {
    type: GET_MESSAGE,
    payload: msg
  }
}


export  function updateRoomUserList(userLoginsInRoom) {
  return {
    type: ROOM_USER_LIST_UPDATE,
    payload: userLoginsInRoom
  }
}

export const getPreviousMessages=(user)=>{
  return dispatch => {

    axios.put('http://localhost:3000/message',
        user
      )
      .then((data)=>{
        console.log(data);
        dispatch(data);
      })
      .catch((error)=>{
        console.log('err', error);
      });
  }
}


export const searchMessages=(user)=>{
  return dispatch => {

    axios.put('http://localhost:3000/message',
        user
      )
      .then((data)=>{
        console.log(data);
        dispatch(data);
      })
      .catch((error)=>{
        console.log('err', error);
      });
  }
}
