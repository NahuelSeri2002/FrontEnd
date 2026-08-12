// Metodos de Iteracion
// map
const numeros = [1, 2, 3, 4, 5, 6];
let duplicados =numeros.map(numero => numero * 2);
console.log(duplicados); // [2, 4, 6, 8, 10, 12]

function duplicar(numero) { //mas reutilizable
    return numero * 2;
}

let duplicados2 = numeros.map(numero => duplicar(numero))
console.log(duplicados2);

// forEach
let result = [];
const numeros_2 = [1,2,3,4];
numeros_2.forEach(element =>result.push(duplicar(element)));
console.log(result)

// filter
let numerosPares = numeros.filter(numero => numero % 2 === 0)
console.log(numerosPares);

// reduce --> como el acum de LINQ
const numeros_3 =[2,5,9,10,15];
const sumaTotal = numeros_3.reduce((acum, numero) =>{
    return acum + numero;
}, 0)
console.log(sumaTotal);