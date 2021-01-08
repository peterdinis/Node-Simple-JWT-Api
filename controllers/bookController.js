const Book = require('../model/Book');

exports.getBooks = (req, res) => {
    const book = Book.find({});
    return res.json({
        message: 'All books from db', book
    });
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
    const book = Book.findById(req.params.id);
    return res.json({
        message: 'Specific book..', book
    })
}

exports.updateBook = (req, res) => {
    
}

exports.deleteBook = (req, res) => {
    const book = Book.findByIdAndDelete(req.params.id);
    return res.json({
        message: 'Book was deleted..', book
    })
}