const express = require("express");
const router = express.Router();
const {send} = require('./../services/mail');


router.get('/', (req,res) =>  {
    res.render('registro');
});

router.post('/create', async(req,res) => {
    try{
    const obj = {
        mail : req.body.mail,
        subject: "Bienvenido",
        text: "bienvenido"
    }
    const mail = await send(obj);
    console.log(mail);
    
    // otra forma de dicr lo mismo const {body : usuario} = req
    res.end(); //pongo res.end() para que la pagina no se quede en un loop infinito
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;