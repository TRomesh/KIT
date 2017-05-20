const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const message = new Schema({
    uname:String,
    message:String,
    seen:Boolean,
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('message',message);
