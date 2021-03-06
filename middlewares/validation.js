const Joi = require("@hapi/joi");

// register validation schema
const registerValidation = (data) => {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }

    return Joi.validate(data, schema)
}

const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }

    return Joi.validate(data, schema)
}

module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;