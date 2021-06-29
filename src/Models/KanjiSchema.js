const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({
    kanji: {
        type: String,
        require: true,
        unique: true
    },
    onyomiReading: [{
        type: String,
        require: true
    }],
    kunyomiReading: [{
        type: String,
        require: true,
    }],
    meaning: [{
        type: String,
        require: true
    }],
});

module.exports = mongoose.model('Kanjis', kanjiSchema);