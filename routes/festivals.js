const express = require("express");
const router = express.Router();
const festivalsCtrl = require("../controllers/users");

router.get("/", festivalsCtrl.index);

module.exports = router;
