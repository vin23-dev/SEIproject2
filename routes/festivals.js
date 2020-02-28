const express = require("express");
const router = express.Router();
const tktksCtrl = require("../controllers/festivals");

router.get("/", tktksCtrl.index);

module.exports = router;
