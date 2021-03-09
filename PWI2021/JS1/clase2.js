//JSON {}
const profe = {
    nombre: "Jon",
    apellido: "Gibaut",
    edad: 19,
    casado: false,
    hobbies: [
        {nombre: "tocar la guitarra 🎸"},
        {nombre: "programar"},
    ]

}
/* consigna:
hacer un array de lo que quieran con al menos 5 elementos, pasar el nombre de los primeros 3, sumar un entero, mostrar la cantidad de elementos del array sin usar array.length.*/
const alumnos = [
    {
        id: 1,
        nombre: "Florencia",
        apellido: "Martin",
        edad: 25
    },
    {
        id: 2,
        nombre: "Marco",
        apellido: "Casciaro",
        edad: 19
    },
    {
        id: 3,
        nombre: "Leo",
        apellido: "Messi",
        edad: 33
    },
    {
        id: 4,
        nombre: "pepito",
        edad: 10
    }
]
var acumulador = 0;
var contador = 0;
for(var i = 0; i<alumnos.length;i++){
    if(i < 3){
        console.log(alumnos[i].nombre)
    }
    //acumulador = acumulador + alumnos[i].edad;
    acumulador += alumnos[i].edad;
    //contador = contador + 1;
    contador++;
}
console.log(acumulador);
console.log(contador);
/*for (var i = 0; i< alumnos.length; i++){
    if(i+1 == 3){
        console.log("hola Messi");
    }
    console.log(alumnos[i].nombre);
}
console.log(profe.nombre);*/
//var n1 = parseInt(prompt("Ingrese un numero"));
//var n2 = parseInt(prompt("Ingrese un numero"));
// "4" + "4" = 44
//var num1 = parseInt(n1);
//var num2 = parseInt(n2)
// me lo devuelve sin las comillas en formato int(entero).

function numeros(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var suma = num1+num2;
    var resta = num1-num2;
    var mult = num1*num2;
    alert(suma);
    alert(resta);
    alert(mult);
    if(num2 == 0){
        alert("no se puede dividir por 0");
    }
    else{
        var div = num1/num2;
        alert(div);
    }

    
}
function sumar(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    acumulador = num1+num2;
    alert(acumulador);
}
function restar(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var resta = num1-num2;
    alert(resta);
}
function multiplicar(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var mult = num1*num2;
    alert(mult)
}
function dividir(){
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    if(num2 == 0){
        alert("no se puede dividir por 0");
    }
    else{
        var div = num1/num2;
        alert(div);
    }
}