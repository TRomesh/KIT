import 'babel-polyfill';
import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SIGN_UP_FAIL, SIGN_IN_FAIL } from '../constants/user';

const initialState = {
  loading: false,
  isError: true,
  redireact:false
};


export default function User(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case SIGN_IN_SUCCESS:
      return Object.assign({},state,{isError:false,redireact:true});

    case SIGN_UP_FAIL:
      return Object.assign({},state,{isError:true});

    case SIGN_IN_FAIL:
      return Object.assign({},state,{isError:true});

    default:
      return state;
  }
}
