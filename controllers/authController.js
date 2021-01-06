const User = require('../model/User');
const {registerValidation} = require("../middlewares/validation");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* exports.getLogin = (req, res) => {
    res.send('OK');
}

exports.getRegister = (req, res) =>{
    res.send('OK');
} */

exports.postRegister = async (req, res) =>{
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const emailExists = await User.findOne({
        email: req.body.email
    })

    const nameExists = await User.findOne({
        name: req.body.name
    });

    if(emailExists) {
        return res.status(400).send("Email already exist");
    }

    if(nameExists) {
        return res.status(400).send('Name already exist');
    }

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

exports.postLogin = async (req, res) => {
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email or password is wrong');
    
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send("Invalid Password");

    // create and assign token
    const token = jwt.sign({_id: user._id}, process.env.SECRET);
    // add to header
    res.header('token', token);
    res.send(token);
}


exports.postLogout = async (req, res) => {
    
}

