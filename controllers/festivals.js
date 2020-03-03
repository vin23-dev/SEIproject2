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
    book.user = req.user.id
    festival.save(function(err){
        if (err) return res.render('festival/new');
        console.log(`added festival to database: ` + festival);
        res.redirect('/festival');
    })
}