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
import RaisedButton from 'material-ui/RaisedButton';

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
  marginLeft: 80,
  marginTop:10,
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

const buttonStyle = {
  width: 222,
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
    width: 220,
    height: 270,
    margin: 30,
    overflowY: 'auto',
};

const previewStyle = {
  width: 220,
  height: 270,
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
      files: {},
      preview: '',
      mouseover: false,
      picture: '',
    };
  }

  componentDidMount = () => {
    //ProfileActions.fetchProfilePicture(localStorage.getItem('apitoken'), localStorage.getItem('username'));
    //ProfileStore.addChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState({
      //picture: ProfileStore.getProfilePic()
    });
  }

  _editProfilePic = () => {
      this.setState({
          editingPic: !this.state.editingPic
      });
  }

  _editProfile = () => {
      this.setState({
          editingProfile: !this.state.editingProfile
      });
  }

  onDrop = (files) => {
      console.log(files);
      this.setState({
          files: files,
          preview: files[0].preview
      });
  }

  _cancelEdit = () => {
      this.setState({
          editingPic: false,
          preview: '',
          files: '',
      });
  }

  _saveImage = () => {
      // var fd = new FormData();
      // var self = this;
      // fd.append('apitoken', localStorage.getItem('apitoken'));
      // fd.append('file', this.state.files[0]);
      // fd.append('email', localStorage.getItem('email'));
      // fd.append('user', localStorage.getItem('username'));
      // $.ajax({
      //     type: 'POST',
      //     url: '/api/profile/profilepic?token=' + localStorage.getItem('apitoken'),
      //     data: fd,
      //     contentType: false,
      //     processData: false,
      //     success: function (data) {
      //         console.log("success");
      //         console.log(data);
      //         if(data.done == true) {
      //           ProfileActions.fetchProfilePicture(localStorage.getItem('apitoken'), localStorage.getItem('username'));
      //           location.reload();
      //         } else {
      //
      //         }
      //     },
      //     error: function (data) {
      //         console.log("error");
      //         console.log(data);
      //     }
      // });
  }

  renderSave = () => {
      return (
          this.state.preview ? <div>
              <RaisedButton onClick={this._saveImage} label="Save" primary={true} style={buttonStyle}/>
              <RaisedButton label="Cancel" onClick={this._cancelEdit} style={buttonStyle} />
          </div> : ''
      );
  }

  _showUpload = () => {
    this.setState({
      mouseover: true
    });
  }

  _hideUpload = () => {
    this.setState({
      mouseover: false
    });
  }

  _saveChanges = () => {
    // let val = true;
    // let firstname = this.refs.firstname.getValue();
    // let lastname = this.refs.lastname.getValue();
    // let username = this.refs.username.getValue();
    // let age = this.refs.age.getValue();
    // let city = this.refs.city.getValue();
    //
    // let data = {
    //   firstname: firstname,
    //   lastname: lastname,
    //   username: username,
    //   age: age,
    //   city: city,
    // }
    //
    // if(validatefirstname(firstname).error) {
    //   this.setState({
    //     firstnameerr: validatefirstname(firstname).error
    //   });
    //   val = false;
    // }
    // if(validatelastname(lastname).error) {
    //   this.setState({
    //     lastnameerr: validatelastname(lastname).error
    //   });
    //   val = false;
    // }
    //
    // if(val) {
    //   ProfileActions.updateChanges(data);
    //   location.reload();
    //   this.setState({
    //     editingProfile: false
    //   });
    // }

    this.setState({
        editingProfile: false
    });
  }

  _cancelEditProfile = () => {
    this.setState({
      editingProfile: false,
      //firstnameerr: '',
      //lastnameerr: ''
    });
  }

  render() {
    return (
      <div className="row">
        <div style={style1}>
          <Paper style={style1} zDepth={1} className="column">

            <div className="col-md-4">
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
                              >
                                <GridTile style={gridList}>
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

              <div>{this.state.editingProfile ? <div style={style5}><RaisedButton
                                  label="Save" primary={true} onTouchTap={this._saveChanges}/>
                            </div> : ''}</div>

            </div>

            <div className="col-md-2">
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                style={style4}
                >
                <MenuItem primaryText="Edit" onTouchTap={this._editProfile}/>
              </IconMenu>
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
