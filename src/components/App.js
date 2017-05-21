import React, { Component } from 'react';
import Login from './login/login';
import Registration from './registration/registration';
import Chat from './chat/chat';
import Account from './account/account';
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
        <div>
          <Registration/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
