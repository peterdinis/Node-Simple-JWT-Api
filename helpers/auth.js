const jwt = require('jsonwebtoken');

// create auth functions for procted routes

function authUser(req, res, next){
    const token = req.header('auth-token');

}

module.exports = authUser;