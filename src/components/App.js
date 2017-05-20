import React, { Component } from 'react';
import Login from './login/login';
import Registration from './registration/registration';
import Chat from './chat/chat';
import Navigation from './navigation/navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Keep In Touch</h2>
        </div>
        <p >
          Keep In Touch Chat Application
        </p>
        <div>
          Registration
        </div>
      </div>
    );
  }
}

export default App;
