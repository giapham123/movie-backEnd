const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    content: String,
    idmovie: String
}, {
    timestamps: true
});

module.exports = mongoose.model('comment', NoteSchema);