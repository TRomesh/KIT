import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import {grey100} from 'material-ui/styles/colors';
import Previousmessages from './previousmessages';


class Leftsidebar extends Component {


  previousmessages=(props)=>{
      this.props.map((message,index)=>
      <Previousmessages key={index} user={message.uname} created={message.created} message={message.message}/>
    );
  }

  render() {
    return (
    <Paper>
       <List>
         <Subheader><strong>Recent chats</strong></Subheader>
         <div style={{backgroundColor:grey100}}>
           <TextField hintText="Search" style={{padding:'15px'}}/>
         </div>
         {

         }
       </List>
    </Paper>
    );
  }

}

export default Leftsidebar;
