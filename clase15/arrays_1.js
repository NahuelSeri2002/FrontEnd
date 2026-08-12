let aula = [
    {
        nombre: "Juan",
        apellido: "Perez"
    },
    {
        nombre: "Maria",
        apellido: "Gomez"
    },
    {
        nombre: "Luis",
        apellido: "Rodriguez"
    }
];

//array
console.log(aula); 
console.log(aula.length);
console.log(aula[0]);

//acceso a los objetos dentro del array
console.log(aula[0].nombre);
console.log(aula[0].apellido);

//Ultimo elemento del array
console.log("ultimo elemento del array:",aula[aula.length - 1]);

//for
for (let i = 0; i < aula.length; i++) {
    console.log(aula[i], i);
}