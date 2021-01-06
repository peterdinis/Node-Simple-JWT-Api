const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const bookController = require('../controllers/bookController');

let jsonParser = bodyParser.json();

router.get('/books', bookController.getBooks)
router.post('/books', jsonParser, bookController.postBooks)
router.get('/book/:id', bookController.getOneBook)
router.patch('/book/:id', jsonParser, bookController.updateBook);
router.delete('book/:id', jsonParser, bookController.deleteBook);

module.exports = router;