const express = require("express");
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index);

router.get('/', function(req, res, next) {
  res.render('../views/users/index');
});

module.exports = router;
