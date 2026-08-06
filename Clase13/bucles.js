// For
let cantidad = 20;
const numeros = [];

for (let index = 0; index < cantidad; index++) {
    numeros[index] =  index;
}

//console.log(numeros);

// While
let contador = 20;
while(contador > 0){
    //console.log("Cuenta Regresiva ", contador)
    contador--;
}

//Do While
let n = 0;
do {
    //console.log("Se ejecuta al menos una vez")
    n++;
} while (n < 0);

//For of (foreach) --> para arrays
const nombres = ["Jorge","Juan","Julia"];
for (const nombre of nombres) {
    console.log(nombre);
}

//forEach
nombres.forEach(element => {
    console.log("forEach nombres: " , element);
});

//map
const numeros2 = [1,2,3,4,5];
const numerosMultiplicados = numeros2.map(function(numero){
    return numero * 2;
});
console.log("numerosMultiplicados: ", numerosMultiplicados);