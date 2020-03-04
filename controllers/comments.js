const Festival = require('../models/festival');

module.exports = {
    createComment,
    updateComment,
}

function createComment(req, res){
    Festival.findById(req.params.id, function(err, festival){
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        festival.comments.push(req.body);
        festival.save(function(err){
            res.redirect(`/festivals/${festival._id}`)
        });
    });
}

function updateComment(req, res){
    Festival.findOne({'comments._id': req.params.id}, function(err, festival){
        let commentSubdoc = festival.comments.id(req.params.id);
        commentSubdoc.text = req.body.text;
        festival.save(function(err){
            res.redirect(`/festivals/${festival._id}`);
        });
    });
}