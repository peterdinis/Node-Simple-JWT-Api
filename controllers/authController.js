const User = require('../model/User');
const {registerValidation} = require("../middlewares/validation");
const Joi = require('@hapi/joi');

exports.getLogin = (req, res) => {
    res.send('OK');
}

exports.getRegister = (req, res) =>{
    res.send('OK');
}

exports.postRegister = async (req, res) =>{
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user is already in DB
    const emailExists = await User.findOne({
        email: req.body.email
    })
    if(emailExists) {
        return res.status(400).send("Email already exist");
    }

    // check if name is already in DB
    const NameExists = await User.findOne({
        Name: req.body.Name
    })
    if(NameExists) {
        return res.status(400).send("Name already exist");
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    const savedUser = await user.save();
    return res.json({
        message: 'User is register', savedUser
    })
}

exports.postLogin = (req, res) => {
    res.send('OK');
}

