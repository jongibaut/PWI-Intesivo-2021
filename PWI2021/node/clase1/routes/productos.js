var express = require('express');
var router = express.Router();

const productos = [
    {
        id:1,
        nombre: "Manzana"
    },
    {
        id:2,
        nombre: "Banana"
    },
    {
        id:3,
        nombre: "Naranja"
    },
    {
        id:4,
        nombre: "Pera"
    },
    {
        id:5,
        nombre: "Mandarina"
    },

];

const list = (req, res) => {
    res.render('productos', {productos});
}
const single = (req, res) => {
    console.log(req.params.id);
    const producto = productos.find(item => item.id == req.params.id);
    console.log(producto);
    res.render('producto', {producto});
} 
router.get('/', list);
router.get('/single/:id', single);


module.exports = router;