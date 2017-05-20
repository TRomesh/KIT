import React, { Component } from 'react';
import Login from './login/login';
import Account from './account/account';
import Chat from './chat/chat';
import Navigation from './navigation/navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        {/* <div>
          <h2>Keep In Touch</h2>
        </div>
        <p >
          Keep In Touch Chat Application
        </p> */}
        <Chat/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
