const Festival = require("../models/festival");

module.exports = {
  index
};

function index(req, res) {
  Festival.find({}, function(err, festivals) {
    if (err) return next(err);
    res.render("festivals/index", { festivals });
  });
}
