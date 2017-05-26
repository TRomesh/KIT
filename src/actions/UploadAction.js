import 'babel-polyfill';
import axios from 'axios';
import { UPLOAD_DOCUMENT_SUCCESS, UPLOAD_DOCUMENT_FAIL } from '../constants/upload';

axios.defaults.headers.common['authorization'] = sessionStorage.getItem('jwtToken');


export function uploadSuccess({ data }) {
  return {
    type: UPLOAD_DOCUMENT_SUCCESS,
    data,
  };
}

export function uploadFail(error) {
  return {
    type: UPLOAD_DOCUMENT_FAIL,
    error,
  };
}

export const uploadDocumentRequest=({ file, name })=>{
    let data = new FormData();
    data.append('file', document);
    data.append('filename', name);

    return (dispatch) => {
      return  axios.post('/files', data)
                .then(response => dispatch(uploadSuccess(response)))
                .catch(error => dispatch(uploadFail(error)))
    }
}
