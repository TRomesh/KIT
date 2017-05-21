import { SIGN_UP_REQUEST, SIGN_IN_REQUEST } from '../constants/user';

export function signUp(login, password) {
  return (dispatch) => {
    let data = {
      'login': login,
      'password': password
    };
    $.ajax({
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      url: 'http://localhost:3000/registration'
    }).then(data => {
      console.log('received data', data);
      dispatch(signUpSuccessful(data));
    }).catch(err => {
      console.log('err', err);
    });
  }
}


export function signIn(login, password) {
  return dispatch => {
    let data = {
      login: login,
      password: password
    };
    $.ajax({
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      url: 'http://localhost:3000/authorization'
    }).then(data => {
      dispatch(signInSuccessful(data));
    }).catch(err => {
      console.log('err', err);
    });
  }
}
