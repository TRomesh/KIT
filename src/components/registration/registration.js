import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Registration;
