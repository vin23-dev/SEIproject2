const express = require('express');
const router = express.Router();
const festivalsCtrl = require('../controllers/festivals');
const commentsCtrl = require('../controllers/comments');

router.get('/', isLoggedIn, festivalsCtrl.index);
router.get('/new', isLoggedIn, festivalsCtrl.new);
router.get('/new', isLoggedIn, festivalsCtrl.new);
router.get('/comments/:id', isLoggedIn, commentsCtrl.new);
router.post('/comments/:id', isLoggedIn, commentsCtrl.createComment);
router.post('/new', isLoggedIn, festivalsCtrl.createFestival);
router.get('/:id', isLoggedIn,festivalsCtrl.show);
router.delete('/:id', isLoggedIn,festivalsCtrl.delete);
router.get('/:id/edit', isLoggedIn, festivalsCtrl.showUpdate);
router.put('/update/:id', isLoggedIn, festivalsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;
