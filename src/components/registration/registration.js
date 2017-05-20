import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {blueGrey50,lightBlue500} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 560,
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

class Registration extends Component {

  constructor(props,contex){
     super(props,contex);

       this.state = {

       }
  }

  validateEmail = (event) => {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  };

  isEmpty = (value) => {
    //return !_.isEmpty(value);
  };

  render() {
    return (
      <div>
        <Paper style={style} zDepth={2}>
          <h1 style={style1}><center>Sign Up</center></h1>
          <TextField hintText="First name" floatingLabelText="First name"/>
          <TextField hintText="Last name" floatingLabelText="Last name"/>
          <TextField hintText="Username" floatingLabelText="Username"/>
          <TextField hintText="Email" floatingLabelText="Email"/>
          <TextField hintText="Password" floatingLabelText="Password" type="password"/>
          <br/><br/>
          <RaisedButton label="Sign Up" primary={true} style={style2} />
        </Paper>
      </div>
    );
  }
}

export default Registration;
