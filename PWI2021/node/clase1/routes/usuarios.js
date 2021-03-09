var express = require('express');
var router = express.Router();

const usuarios = [
    {
        id: 1,
        nombre: "Jon",
        apellido: "Gibaut",
        edad: 19
    },
    {
        id: 2,
        nombre: "Leo",
        apellido: "Messi",
        edad: 33
    }
];

const list = (req, res) => {
    res.render('usuarios', {usuarios, multiple : true});
}
const single = (req, res) => {
    console.log(req.params.id);
    const usuario = usuarios.find(user => user.id == req.params.id);
    res.render('usuarios', {usuario, multiple : false});
}

router.get('/single/:id', single)
router.get('/list', list);

module.exports = router;