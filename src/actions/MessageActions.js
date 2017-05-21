

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
