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

class Navigation extends Component {

  logout=()=>{
    
  }

  render() {
    return (
      <div>
         <AppBar
           title="KIT"
           showMenuIconButton={false}
           iconElementRight={
             <div className="column">
                   <Link to="/"><FlatButton label="Home"/></Link>
                   <Link to="/account"><FlatButton label="Account"/></Link>
                 <IconMenu
                  iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Log out" />
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
