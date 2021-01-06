const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bodyParser = require('body-parser');
const authUser = require('../helpers/auth');

let jsonParser = bodyParser.json();

/* router.get('/register', authController.getRegister);
router.get('/login', authController.getLogin); */
router.get('/logout', jsonParser, authUser, authController.getLogout);
router.post('/register', jsonParser, authController.postRegister);
router.post('/login', jsonParser, authUser, authController.postLogin);

module.exports = router;