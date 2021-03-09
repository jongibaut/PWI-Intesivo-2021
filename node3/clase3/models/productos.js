const pool = require('./../utils/bd');
const TABLA_PRODUCTOS = "productos";

//reutilizo mi funcion get del otro model y la adapto a mi nueva tabla
const get = async () => {
    const query = "SELECT * FROM ??";
    const params = [TABLA_PRODUCTOS];
    // la query me devuelve un objeto o conjunto de filas Data Row Package en un [{}]
    const rows = await pool.query(query, params);
    return rows;
}


module.exports = {get}