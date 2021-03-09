/*
Extensiones:
Mithril Emmet, open in browser, ESLint

comentario de varias lineas
*/
//comentario de una sola linea
var obj = {
    nombre: "Jon",
    apellido: "Gibaut",
    edad: 19,
    hobbies: ["tocar la guitarra 🎸", "programar"],
}
console.log(obj.hobbies[1]);
var alumnos = [
    {
        nombre: "pepito",
        edad: 22, 
    },
    {
        nombre: "Messi",
        edad: 33
    },
    {
        nombre: "fulano",
        edad:17
    },
    {
        nombre: "mengano",
        edad: 14
    },
    {
        nombre: "jon",
        edad:19
    }

]
var acumulador = 0;
var contador = 0;
for(var i = 0;i<alumnos.length; i++){
    if(i<=2){
        acumulador = acumulador + alumnos[i].edad;
    }
    if(alumnos[i].edad > 18){ 
        contador++;
    }
}
console.log(acumulador);
console.log(contador);
/* Hacer una array de objetos con 5 objetos, sumar la edad de los primeros tres en un acumulador y hacer un contador que cuente todo aquel con edad mayor a 18.*/
var acumulador = 0;
var contador = 0;
for(var i = 0; i<alumnos.length;i++){
    acumulador += alumnos[i].edad; // acumulador = acumulador + alumnos[i].edad
    contador++; // contador = contador + 1
}
console.log(acumulador);
console.log(contador);
var fruteria = ["Manzana", "Banana", "Pera"];// el array empieza siempre en la posicion 0
console.log(fruteria.length);
var longitud = prompt("Ingrese la longitud del array:");
var numeros = [];
for(var i = 0; i<longitud; i++){
    var numero = parseInt(prompt("Ingrese un numero"));
    numeros.push(numero);
}
console.log(numeros);

/*Hacer una calcualdora: que sume reste multiplique o divida, dos numeros en un form y 4 botones diferentes(uno para sumar, uno para restar, otro para multipcar y un ultimo para dividir) */
function suma(){
    console.log(document.getElementById("numero1"));
    console.log(document.getElementById("numero1").value);
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var suma = numero1 + numero2;
    console.log(suma);
}
function resta(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resta = numero1 - numero2;
    console.log(resta);
}
function multi(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var multi = numero1*numero2;
    console.log(multi);
}
function divi(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    if(numero2 == 0){
        console.log("No se puede dividir por 0");
    }
    else{
    var divi = numero1/numero2;
    console.log(divi);
    }
}
/*
//for loop
for(var i = 0; i<fruteria.length;i++){
    console.log(i);
    console.log(fruteria[i]);
    if(fruteria[i] == "Manzana"){
        console.log("Hay manzanas");
    }
}

//while loop
var y = 0;
while (y<fruteria.length) {
    console.log(y);
    console.log(fruteria[y]);
    y++; // y = y + 1
}
*/
console.log(fruteria);