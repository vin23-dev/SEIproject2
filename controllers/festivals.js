const Festival = require('../models/festival');
const Comment = require('../models/comment');

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
    Festival.findById(req.body.id, function(err, festivals){
        Comment.find({festival: festivals._id}, function(err, comments){
            res.render('festivals/show', {title: 'Festival Details', festivals, comments});
        })
    })
}

function deleteOne(req, res){
    Festival.findByIdAndDelete(req.params.id, function(err, festival){
        res.redirect('/festivals/');
    })
}

function showUpdate(req, res){
    Festival.findById(req.params.id, function(err, festival){
        console.log(festival);
        res.render('festivals/update', {title: 'Update Festival', festival: festival})
    })
}

function update(req, res){
    Festival.findByIdAndUpdate(req.params.id, req.body, function(err, festivals){
        res.redirect('/festivals/')
    })
}