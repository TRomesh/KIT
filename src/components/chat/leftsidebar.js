import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import {grey100} from 'material-ui/styles/colors';
import Previousmessages from './previousmessages';
import IconButton from 'material-ui/IconButton';
import AutoComplete from 'material-ui/AutoComplete';
import NewMessage from 'material-ui/svg-icons/communication/message';


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


        state = {
        open: false,
        dataSource: [],
        message:''
      };

      handleUpdateInput = (value) => {
        this.setState({
          dataSource: [
            value,
            value + value,
            value + value + value,
          ],
        });
      };

      handleOpen = () => {
        console.log('new message');
        this.setState({open: true});
      };

      handleClose = () => {
        this.setState({open: false});
      };

      previousmessages=()=>{
        return messages.map((message,index)=>{
            return  <Previousmessages key={index} user={message.uname} created={message.created} message={message.message} image={message.image}/>
        });
      }

      newmessage=()=>{
        console.log('new message');
        this.setState({open: false});
      }

      handleChange=(event)=>{
        this.setState({message: event.target.value});
      }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.newmessage}
      />,
    ];
    return (
    <Paper>
       <List>
         <Subheader className="row">
           <strong className="col-md-10">Recent chats</strong>
           <div className="col-md-2">
             <IconButton tooltip="New Message">
               <NewMessage onTouchTap={this.handleOpen} />
             </IconButton>
           </div>
         </Subheader>
         <div style={{backgroundColor:grey100}}>
           <TextField hintText="Search" style={{padding:'15px'}}/>
         </div>
         <div style={style}>
         {
           this.previousmessages()
         }
         </div>
       </List>
       <Dialog
         title="Send New Message"
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}>
         <div className="row">
           <div className="col-md-12"><AutoComplete  hintText="Username" dataSource={this.state.dataSource} onUpdateInput={this.handleUpdateInput}/></div>
           <div className="col-md-12"/>
           <div className="col-md-12"><TextField hintText="Message" fullWidth={true} onChange={this.handleChange}/></div>
         </div>
       </Dialog>
    </Paper>
    );
  }

}

export default Leftsidebar;
