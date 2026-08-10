//Array de Objetos
const usuarios =[
    {nombre: "Sofia", edad: 22},
    {nombre: "Jorge", edad: 20},
    {nombre: "Juan", edad: 16},
    {nombre: "Pepe", edad: 25},
    {nombre: "Tomas", edad: 13}
]

function esMayor(edad, nombre){
    if(edad >= 18)console.log(`${nombre} es mayor de edad`);
    else console.log(`${nombre} es menor de edad`)
}

// funciona como LINQ, el array de objetos es como una tupla
let sonMayores = usuarios.map(u => esMayor(u.edad,u.nombre));