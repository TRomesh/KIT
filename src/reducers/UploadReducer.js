import 'babel-polyfill';
import { UPLOAD_DOCUMENT_SUCCESS, UPLOAD_DOCUMENT_FAIL } from '../constants/upload';


const initialState = {
  loading: false,
  isError: true,
  redireact:false
};


export default function User(state = [], action) {
  switch (action.type) {
    case UPLOAD_DOCUMENT_SUCCESS:
      return Object.assign({},state,{isError:false});

    case UPLOAD_DOCUMENT_FAIL:
      return Object.assign({},state,{isError:false});

    default:
      return state;
  }
}
