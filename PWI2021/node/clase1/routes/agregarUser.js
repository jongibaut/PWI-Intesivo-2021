const { response } = require("express");
const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.render('agregar');
})

router.post('/new', (req, res) => {
    console.log(req.body);
    console.log("Usuario creado 😎!!");
    res.redirect('/agregar');
})
module.exports = router;