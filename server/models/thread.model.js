const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thread = new Schema({
    people:[{
        type : Schema.Types.ObjectId,
        ref : 'user'
    }],
    created:{ type: Date, default: Date.now }
});


module.exports = mongoose.model('thread',thread);
