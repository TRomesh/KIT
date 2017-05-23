import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

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
      <div>
        <Divider/>
        <div className="column" style={{marginTop:50}}>
          <div className="col-md-10">
            <TextField className="form-group" fullWidth={true} hintText="message.." onChange={this.handleChange} rows={1}/>
          </div>
          <div className="col-md-2" style={{marginTop:'5px'}}>
            <RaisedButton label="Send" primary={true} onTouchTap={this.Sendmessage}/>
          </div>
        </div>
      </div>
    );
  }

}

export default Messagebox;
