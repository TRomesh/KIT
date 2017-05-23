import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Message from './message';
import Previousmessages from './previousmessages';
import Leftsidebar from './leftsidebar';
import Messagebox from './messagebox';
import Divider from 'material-ui/Divider';
import Centercontainer from './centercontainer';

const style = {
  padding:0,
  margin:0
};

const style1 = {
  padding:0,
  overflowY: 'hidden'
};

class Chat extends Component {

  render() {
    return (
      <div>
        <div className="column">
            <div className="col-md-3" style={style}>
                  <Leftsidebar/>
            </div>
            <Paper className="col-md-9" style={style1}>
                <div>
                  <div><Centercontainer className="col-md-10"/></div>
                  <div><Messagebox className="col-md-2"/></div>
                </div>
            </Paper>
        </div>
    </div>
    );
  }
}

export default Chat;
