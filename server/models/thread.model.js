const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thread = new Schema({
    people:[{uname:String}],
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('thread',thread);
