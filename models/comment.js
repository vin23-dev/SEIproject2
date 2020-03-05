const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
});

module.exports = mongoose.model('Comment', commentSchema);