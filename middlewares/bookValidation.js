const Joi = require('@hapi/joi');

const bookValidation = (data) => {
    const schema = {
        name: Joi.string().required(),
        year: Joi.number().required(),
        info: Joi.string().required(),
        numPages: Joi.number().required(),
        publisher: Joi.string().required(),
        publishedPhone: Joi.number().required(),
        publishedDate: Joi.date().required()
    }

    return Joi.validate(data, schema)
}

module.exports.bookValidation = bookValidation;