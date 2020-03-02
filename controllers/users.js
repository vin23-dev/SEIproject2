const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    console.log(req.user);
    console.log(users);
    res.render("users/index", { 
        users,
        user: req.user });
  });
}