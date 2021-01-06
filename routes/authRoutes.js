const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

/* router.get('/register', authController.getRegister);
router.get('/login', authController.getLogin); */
router.get('/logout', jsonParser, authController.getLogout);
router.post('/register', jsonParser, authController.postRegister);
router.post('/login', jsonParser, authController.postLogin);

module.exports = router;