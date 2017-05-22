import { SIGN_UP_REQUEST, SIGN_IN_REQUEST } from '../constants/user';
import axios from 'axios';

export const signUp=(userdata)=>{

    axios.post('http://localhost:3030/signup',
        userdata
      )
      .then((data)=>{
        console.log('user successfuly added',data);
        // dispatch(data);
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
        // dispatch(data);
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
        //dispatch(data);
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
        //dispatch(data);
      })
      .catch((error)=>{
        console.log('err', error);
      });
}
