const User = require('../model/User');
const {registerValidation} = require("../middlewares/validation");
const bcrypt = require('bcryptjs');
const {checkDuplicate} = require('../helpers/duplicates');

/* exports.getLogin = (req, res) => {
    res.send('OK');
}

exports.getRegister = (req, res) =>{
    res.send('OK');
} */

exports.postRegister = async (req, res) =>{
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

   checkDuplicate();

    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hashedPassword(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPass
    });

    const savedUser = await user.save();
    return res.json({
        message: 'User is register', savedUser,
        messageNew: 'User has id', _id
    });
}

exports.postLogin = (req, res) => {
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    checkDuplicate(); // check for email
    
}

