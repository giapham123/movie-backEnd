const seriesModel = require('../models/seriesMovieModel')
var mongoose = require('mongoose');

exports.addSeriesMoive = (req,res) =>{
    var objectId = mongoose.Types.ObjectId(req.body.idmovie);
    // var objectId2 = new ObjectID(req.body.idmovie);
    const paramSeriesMovie = new seriesModel({
        title: req.body.title,
        src:  req.body.src,
        episodes: req.body.episodes,
        idmovie: objectId
    })
    paramSeriesMovie.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
    
}