import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

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
    <Paper zDepth={3}>
        <div className="col-md-12" style={{paddingTop:'15px'}}><TextField className="form-group" fullWidth={true} hintText="message.." onChange={this.handleChange} rows={1}/></div>
        <div className="col-md-10"></div>
        <div className="col-md-2" style={{padding:'5px'}}><FlatButton label="Send" primary={true} onTouchTap={this.Sendmessage}/></div>
    </Paper>
    );
  }

}

export default Messagebox;
