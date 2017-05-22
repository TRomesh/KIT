import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router';

class Navigation extends Component {

      state = {
      logged: true,
    };

    handleChange = (event, logged) => {
      this.setState({logged: logged});
    };

  render() {
    return (
      <div>
         <AppBar
           title="KIT"
           showMenuIconButton={false}
           iconElementRight={
             <div className="column">
                   <FlatButton label="Home"/>
                   <FlatButton label="Profile"/>
                 <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
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
