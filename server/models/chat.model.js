const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
    sender:String,
    message:String,
    thread:String,
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('message',message);
