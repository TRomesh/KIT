import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Messagebox extends Component {

  constructor(){
    super();
    this.state={
      textInput:''
    }
  }

  Sendmessage=()=>{
    console.log(this.state.textInput);
    this.setState({textInput:''});
  }

  handleChange=(event)=>{
    this.setState({textInput: event.target.value});
  }


  render() {
    return (
    <Paper zDepth={1} className="container">
        <div className="col-md-12" style={{paddingTop:'15px'}}><TextField className="form-group" fullWidth={true} hintText="message.." onChange={this.handleChange} rows={1}/></div>
        <div className="col-md-11"></div>
        <div className="col-md-1" style={{padding:'5px'}}><FlatButton label="Send" primary={true} onTouchTap={this.Sendmessage}/></div>
    </Paper>
    );
  }

}

export default Messagebox;
