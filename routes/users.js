const express = require("express");
const router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);

// router.get('/', function(req, res, next) {
//   res.render('users/index');
// });

module.exports = router;
