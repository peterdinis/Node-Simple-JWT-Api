const Joi = require('@hapi/joi');

const bookValidation = (data) => {
    const schema = {

    }

    return Joi.validate(data, schema)
}

module.exports.bookValidation = bookValidation;