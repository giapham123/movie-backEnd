const Note = require('../models/note.model.js');
var ObjectId = require('mongodb').ObjectID;
// Create and Save a new Note
exports.create = async (req, res) => {
    const romantic = new Note({
        title: req.body.title || "Untitled Note",
        src: req.body.src,
        thumbnails: req.file.filename,
        category:req.body.category,

    });
    console.log(req.body.arrayList[0]);
    // for(let i=0; i< req.body.arrayList.length;i++){
    //     console.log(req.body.arrayList[i]);
        
    // }
    
    // romantic.save()
    //     .then(data => {
    //         res.send(data);
    //     }).catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while creating the Note."
    //         });
    //     });
};

// Retrieve and return all notes from the database.
exports.findAll = async (req, res) => {
    var a = [];
    a = await Note.find();
    res.send(a);
};

exports.getActionMovie = async (req, res) => {
    var a = [];
    a = await Note.find({category:2});
    res.send(a);
};
exports.getAnimeMovie = async (req, res) => {
    var a = [];
    a = await Note.find({category:3});
    res.send(a);
};
exports.getRomanticMovie = async (req, res) => {
    var a = [];
    a = await Note.find({category:1});
    res.send(a);
};
exports.getSeriesMovie = async (req, res) => {
    var a = [];
    a = await Note.aggregate(
        [{
            $lookup:{
                from:"seriesmovies",
                localField:"_id",
                foreignField: "idmovie",
                as: "embeddata"
            }
        },
        {
            $match:{_id:ObjectId("5d9c28b737ecf50a58652919")}
        }]);
    res.send(a);
    console.log(a);
    
};

exports.findMovieForPlaylist = async (req, res) => {
    var a = [];
    a = await Note.find().limit(4);
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

