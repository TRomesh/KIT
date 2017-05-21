import { SIGN_UP_REQUEST, SIGN_IN_REQUEST } from '../constants/user';
import axios from 'axios';

export const signUp=(userdata)=>{
  return (dispatch) => {

    axios.post('http://localhost:3000/signup',
        userdata
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


export const signIn=(credentials)=>{
  return dispatch => {

    axios.post('http://localhost:3000/signin',
        credentials
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

export const getUserDetails=(email)=>{
  return dispatch => {

    axios.get('http://localhost:3000/user',
        email
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


export const updateUserDetails=(user)=>{
  return dispatch => {

    axios.put('http://localhost:3000/user',
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
