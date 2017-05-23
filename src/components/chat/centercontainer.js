import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Message from './message';
import io from 'socket.io-client';


const style = {
  padding:0,
  height:480,
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
  {uname:'Tharaka',created:'2017-05-20',message:':* :*',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'},
  {uname:'Madushika',created:'2017-05-20',message:'Moko karanne?',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
  {uname:'Tharaka',created:'2017-05-20',message:'Mukuth na wasthu kammali :/',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'},
  {uname:'Madushika',created:'2017-05-20',message:'ummmma :*',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj4AAAAJGY1Y2U3ZTE4LTFkOTktNGMxMi04ZWExLTY5OGY3NTU1ZTYyMg.jpg'},
  {uname:'Tharaka',created:'2017-05-20',message:':* :*',image:'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAIcAAAAJDc0ZDdkNjViLTFmNDEtNGQ4Zi04YmNlLWFkMzZjYjBjMTNhNg.jpg'}
];

class Centercontainer extends Component {

  chatmessage=()=>{
    return messages.map((message,index)=>{
       return <Message key={index} user={message.uname} created={message.created} message={message.message} image={message.image} style={style}/>
    });
  }

  render() {
    return (
      <div style={style}>
        {
          this.chatmessage()
        }
      </div>
    );
  }
}

export default Centercontainer;
