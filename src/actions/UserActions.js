import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_USER_DETAILS, UPDATE_USER_DETAILS, ADD_FRIENDS, REMOVE_FRIENDS } from '../constants/user';


function getUserData(data) {
  return {
      type: GET_USER_DETAILS,
      data
  };
}

function updateUserData(data) {
  return {
      type: UPDATE_USER_DETAILS,
      data
  };
}

function addFriends(data) {
  return {
      type: ADD_FRIENDS,
      data
  };
}

function removeFriends(data) {
  return {
      type: REMOVE_FRIENDS,
      data
  };
}

export const getUserDetails=(email)=>{
  return (dispatch) => {
    return axios.post('http://localhost:3030/user',email).then((data)=>{
                dispatch(getUserData(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}

export const updateUserDetails=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(updateUserData(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}

export const addFriend=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(addFriends(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}

export const removeFriend=(user)=>{
  return (dispatch) => {
    return axios.put('http://localhost:3030/user',user).then((data)=>{
                dispatch(removeFriends(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}
