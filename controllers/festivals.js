const Festival = require('../models/festival');

module.exports = {
    new: newFestivalView,
    createFestival,
    index,
    show,
    delete: deleteOne,
    showUpdate,
    update
}

function newFestivalView(req, res){
    res.render('festival/new')
}

function createFestival(req, res){
    let festival = new Festival(req.body);
    festival.user = req.user.id
    festival.save(function(err){
        if (err) return res.render('festival/new');
        console.log(`added festival to database: ` + festival);
        res.redirect('/festival');
    })
}

function index(req, res){
    Festival.find({}, function(err, festivsls){
        res.render('festivals/index', {title: 'My Festivals', festivals})
    })
}

function show(req, res){
    Festival.findById(req.body.id, function(err, festivals))
}