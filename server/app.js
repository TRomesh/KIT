
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3030;
let onlineUsers = [];
let sockets = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

server.listen(port,()=>{console.log('App running on port :'+port)});

app.get('/',(req, res) => {
  res.json({"message": "Hello world!"});
});
