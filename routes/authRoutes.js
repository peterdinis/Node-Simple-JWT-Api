const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/register', authController.getRegister);
router.get('/login', authController.getLogin);
router.post('/register', authController.postRegister);
router.post('/login', authController.postLogin);

module.exports = router;