const { valid } = require('@hapi/joi');
const express = require('express');
const router = express.Router();
const model = require('../../models/empleados');
const {get} = require('../../models/sucursales');
const { validateCreate } = require('../../midlewares/empleados');

const all = async (req,res) => {
    var status = true;
    const empleados = await model.get(status);
    res.render('empleados', {empleados, status});
}
const allFalse = async (req,res) => {
    var status = false;
    const empleados = await model.get(status);
    res.render('empleados', {empleados, status});
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
    res.redirect('/admin/empleados');
}
const getCreate = async(req,res) => {
    const nombres = await get();
    console.log(nombres);
    res.render('AgregarEmpleado', {nombres});
}
const getUpdate = async(req,res) => {
    const id = req.params.id;
    const empleado = await model.single(id);
    const nombre = empleado[0].nombre;
    const apellido = empleado[0].apellido;
    const sueldo = empleado[0].sueldo;
    const antiguedad = empleado[0].antiguedad;
    const id_sucursal = empleado[0].id_sucursal;
    const nombreSucursal = empleado[0].nombreSucursal;
    const nombres = await get(); 
    res.render('ModificarEmpleado', {nombre, apellido, sueldo, antiguedad, id_sucursal, nombreSucursal, nombres});
}
const update = async(req,res) => {
    const id = req.params.id;
    const empModif = req.body;
    console.log(empModif);
    //const modificar = await model.update(id, empModif);
    res.redirect('/empleados');
}

const borrar = async(req,res) => {
    const status = false;
    const id = req.params.id;
    const borrado = await model.borrar(id, status);
    res.redirect('/empleados');
}

const habilitar = async(req,res) => {
    const status = true;
    const id = req.params.id;
    const borrado = await model.borrar(id, status);
    res.redirect('/empleados');
}

router.get('/', all);
router.get('/single/:id', single);
router.get('/create', getCreate);
router.post('/create',validateCreate, create)
router.get('/update/:id', getUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', borrar);
router.get('/disabled', allFalse);
router.get('/disabled/:id', habilitar);

module.exports = router