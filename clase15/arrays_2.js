// Metodos
let colores = ["rojo", "verde", "azul"];
colores.push("amarillo"); // Agrega un elemento al final del array
console.log(colores); 
colores.unshift("naranja"); // Agrega un elemento al inicio del array
console.log(colores); 
colores.pop(); // Elimina el último elemento del array
console.log(colores); 
colores.shift(); // Elimina el primer elemento del array
console.log(colores);

// Reasignacion
colores.splice(1, 1, "morado"); // Reemplaza el elemento en la posición 1 con "morado"
console.log(colores);
colores.splice(2, 0, "rosa"); // Inserta "rosa" en la posición 2 sin eliminar elementos
console.log(colores);
colores.splice(0, 1); // Elimina el elemento en la posición 0
console.log(colores);

// Desestructuracion
const nums = [1, 2, 3, 4, 5, 6];
const [a, b, c] = nums;
console.log(a,b,c);
const[,segundo] = nums;
console.log(segundo);
const [d,e, ...resto] = nums; // (...resto) agarra los dos primeros elementos y el resto lo guarda en un array
console.log(resto); 