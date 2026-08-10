function nombre(nombre){
    console.log("Hola " + nombre + "!");
}
nombre("Nahuel");

const mitad = (numero) => { return numero / 2; }
let resultado = mitad(100);
console.log(resultado);

function verification(url){
    url.includes("admin") ? console.log("tiene permisos") : console.log("no tiene permisos");
}

verification("https://miweb.com/admin/panel");
verification("https://miweb.com/panel");

let variable = "45.99px";
variable = parseFloat(variable);
variable = variable*2;
console.log(variable);