import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
  height: 270,
  width: 220,
  margin: 30,
};

const style1 = {
  height: 350,
  width: 1240,
  margin: 20,
  padding: 7,
};

class Account extends Component {
  render() {
    return (
      <div>
        <Paper style={style1} zDepth={1}>
            <Card style={style}>
              <CardMedia>
                <img src="https://s-media-cache-ak0.pinimg.com/originals/87/8d/b1/878db1dfedbadae5846882fad98d7c9f.png"/>
              </CardMedia>
            </Card>
        </Paper>
      </div>
    );
  }
}

export default Account;
