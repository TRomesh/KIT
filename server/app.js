
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const approutes = require('./routes/AppRoutes');
const messageroutes = require('./routes/MessageRoutes');
const userroutes = require('./routes/UserRoutes');


const port = process.env.PORT || 3030;

// let dbConfig = config.get('App.dbConfig');
let onlineUsers = [];
let sockets = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));

approutes(app);
messageroutes(app);
userroutes(app);

server.listen(port,()=>{console.log('App running on port :'+port)});
