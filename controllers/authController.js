const User = require('../model/User');

exports.getLogin = (req, res) => {
    res.send('OK');
}

exports.getRegister = (req, res) =>{
    res.send('OK');
}

exports.postRegister = async (req, res) =>{
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

