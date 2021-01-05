const User = require('../model/User');

const checkDuplicate = async() => {
    const emailExists = await User.findOne({
        email: req.body.email
    })

    const nameExists = await User.findOne({
        name: req.body.name
    });

    const passwordExists = await User.findOne({
        password: req.body.password
    })

    if(emailExists) {
        return res.status(400).send("Email already exist");
    }

    if(nameExists) {
        return res.status(400).send('Name already exist');
    }

    if(!emailExists) {
        return res.status(400).send("Email does not exists");
    }

    if(!passwordExists) {
        return res.status(400).send("Password is wrong");
    }

    // check if password is correct
    
}

module.exports = checkDuplicate;