import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {grey600,orangeA700} from 'material-ui/styles/colors';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

class Previousmessages extends Component {

  render() {
    return (
    <Paper>
      <ListItem
        primaryText={this.props.user}
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
