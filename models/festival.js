const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
});

const festivalSchema = new Schema({
    title: String,
    location: String,
    yearsAttended: Number,
    websiteUrl: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [commentSchema]
},{
    timestamps: true
});

module.exports = mongoose.model('Festival', festivalSchema);