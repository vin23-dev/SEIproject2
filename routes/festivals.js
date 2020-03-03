const express = require('express');
const router = express.Router();
const festivalsCtrl = require('../controllers/festivals');


router.get('/', festivalsCtrl.index);
router.get('/new', festivalsCtrl.new);
router.post('/new', festivalsCtrl.createFestival);
router.get('/:id', festivalsCtrl.show);
router.delete('/:id', festivalsCtrl.delete);
router.get('/:id/edit', festivalsCtrl.showUpdate);
router.post('/update/:id', festivalsCtrl.update);

module.exports = router;
