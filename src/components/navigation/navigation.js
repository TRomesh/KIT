import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3030");


class Navigation extends Component {

  logout=()=>{

  }

  render() {
    socket.emit('online',{username:localStorage.getItem("user")});
    return (
      <div>
         <AppBar
           title="KIT"
           showMenuIconButton={false}
           iconStyleRight={{marginTop:0}}
           iconElementRight={
             <div className="column">
                <Link to="/chat"><FlatButton label="Home"/></Link>
                <Link to="/account"><FlatButton label="My Profile"/></Link>
                <Link to="/signout"><FlatButton label="Signout"/></Link>
                <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Settings" />
                </IconMenu>
          </div>
           }
         />
         {this.props.children}
       </div>
    );
  }
}

export default Navigation;
