const express = require('express');
const router = express.Router();
const festivalsCtrl = require('../controllers/festivals');
const commentsCtrl = require('../controllers/comments');


router.get('/', isLoggedIn, festivalsCtrl.index);
router.get('/', festivalsCtrl.index);
router.get('/new', isLoggedIn, festivalsCtrl.new);
router.get('/new', festivalsCtrl.new);
router.get('/comments/:id', commentsCtrl.new);
router.post('/comments/:id', commentsCtrl.createComment);
router.post('/new', festivalsCtrl.createFestival);
router.get('/:id', festivalsCtrl.show);
router.delete('/:id', festivalsCtrl.delete);
router.get('/:id/edit', festivalsCtrl.showUpdate);
router.put('/update/:id', festivalsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;
