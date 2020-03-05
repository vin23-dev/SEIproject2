const Festival = require('../models/festival');

module.exports = {
    createComment,
    updateComment,
    new: newCommentView
}

function newCommentView(req, res){
    console.log(req.params.id);
    Festival.findById(req.params.id, function(err, festival){
        
        res.render('festivals/comments', {festivalId: req.params.id, comments: festival.comments})
    })
}

function createComment(req, res){
    //add username and id to req.body
    Festival.findById(req.params.id, function(err, festival){
        festival.comments.push(req.body);
        festival.save(function(err){
            res.redirect(`/festivals/comments/${req.params.id}`)
        });
    });
}

function updateComment(req, res){
    Festival.findOne({'comments._id': req.params.id}, function(err, festival){
        let commentSubdoc = festival.comments.id(req.params.id);
        commentSubdoc.text = req.body.text;
        festival.save(function(err){
            res.redirect(`/festivals/`);
        });
    });
}