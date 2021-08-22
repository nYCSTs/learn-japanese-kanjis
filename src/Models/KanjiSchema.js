const mongoose = require('mongoose');

const kanjiSchema = new mongoose.Schema({
    // Kanji propriamente dito
    kanji: {
        type: String,
        require: true,
        unique: true
    },
    // Significado do kanji
    kanjiMeaning: [{
        type: String,
        require: true,
    }],
    // Radicais que compõem o kanji (IDs)
    radicals: [{
        type: String,
        require: true,
    }],
    // Leituras onyomi
    onyomi: [{
        type: String,
        require: true
    }],
    // Leituras kunyomi
    kunyomi: [{
        reading: {
            type: String,
            require: true,
        },
        meaning: [{
            type: String,
            require: true,
        }],
    }],
});

module.exports = mongoose.model('Kanjis', kanjiSchema);