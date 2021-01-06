const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    info: {
        type: String,
        required: true
    },

    numPages: {
        type: Number,
        required: true
    },

    publisher: {
        type: String,
        required: true
    },

    publishedPhone: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);