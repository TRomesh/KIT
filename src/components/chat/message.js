import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import {grey600,orangeA700} from 'material-ui/styles/colors';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};


class Recivedmessages extends Component {
  render() {
    return (
      <ListItem
        disabled={true}
        primaryText="Stewie Griffn"
        secondaryText={
          <p>
          <span style={{color:orangeA700}}>Brendan Lim</span> --
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
        </p>
        }
      leftAvatar={
        <Avatar src="http://vignette3.wikia.nocookie.net/simpsons/images/5/5e/Stewie_griffin_by_mighty355-d7u8ws6.png/revision/latest?cb=20161111175109" />
      }
      secondaryTextLines={4}
    />
    );
  }
}

export default Recivedmessages;
