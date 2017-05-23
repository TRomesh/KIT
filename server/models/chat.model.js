const mongoose = require('mongoose');
const User = require('./user.model');
const Thread = require('./thread.model');
const Schema = mongoose.Schema;

const message = new Schema({
    sender:{
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    message:String,
    thread:{
        type : Schema.Types.ObjectId,
        ref : 'thread'
    },
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('message',message);
