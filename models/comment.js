const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    _id: Object,
    text: String,
    userId: Object,
    userName: String,
});

module.exports = mongoose.model('Comment', commentSchema);