// Tipos de Variables

// var -> no se usa
var colorTaza = "gris";
// Re asignar
colorTaza = "rojo";
// Re declarar
var colorTaza = "azul";
console.log(colorTaza); // azul

// let -> es usada cuando queres cambiar su valor
let puntaje = 0;
//Re Asignar
puntaje = 10;
puntaje = 20;
console.log(puntaje); //20
// Esta prohibido re declarar una variable con let
// let puntaje = 30; // Error

// const -> se guardan datos que no van a cambiar su valor
const fechaNacimiento = 2002;
//no se puede redeclarar ni reasignar
// const fechaNacimiento = 1990; //Error 
//La excepcion a la regla
const nombres = ["Gustavo", "Andrea", "Luciano"];
// .push añade un elemento al final de un array
nombres.push("Javier");
console.log(nombres);
for(let i = 0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}

