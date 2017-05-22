const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const approutes = require('./routes/AppRoutes');
const messageroutes = require('./routes/MessageRoutes');
const userroutes = require('./routes/UserRoutes');


const port = process.env.PORT || 3030;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/kit');

let onlineUsers = [];
let sockets = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended:true
}));
app.use(cors);

approutes(app);
messageroutes(app);
userroutes(app);

server.listen(port,()=>{console.log('App running on port :'+port)});
