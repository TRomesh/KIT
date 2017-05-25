import axios from 'axios';
import jwtDecode from 'jwt-decode';
import * as constants from '../constants/user';


function getUserData(data) {
  return {
      type: constants.GET_USER_DETAILS,
      data
  };
}

function errorgetUserData(data) {
  return {
      type: constants.GET_USER_DETAILS,
      data
  };
}

function updateUserData(data) {
  return {
      type: constants.UPDATE_USER_DETAILS,
      data
  };
}

function errorupdateUserData(data) {
  return {
      type: constants.GET_USER_DETAILS,
      data
  };
}

function addFriends(data) {
  return {
      type: constants.ADD_FRIENDS,
      data
  };
}

function erroraddFriends(data) {
  return {
      type: constants.GET_USER_DETAILS,
      data
  };
}

function removeFriends(data) {
  return {
      type: constants.REMOVE_FRIENDS,
      data
  };
}

function errorremoveFriends(data) {
  return {
      type: constants.GET_USER_DETAILS,
      data
  };
}

export const getUserDetails=(email)=>{
  return (dispatch) => {
    return axios.post('http://localhost:3030/user',email).then((data)=>{
                dispatch(getUserData(data));
            }).catch((error)=>{
                dispatch(errorgetUserData(error));
            });
        };
}

export const updateUserDetails=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(updateUserData(data));
            }).catch((error)=>{
                dispatch(errorupdateUserData(error));
            });
        };
}

export const addFriend=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(addFriends(data));
            }).catch((error)=>{
                dispatch(erroraddFriends(error));
            });
        };
}

export const removeFriend=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(removeFriends(data));
            }).catch((error)=>{
                dispatch(errorremoveFriends(error));
            });
        };
}
