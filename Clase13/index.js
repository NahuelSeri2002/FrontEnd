console.log("suma,", 5+"5");
console.log("resta,", 5-"5");
console.log("suma con number", 5+Number("5"));
console.log("suma real" , 5 + 5);

// Concatenar usando `
let suma = 5 + 5;
console.log(`suma concatenada: 5 + 5 = ${suma}`); 

console.log(5==5);// no usar
console.log(5=="5");// Comparación no estricta, convierte el tipo de dato y luego compara
console.log(5==="5");// Comparación estricta, compara el tipo de dato y el valor

// if - else reducido
//if ternario- ? == if - : == else
let frio = true;
frio ? console.log("hace frio") : console.log("no hace frio");

// if --> else if --> else
let temperatura = 20;
temperatura <= 10 ? console.log("Me pongo la campera") :
temperatura < 18 ? console.log("Me pongo un buzo") : console.log("No me pongo nada");

// ! --> Negación
!frio ? console.log("hace frio") : console.log("no hace frio");

//Switch
let anioNacimiento = 1990;
switch(anioNacimiento){
    case 1990:
        console.log("Naciste en los 90s");
        break;
    case 2000:
        console.log("Naciste en los 2000s");
        break;
    default:
        console.log("No naciste ni en los 90s ni en los 2000s");
}