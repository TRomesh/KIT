import React, { Component } from 'react';
import Chat from './chat/chat';
import Account from './account/account';
import Login from './login/login';
import Navigation from './navigation/navigation';
import Registration from './registration/registration';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


injectTapEventPlugin();

let hasToken = () =>{
  const token = localStorage.getItem('jwtToken');
  return (token == undefined);
}


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Registration}/>
            <Navigation>
              {/* <Route exact path="/chat" component={Chat}/>
              <Route exact path="/account" component={Account}/> */}
              <Route exact path="/" render={() => (hasToken() ? (<Redirect to="/chat"/>) : (<Chat />))}/>
              <Route exact path="/chat" render={() => (hasToken() ? (<Redirect to="/login"/>) : (<Chat />))}/>
              <Route exact path="/account" render={() => (hasToken() ? (<Redirect to="/login"/>) : (<Account />))}/>
            </Navigation>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}



export default App;
