import {SEND_MESSAGE, GET_MESSAGE, ROOM_USER_LIST_UPDATE} from '../constants/chat';

const initialState = {
  messages: []
};

export default function Chat(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      };
    case GET_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]

      };
    case ROOM_USER_LIST_UPDATE:
      return {
        ...state,
        roomUserList: action.payload
      };
    default:
      return state;
  }
}
