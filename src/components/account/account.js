import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const style = {
  height: 270,
  width: 220,
  margin: 30,
};

const style1 = {
  height: 350,
  width: 1220,
  margin: 20,
  padding: 7,
};

const style2 = {
  paddingTop: 50,
};

const style3 = {
  marginTop: 50,
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1220,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://www.trickscity.com/wp-content/uploads/2016/11/Best-Zayn-Malik-Haircuts-Image-2016-For-Stylish-Boys-1.jpg',
    title: 'Tharaka Romesh',
  },
  {
    img: 'http://www.hdwallpapersformobile.com/wp-content/uploads/2016/10/Best-Facebook-Profile-Picture-Only-For-Boy.jpg',
    title: 'Kazun Kodithuwakku',
  },
  {
    img: 'http://7bna.net/images/girls-images/girls-images-24.jpg',
    title: 'Chathra Senevirathna',
  },
  {
    img: 'http://sguru.org/wp-content/uploads/2017/04/facebook-profile-photo-boy-stylish-18.jpg',
    title: 'Isuru Dhilan',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/originals/41/10/06/4110064bdde8983ab8f7fb3751bea712.jpg',
    title: 'Rajika Imal',
  },
  {
    img: 'http://21702-presscdn.pagely.netdna-cdn.com/wp-content/uploads/2015/06/danielle-sharp.jpg',
    title: 'Dilshani Wikramasinghe',
  },
  {
    img: 'https://3stoogiez.com/wp-content/uploads/2015/02/Miranda-Kerr-Wallpaper-4-1024x768.jpg',
    title: 'Dhanushi Ishani',
  },
  {
    img: 'http://aurora-awards.com/wp-content/uploads/2017/05/girls-hd-images-cute-girl-hd-wallpaper-cnmuqi.jpg',
    title: 'Hansani Dasanayaka',
  },
];

class Account extends Component {
  render() {
    return (
      <div className="row">
        <div style={style1}>
          <Paper style={style1} zDepth={1} className="column">
            <Card style={style} className="col-md-1">
              <CardMedia>
                <img src="https://s-media-cache-ak0.pinimg.com/originals/87/8d/b1/878db1dfedbadae5846882fad98d7c9f.png"/>
              </CardMedia>
            </Card>
            <div className="col-md-6" style={style2}>
              <h3><b>Moana Fernando</b></h3>
              <h5>moana@gmail.com</h5>
              <h5>age</h5>
              <h5>Colombo</h5>
            </div>
          </Paper>
        </div>

        <div style={style3}>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
              cols={4}
            >
              <Subheader><h3><b>Friend List</b></h3></Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={<a>{tile.title}</a>}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
