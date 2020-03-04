const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: Object,
    text: String,
    userId: Object,
    userName: String,
});

const festivalSchema = new Schema({
    id: Object,
    title: String,
    location: String,
    yearsAttended: Number,
    websiteUrl: String,
    comments: [commentSchema]
},{
    timestamps: true
});

module.exports = mongoose.model('Festival', festivalSchema);