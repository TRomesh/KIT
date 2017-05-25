import 'babel-polyfill';
import * as constants from '../constants/user';

const initialState = {
  fname: '',
  lname: '',
  uname: '',
  status: '',
  age: '',
  city: '',
  picture: ''
};


export default function User(state = initialState, action) {
  switch (action.type) {
    case constants.SIGN_UP_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case constants.SIGN_IN_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case constants.SIGN_UP_FAIL:
      return Object.assign({},state,{isError:true});

    case constants.SIGN_IN_FAIL:
      return Object.assign({},state,{isError:true});

    case constants.GET_USERS:
      return Object.assign({},state,{isError:true});

    case constants.GET_USER_DETAILS:
      return Object.assign({},state,{isError:true});

    case constants.UPDATE_USER_DETAILS:
      return Object.assign({},state,{isError:true});

    case constants.ADD_FRIENDS:
      return Object.assign({},state,{isError:true});

    default:
      return state;
  }
}
