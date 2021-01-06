const jwt = require('jsonwebtoken');

// create auth functions for procted routes

function authUser(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try {
        // verify token
        const verify = jwt.verify(token, process.env.SECRET);
        req.user = verify; // pridanie tokenu
    } catch(err) {
        res.status(400).send('Invalid token...');
    }
}

module.exports = authUser;