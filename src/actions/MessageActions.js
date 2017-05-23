import { SEND_MESSAGE, GET_MESSAGE, SEARCH_MESSAGE, ROOM_USER_LIST_UPDATE } from '../constants/message';
import axios from 'axios';


export const getPreviousMessages=(user)=>{

    axios.put('http://localhost:3000/message',
        user
      )
      .then((data)=>{
        console.log(data);
        return {
          type: GET_MESSAGE,
          payload: data
        }
      })
      .catch((error)=>{
        console.log('err', error);
      });
}


export const searchMessages=(user)=>{

    axios.put('http://localhost:3000/message',
        user
      )
      .then((data)=>{
        console.log(data);
        return {
          type: SEARCH_MESSAGE,
          payload: data
        }
      })
      .catch((error)=>{
        console.log('err', error);
      });
}
