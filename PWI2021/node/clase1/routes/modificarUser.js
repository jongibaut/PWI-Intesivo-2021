const express = require("express");
const router = express.Router();

router.get('/', (req,res) => {
    res.render('modificar');
})

router.post('/new',(req,res) => {
    console.log(req.body);
    console.log("Usuario Modificado 😎!!")
    res.redirect('/modificar'); 
    //res.end();
})

module.exports = router;