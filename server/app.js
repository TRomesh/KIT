
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./router');


const port = process.env.PORT || 3030;

// let dbConfig = config.get('App.dbConfig');
let onlineUsers = [];
let sockets = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

router(app);

server.listen(port,()=>{console.log('App running on port :'+port)});

app.get('/user',(req, res, next) => {
  res.json({"message": "Hello world!"});
});

app.post('/user',(req, res, next) => {
  res.json({"message": "Hello world!"});
});
