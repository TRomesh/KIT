import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Message from './message';
import Previousmessages from './previousmessages';
import Leftsidebar from './leftsidebar';
import Messagebox from './messagebox';
import Centercontainer from './centercontainer';

const style = {
  padding:0
};



class Chat extends Component {

  render() {
    return (
      <div >
        <div className="container row">
            <div className="col-md-3" style={style}>
                  <Leftsidebar/>
            </div>
            <Paper className="col-md-9" style={style}>
                <div>
                  <div><Centercontainer/></div>
                  <div><Messagebox/></div>
                </div>
            </Paper>
        </div>
      </div>
    );
  }
}

export default Chat;
