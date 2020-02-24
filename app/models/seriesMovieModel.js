const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    src: String,
    episodes: Number,
    idmovie: Object
}, {
    timestamps: true
});

module.exports = mongoose.model('seriesMovie', NoteSchema);