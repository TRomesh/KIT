import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone'

const style = {
  height: 270,
  width: 220,
  margin: 30,
};

const previewStyle = {
    width: 196
};

const style1 = {
  height: 350,
  width: 1000,
  marginTop: 20,
  marginBottom:20,
  marginLeft:80,
  padding: 7,
};

const style2 = {
  paddingTop: 50,
};

const style3 = {
  marginTop: 50,
};

const style4 = {
  marginLeft: 150,
};

const style5 = {
  marginLeft: 15,
};

const style6 = {
  marginLeft: 240,
};

const imgstyle = {
  height: 240,
  width: 200,
  marginTop: 15,
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

const gridList = {
    width: 350,
    height: 270,
    overflowY: 'auto',
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

  constructor(props) {
    super(props);
    this.state = {
      editingPic: false,
      editingProfile: false,
    };
  }

  render() {
    return (
      <div className="row">
        <div style={style1}>
          <Paper style={style1} zDepth={1} className="column">
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              style={style4}
              >
              <MenuItem primaryText="Edit" />
            </IconMenu>
            <div>
            {
                this.state.editingPic ? <div className="col-sm-1 col-md-1 col-lg-1">
                    <Dropzone onDrop={this.onDrop} multiple={false} accept="image/*">
                        <div>Try dropping some files here, or click to select files to upload.</div>
                        <img style={previewStyle} src={this.state.preview} />
                    </Dropzone>
                    {this.renderSave()}

                    </div> : <div className="col-sm-1 col-md-1 col-lg-1">

                              <GridList
                                cellHeight={200}
                                style={gridList}
                              >
                                <GridTile>
                                  <img src={'http://aurora-awards.com/wp-content/uploads/2017/05/girls-hd-images-cute-girl-hd-wallpaper-cnmuqi.jpg'} />
                                </GridTile>
                              </GridList>

                          </div>
            }
            </div>

            <div className="col-md-6" style={style2}>

              <h2><b> {this.state.editingProfile ? <div className="col-md-1"><TextField
                                  ref="firstname" hintText="firstname" defaultValue={this.props.firstname}
                                  errorText={this.state.firstnameerr} />
                            </div> : 'FirstName'}

                                  { ' ' }

                                   {this.state.editingProfile ? <div className="col-md-4" style={style6}><TextField
                                    ref="lastname" hintText="lastname" defaultValue={this.props.lastname}
                                    errorText={this.state.lastnameerr} />
                            </div> : 'LastName'} </b></h2><br/>


              <h4>{this.state.editingProfile ? <div style={style5}><TextField
                                  ref="username" hintText="username" defaultValue={this.props.username}
                                  errorText={this.state.usernameerr} />
                            </div> : 'Username'}</h4>

              <h4>{this.state.editingProfile ? <div style={style5}><TextField
                                  ref="age" hintText="age" defaultValue={this.props.age}
                                  errorText={this.state.ageerr} />
                            </div> : 'age'}</h4>

              <h4>{this.state.editingProfile ? <div style={style5}><TextField
                                  ref="city" hintText="city" defaultValue={this.props.city}
                                  errorText={this.state.cityerr} />
                            </div> : 'city'}</h4>
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
