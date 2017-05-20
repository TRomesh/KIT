import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Message from './message';
import Messagebox from './messagebox';
import Previousmessages from './previousmessages';
import Leftsidebar from './leftsidebar';
import Centercontainer from './centercontainer';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};



class Chat extends Component {

  render() {
    return (
    <div>
      <Messagebox/>
    </div>
    );
  }
}

export default Chat;
