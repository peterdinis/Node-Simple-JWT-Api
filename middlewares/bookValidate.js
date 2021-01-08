const Joi = require('@hapi/joi');

const bookValidation = (data) => {
    const schema = {
        name: Joi.string().min(5).required(),
        publisher: Joi.string().required(),
        publishedPhone: Joi.number().required(),
        publishedDate: Joi.date().required()
    }

    return Joi.validae(data, schema);
}

module.exports = bookValidation;