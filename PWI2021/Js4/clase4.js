// arrow funciton, es una forma de simplificar la sintaxsis de la funcion.
const url = "https://rickandmortyapi.com/api/character";
let personajes = [];
const get = async () => {
try {
    const response = await fetch(url);
    console.log(response);
    const {results : characters} = await response.json();
    console.log(characters);
    return characters;
} catch (error) {
    console.error(error);
}
}
const buscar = () => {
    const {value : nombre} = document.getElementById("nombre");
    const personaje = personajes.find((item) => item.name === nombre);
    console.log(personaje.name);
    // uso === en vez de == para asegurar que aparte de que los dos elementos sean iguales que tambien sean del mismo tipo
}
const start = async () => {
    document.getElementById("boton").addEventListener("click", buscar);
    personajes = await get();
    console.log(personajes);
    document.getElementById("boton2").addEventListener("click", humans);

}

const humans = () => {
    let humanos = [];
    for (let i = 0; i < personajes.length; i++) {
        if(personajes[i].species == "Human"){
            humanos.push(personajes[i].name);
        }
        
    }
    console.log(humanos);
}

window.onload = start;
