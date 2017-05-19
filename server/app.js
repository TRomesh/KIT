
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3030;
let onlineUsers = [];
let sockets = {};

server.listen(port,()=>{console.log('App running on port :'+port)});

app.get('/',(req, res) => {
  res.json({"message": "Hello world!"});
});
