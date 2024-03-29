const Message = require('../models/message.model');
const Thread = require('../models/thread.model');
const User = require('../models/user.model');
let onlineUsers = [];
let sockets = {};

module.exports = function (io,app) {

  io.on('connection', (socket) => {

        // Event for user connecting to socket
        socket.on('online', (data) => {
          if(data.username!=null){
            socket.name = data.username;
            onlineUsers.push(data.username);
            sockets[data.username] = socket;
            // socket.emit('online', data);
            console.log(data.username+' online');
          }
        });


        // Event for user joining a group
        socket.on('join group', (data) => {
            var name = data.name;
            socket.join(name);
            socket.broadcast.to(name).emit('join group', { username: socket.name });
            console.log('join group');
        });


        // Event for user leaving a group
        socket.on('leave group', (data) => {
            var name = data.name;
            socket.broadcast.to(name).emit('leave group', { username: socket.name });
            socket.leave(name);
            console.log('leave group');
        });


        // Event for user adding new group
        socket.on('new group', (data) => {
            socket.broadcast.emit('new group', data);
            console.log('new group');
        });


        // Event for user sending new message
        socket.on('new message', (data) => {

          socket.to('sender').emit(data.message);
          socket.to('reciver').emit(data.message);
          let message = new Message({
            sender:'',
            thread:'',
            message:data.message
          });
          message.save();
            console.log('new msg');
        });


        // Event for user going ofline
        socket.on('offline', () => {
            for (var i = 0, len = onlineUsers.length; i < len; i++) {
                if (onlineUsers[i] && onlineUsers[i].username === socket.name) {
                    onlineUsers.splice(i, 1);
                    delete sockets[socket.name];
                    socket.broadcast.emit('offline', {
                        username: socket.name
                    });
                }
            }
            console.log('offline');
        });


        // Event for user disconnecting
        socket.on('disconnect', () => {
            for (var i = 0, len = onlineUsers.length; i < len; i++) {
                if (onlineUsers[i] && onlineUsers[i].username === socket.name) {
                    onlineUsers.splice(i, 1);
                    delete sockets[socket.name];
                    socket.broadcast.emit('offline', {
                        username: socket.name
                    });
                }
            }
        });
        console.log('disconnect');
    });

}
