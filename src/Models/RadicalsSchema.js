const mongoose = require('mongoose');

const Radicals = mongoose.Schema({
    shape: {
        type: String,
        require: true,
        unique: true
    },
    meaning: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model('Radicals', Radicals);