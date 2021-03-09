const express = require("express");
const router = express.Router();

const alumnos = [
    {
        id: 1,
        nombre: "Jon",
        edad: 19
    },
    {
        id: 2,
        nombre:"Milena",
        edad:20
    },
    {
        id:3,
        nombre: "Mateo",
        edad: 18
    },
    {
        id: 4,
        nombre: "Leo",
        edad: 33
    }
]

router.get("/", (req, res) => {
    res.render("alumnos", {alumnos: alumnos, curso: "PWI intesivo"});
    
});

module.exports = router;