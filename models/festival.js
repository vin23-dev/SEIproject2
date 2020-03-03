const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const festivalSchema = new Schema({
    title: String,
    location: String,
    yearsAttended: Number,
    websiteUrl: String
},{
    timestamps: true
});

module.exports = mongoose.model('Festival', festivalSchema);