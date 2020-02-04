const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    src: String,
    thumbnails: String,
    countUser: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('romantics', NoteSchema);