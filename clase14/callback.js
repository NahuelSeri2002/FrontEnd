//CallBack
function procesarUsuario(nombre, actionFinal){
    console.log("Cargando Base de Datos...")
    actionFinal(nombre)
}

const saludar = (nombre) => console.log(`Hola ${nombre}`);

procesarUsuario("Jorge", saludar);