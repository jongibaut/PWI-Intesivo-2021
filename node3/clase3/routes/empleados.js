const express = require('express');
const router = express.Router();
const model = require('./../models/empleados');

const all = async (req,res) => {
    const empleados = await model.get();
    res.render('empleados', {empleados});
}
const single = async(req,res) => {
    const id = req.params.id;
    const empleado = await model.single(id);
    res.render('empleado', {empleado});
}
const create = async(req,res) => {
    const obj = req.body;
    console.log(obj);
    const nuevoEmpleado = await model.create(obj);
    res.redirect('/empleados');
}
const getCreate = (req,res) => {
    res.render('AgregarEmpleado');
}
const getUpdate = async(req,res) => {
    const id = req.params.id;
    const empleado = await model.single(id);
    res.render('ModificarEmpleado', {empleado});
}
const update = async(req,res) => {
    const id = req.params.id;
    const empModif = req.body;
    console.log(empModif);
    const modificar = await model.update(id, empModif);
    res.redirect('/empleados');
}
router.get('/', all);
router.get('/single/:id', single);
router.get('/create', getCreate);
router.post('/create', create)
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);


module.exports = router