/* Buenas les mando la consigna del trabajo para este finde largo:
Hacer  una pagina web de 0 aplicando bootstrap y CSS, que solo la puedan acceder los usuarios que tenga el sistema de "usuario" que habiamos hecho en JS, tener un array de usuarios y recorrelo para ver si se puede iniciar sesion, si no mostrar un alert que diga "No se peude acceder a la pagina", cualquier pregunta escribanme por aca o por whatsapp */
const usuarios =  [
    {
        id: 0,
        username: "jon",
        pass: 1234
    },
    {
        id: 1,
        username: "messi",
        pass: 1234
    },
    {
        id: 2,
        username: "pepito",
        pass: 1234
    },
]

function iniciarSesion(){
    var pass = parseInt(document.getElementById("pass").value);
    var user = document.getElementById("username").value;
    var sesion;
    for (let i = 0; i < usuarios.length; i++) {
        console.log(usuarios[i].username);
        console.log(pass, user);
        if(user == usuarios[i].username && pass == usuarios[i].pass){
            window.location.href = "paginafinal.html"; 
            alert("Sesion Iniciada!");
            sesion = true;
            break; 
        }
        else{
            sesion = false;
        }
    }
    if(sesion == false){
        alert("usuario o pass incorrectos");
    }
}

function agregarUsuario(){
    var contra = parseInt(document.getElementById("pass").value);
    var user = document.getElementById("username").value;
    if(user == ""){
        alert("el usuario esta vacio")
    }
    else{
        var objeto = {
            username: user,
            pass: contra
        }
        usuarios.push(objeto);
        console.log(usuarios);
    }
}