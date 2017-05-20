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

  render() {
    return (
    <Paper zDepth={1} className="container">
        <div className="col-md-12" style={{paddingTop:'15px'}}><TextField className="form-group" fullWidth={true} hintText="message.." rows={1}/></div>
        <div className="col-md-11"></div>
        <div className="col-md-1" style={{padding:'5px'}}><FlatButton label="Send" primary={true} /></div>
    </Paper>
    );
  }

}

export default Messagebox;
