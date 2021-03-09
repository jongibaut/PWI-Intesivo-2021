 // Instalar extension ESLint
 document.write("Hola mundo <br>");
 console.log("Hola consola");
 /*
 Tipos de variables:
 -String o cadena de caracteres.
 -Int o numeros enteros.
 -Float o flotante, te "habilita" las comas en los numeros, numeros fraccionarios
 -Bool o boolean, true or false.
 -Date 10/2/2021
 -DateTime 10/2/2021 09:17

 Variable en JS:
 const(no cambia) [nombre de variable] = datos
 var(cambia) [nombre de variable] = datos

 camelCase: primera palabra con miinuscula segunda con mayuscula (mayorEdad)
 con_guiones: el guion actua como un espacio entre las palabras (mayor_edad)

 Tipos de Objetos:
 obj object {}
 array []
 */
const mayorEdad = 18;
const nombre = prompt("Ingrese su nombre", "Jon");
const edad = prompt("Ingrese su edad");
console.log(`Hola ${nombre}`);
console.log("Hola", nombre);
 // >(mayor a) <(menor a) >=(mayor igual a) <=(menor igual a) ==(igual a)
 // si no se cumple el if "salto al else"
if(edad >= mayorEdad){
    console.log("es mayor de edad");
}
else{
    console.log("no es mayor de edad");
}
// && = y || = o
if(edad >=18 && edad < 25){
    console.log("la edad esta entre 18 y 25")
}
else{
    if(edad >= 30 && edad < 60){
        console.log("la edad esta entre 30 y 60");
    }
    else{
        console.log("la edad es menor a 18 esta entre 25 y 30 o es mayor a 60");
    }
}

if(nombre == "Jon" || nombre == "Messi"){
    console.log("te llamas jon o messi");
}
//array o vector siempre empieza en la posicion 0
const frutas = ["Manzana","Banana","Naranja","Pera"];
//longitud del array
console.log(frutas.length);
//for para recorrer el array, declaro una variable en 0 para recorrer el array y al voy sumando
for(var i=0; i<frutas.length;i++){
    console.log(frutas[i]);
}
/*Otros tipos de loop:
while
do while

----------
var i = 0;
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}

-------
var i = 0;
do{
    console.log(frutas[i]);
    i++;
}
while(i<frutas.length)*/
//agregar items
var nuevonumeros = frutas.push("Mandarina");
console.log(frutas.length);
console.log(frutas[0]);
//cuando pongo [i o un numero] me refiero al dato del array en esa posicion
//i++ es lo mismo que decir i = i + 1

var array = [];

for(var i = 0; i<20;i++){
    var agregar = array.push(i+1);
    document.write(array[i],"<br>");
}

/*
Consigna:
Hacer un array de lo que quieran y agregar un 1 despues de cada dato si se cumple "sesion inciada".
*/
if(nombre=="Jon"){
    var largoSinModificar = frutas.length;
    for(var i = 0; i<largoSinModificar;i++){
        var newnumeros = frutas.push(1);
    }
    for(var i = 0; i<frutas.length;i++){
        document.write(frutas[i],"<br>")
    }
}