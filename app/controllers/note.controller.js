const Note = require('../models/note.model.js');
var ObjectId = require('mongodb').ObjectID;
// Create and Save a new Note
exports.create = async (req, res) => {
        var listSrc = JSON.parse(req.body['arrayList']);
        listSrc.forEach(element => {
            const romantic = new Note({
                title: element.title || "Untitled Note",
                src: element.src,
                thumbnails: req.file.filename,
                category: req.body.category
            });
            romantic.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Note."
                    });
                });
        })
    
};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    var a = [];
    a = await Note.find();
    res.send(a);
};

exports.getActionMovie = async (req, res) => {
    var a = [];
    a = await Note.find({ category: 2 });
    res.send(a);
};
exports.getAnimeMovie = async (req, res) => {
    var a = [];
    a = await Note.find({ category: 3 });
    res.send(a);
};
exports.getRomanticMovie = async (req, res) => {
    var a = [];
    a = await Note.find({ category: 1 });
    res.send(a);
};
exports.getSeriesMovie = async (req, res) => {
    var a = [];
    a = await Note.find({ category: 4 });
    res.send(a);
};
exports.getSeriesMovieEpisode = async (req, res) => {
    var a = [];
    a = await Note.aggregate(
        [{
            $lookup: {
                from: "seriesmovies",
                localField: "_id",
                foreignField: "idmovie",
                as: "embeddata"
            }
        },
        {
            $match: { _id: ObjectId(req.body.idmovie) }
        }]);
    res.send(a[0].embeddata);
};

exports.findMovieForPlaylist = async (req, res) => {
    var a = [];
    a = await Note.find();
    res.send(a);
};

exports.CountUserViews = (req, res) => {
    const romantic = new Note({
        countUser: req.body.countUser,
    });
};

exports.searchMovie = async (req, res) => {
    var dataSearch = [];
    dataSearch = await Note.find({ title: new RegExp(req.body.title) });
    res.send(dataSearch);
};

