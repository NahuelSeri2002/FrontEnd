let edadAna = 15;
let edadJuan = 20;

//Asi se declara una funcion
function esMayorDeEdad(edad, nombre){
    if(edad >= 18){
        console.log(`${nombre} es mayor de edad`); return true;
    }
    else{
        console.log(`${nombre}, es menor de edad`); return false;
    }
}

console.log(esMayorDeEdad(edadAna, "Ana"));
console.log(esMayorDeEdad(edadJuan, "Juan"));

let numero1 = 10;
let numero2 = 20;

//Funcion que retorna un valor
function sumar(num1, num2){
    return num1 + num2;
}

console.log(sumar(numero1, numero2));