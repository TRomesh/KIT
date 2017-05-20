import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {blueGrey50,lightBlue500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 350,
  width: 500,
  marginLeft: 380,
  marginRight: 380,
  marginTop: 50,
  marginBottom: 50,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: blueGrey50
};

const style1 = {
  color: lightBlue500
};

const style2 = {
  margin: 12,
};

class Login extends Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={2}>
          <h1 style={style1}><center>Sign In</center></h1>
          <TextField hintText="Email" floatingLabelText="Email"/>
          <TextField hintText="Password" floatingLabelText="Password" type="password" />
          <br/><br/>
          <RaisedButton label="Sign In" primary={true} style={style2} />
        </Paper>
      </div>
    );
  }
}

export default Login;
