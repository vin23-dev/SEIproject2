const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Object,
    name: String,
    email: String,
    googleId: String
  },{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);