const Joi = require('@hapi/joi');

const schemas = {
    create: Joi.object().keys({
        nombre: Joi.string().required(),
        apellido: Joi.string().required(),
        id_sucursal: Joi.number().required(),
        sueldo: Joi.number().required(),
        antiguedad: Joi.number().required()
    })
    //create, update
}

module.exports = {schemas}