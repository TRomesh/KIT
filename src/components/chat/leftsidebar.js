import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import {grey100} from 'material-ui/styles/colors';
import Previousmessages from './previousmessages';

const style = {
  padding:0,
  height:500,
  overflow:'auto'
};

  let messages = [
    {uname:'Tharaka',created:'2017-05-20',message:'Hello',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'},
    {uname:'Madushika',created:'2017-05-20',message:'Hi',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
    {uname:'Tharaka',created:'2017-05-20',message:'Kohomada',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'},
    {uname:'Madushika',created:'2017-05-20',message:'Hodin',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
    {uname:'Madushika',created:'2017-05-20',message:'Moko karanne?',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
    {uname:'Tharaka',created:'2017-05-20',message:'Mukuth na wasthu kammali :/',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'},
    {uname:'Madushika',created:'2017-05-20',message:'ummmma :*',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
    {uname:'Tharaka',created:'2017-05-20',message:':* :*',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'}
  ];

class Leftsidebar extends Component {

  previousmessages=()=>{
    return messages.map((message,index)=>{
        return  <Previousmessages key={index} user={message.uname} created={message.created} message={message.message} image={message.image}/>
    });
  }

  render() {
    return (
    <Paper>
       <List>
         <Subheader><strong>Recent chats</strong></Subheader>
         <div style={{backgroundColor:grey100}}>
           <TextField hintText="Search" style={{padding:'15px'}}/>
         </div>
         <div style={style}>
         {
           this.previousmessages()
         }
         </div>
       </List>
    </Paper>
    );
  }

}

export default Leftsidebar;
