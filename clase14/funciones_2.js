//Hoisting -> eleva las definiciones
saludar("Ana")
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

 //Arrow function
let edad = 18;
const validarEdad = (edad) =>{
    if(edad >= 18) return "Acceso Consedido";
    else return "Acceso Denegado";
}
console.log(validarEdad(edad));

const calcularDoble = numero => numero * 2;
console.log(calcularDoble(2));