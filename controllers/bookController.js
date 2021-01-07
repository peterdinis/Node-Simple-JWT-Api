const Book = require('../model/Book');

exports.getBooks = (req, res) => {

}

exports.postBooks = (req, res) => {
    const book = new Book({
        name: req.body.name,
        year: req.body.year,
        info: req.body.info,
        numPages: req.body.numPages,
        publisher: req.body.publisher,
        publishedPhone: req.body.publishedPhone,
        publishedDate: req.body.publishedDate
    })
    book.save();
    return res.json({
        message: 'Book was edit to db', book
    })
}

exports.getOneBook = (req, res) => {

}

exports.updateBook = (req, res) => {

}

exports.deleteBook = (req, res) => {
    
}