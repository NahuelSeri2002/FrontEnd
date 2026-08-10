//.include --> hace diferencia entre mayúsculas y minúsculas, key sensitive
let frase = "Aprende JavaScript con ejemplos prácticos";
console.log(frase.includes("JavaScript")); // true
console.log(frase.includes("Python")); // false

//.toLowerCase() --> convierte todo a minúsculas
console.log(frase.toLowerCase());
//.toUpperCase() --> convierte todo a mayúsculas
console.log(frase.toUpperCase());

//.trim() --> elimina los espacios al inicio y al final de la cadena
let frase2 = "   Aprende JavaScript con ejemplos prácticos   ";
console.log(frase2.trim());

//.slice() --> extrae una parte de la cadena, desde el índice de inicio hasta el índice de fin (sin incluirlo)
let frase3 = "Hola me llamo nahuel";
console.log(frase3.slice(0,15)); // "Hola me llamo n"

//.split() --> divide la cadena en un array de subcadenas, usando un separador
let frutastexto = "manzana,banana,kiwi";
let frutasArray = frutastexto.split(",");
console.log(frutasArray); // ["manzana", "banana", "kiwi"]

//Propiedades --> datos
console.log(frase.length); // 41
console.log(frutasArray.length); // 3