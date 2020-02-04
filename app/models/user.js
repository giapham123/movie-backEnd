const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    username: String,
    password: String,
    auth: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('user', NoteSchema);