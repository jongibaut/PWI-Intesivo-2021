const express = require('express');
const router = express.Router();
const model = require('./../models/productos');

const all = async(req,res) => {
    var productos = await model.get();
    res.render('productoss', {productos});
}

router.get('/', all);

module.exports = router