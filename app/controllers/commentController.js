const commentModel = require('../models/commentModel.js');
exports.SaveComments = async (req, res) => {
    const paramComment = new commentModel({
        content: req.body.content,
        idmovie: req.body.idmovie
    });
    // console.log(paramComment);
    
    var a = await paramComment.save()
}

exports.loadingComment = async (req, res) => {
    const paramComment = new commentModel({
        idmovie: req.body.idmovie
    });    
    var a = await commentModel.find({ idmovie:  paramComment.idmovie })
    res.send(a);
}