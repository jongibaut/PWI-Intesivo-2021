const pool = require("./../utils/bd"); // referencia de la conexion
const TABLA_EMPLEADOS = "empleados";
const TABLA_SUCURSAL = "sucursal";


//select a la BD

const get = async () => {
    const query = "SELECT emp.id, emp.nombre, emp.apellido, suc.nombre as nombreSucursal FROM ?? as emp JOIN ?? as suc ON emp.id_sucursal = suc.id";
    const params = [TABLA_EMPLEADOS, TABLA_SUCURSAL];
    // la query me devuelve un objeto o conjunto de filas Data Row Package en un [{}]
    const rows = await pool.query(query, params);
    return rows;
}
const single = async (id) =>{
    const query = `SELECT emp.*, suc.nombre as nombreSucursal FROM ?? as emp JOIN ?? as suc ON emp.id_sucursal = suc.id WHERE emp.id = ?`;
    const params = [TABLA_EMPLEADOS, TABLA_SUCURSAL, id];
    const rows = await pool.query(query, params);
    console.log(rows);
    return rows;
}

const create = async(obj) => {
    const query = `INSERT INTO ?? SET ?`;
    const params = [TABLA_EMPLEADOS, obj];
    const rows = await pool.query(query,params);
    return rows;
}

const update = async(id, obj) => {
    const query = `UPDATE ?? AS emp SET ? WHERE emp.id = ?`;
    const params = [TABLA_EMPLEADOS, obj, id];
    const rows = await pool.query(query,params);
    return rows;
}
module.exports = {get, single, create, update};