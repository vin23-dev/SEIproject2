const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res, next) {
  console.log(req.query);
  console.log(users);
  console.log(req.user);
  res.render('views/users/index', {
    users,
    user: req.user,
    name: req.query.name,
    });
  };

