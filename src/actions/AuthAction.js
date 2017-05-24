import 'babel-polyfill';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SIGN_UP_FAIL, SIGN_IN_FAIL } from '../constants/user';


let setDataToLocalStorage=(data)=>{
  localStorage.setItem('jwtToken', data.data.token);
  localStorage.setItem('usr', jwtDecode(data.data.token).usr);
}

function signinSuccess(data) {
  return {
      type: SIGN_IN_SUCCESS,
      data
  };
}

function signupSuccess(data) {
  return {
      type: SIGN_UP_SUCCESS,
      data
  };
}

function signinFail(data) {
  return {
      type: SIGN_IN_SUCCESS,
      data
  };
}

function signupFail(data) {
  return {
      type: SIGN_UP_SUCCESS,
      data
  };
}



export const signUp=(userdata)=>{
  return (dispatch) => {
    return axios.post('http://localhost:3030/signup',userdata).then((data)=>{
                dispatch(signupSuccess(data));
            }).catch((error)=>{
                dispatch(signupFail(error));
            });
        };
}


export const signIn=(credentials)=>{

 return (dispatch) => {
    return axios.post('http://localhost:3030/signin',credentials).then((data)=>{
            setDataToLocalStorage(data);
            dispatch(signinSuccess(data));
            console.log('dispatched!!!');
          })
          .catch((error)=>{
            dispatch(signinFail(error));
          });
   };
}
