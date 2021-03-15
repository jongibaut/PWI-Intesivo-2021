// {usuario : string().required.maxLength(13), password : string().required} me crea valores a seguir para diferentes datos en el programa

const Joi = require('@hapi/joi');

const schemas = {
    auth: Joi.object().keys({
        user: Joi.string().required(),
        pass: Joi.string().min(3).max(15).required()
    }),
    //create, update
}

module.exports = {schemas}