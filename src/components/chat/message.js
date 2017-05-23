import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import {grey600,orangeA700} from 'material-ui/styles/colors';

class Recivedmessages extends Component {
  render() {
    return (
      <div>
      <ListItem
        disabled={true}
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
      secondaryTextLines={2}
    />
    <Divider/>
  </div>
    );
  }
}

export default Recivedmessages;
