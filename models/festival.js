const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: String,
    userId: Object,
    userName: String,
});

const festivalSchema = new Schema({
    title: String,
    location: String,
    yearsAttended: Number,
    websiteUrl: String,
    comments: [commentSchema]
},{
    timestamps: true
});

module.exports = mongoose.model('Festival', festivalSchema);