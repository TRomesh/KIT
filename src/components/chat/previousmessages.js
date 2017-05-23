import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {grey600,orangeA700} from 'material-ui/styles/colors';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Previousmessages extends Component {

  deletemessage=()=>{
    console.log('delete');
  }

  render() {
    return (
    <Paper>
      <ListItem
        primaryText={this.props.user}
        rightIconButton={
          <IconButton tooltip="Delete message">
            <DeleteIcon onTouchTap={this.deletemessage}/>
          </IconButton>
        }
        secondaryText={
        <p>
          <span style={{color:orangeA700}}>{this.props.created}</span> --
          {this.props.message}
        </p>
        }
      leftAvatar={
        <Avatar src={this.props.image} />
      }
      secondaryTextLines={1}
    />
    </Paper>
    );
  }

}

export default Previousmessages;
