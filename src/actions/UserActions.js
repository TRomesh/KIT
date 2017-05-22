import { SIGN_UP_REQUEST, SIGN_IN_REQUEST, GET_USER_DETAILS, UPDATE_USER_DETAILS } from '../constants/user';

import axios from 'axios';

export const signUp=(userdata)=>{

    axios.post('http://localhost:3030/signup',
        userdata
      )
      .then((data)=>{
        return ({
            type: SIGN_UP_REQUEST,
            data:data
        });
      })
      .catch((error)=>{
        console.log('err', error);
      });
}


export const signIn=(credentials)=>{
  console.log('data came to action from ui',credentials);

    axios.post('http://localhost:3030/signin',
        credentials
      )
      .then((data)=>{
        console.log('token recived from server',data.data);
        localStorage.setItem('jwtToken', data.data.token);
        return ({
            type: SIGN_IN_REQUEST,
            data:data.data
        });
      })
      .catch((error)=>{
        console.log('err', error);
      });
}

export const getUserDetails=(email)=>{

    axios.get('http://localhost:3030/user',
        email
      )
      .then((data)=>{
        console.log(data);
        return ({
            type: GET_USER_DETAILS,
            user:data.data
        });
      })
      .catch((error)=>{
        console.log('err', error);
      });
}


export const updateUserDetails=(user)=>{

    axios.put('http://localhost:3030/user',
        user
      )
      .then((data)=>{
        console.log(data);
        return ({
            type: UPDATE_USER_DETAILS,
            user:data.data
        });
      })
      .catch((error)=>{
        console.log('err', error);
      });
}
