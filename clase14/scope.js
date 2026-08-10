//el scope es el ambito donde vive una variable

//Goblal --> variable declarada fuera de un bloque
//Accesible desde cualquier punto del archivo
var globalVar = "Soy Global (VAR)";
let globalLet = "Soy Global (LET)";
const globalConst = "Soy Global (CONST)";

function probarGlobal() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}

probarGlobal();

// Local Scope - Function Scope
function functionLocal() {
    var funtionVar = "Solo existo dentro de la funcion (var)";
    let funtionLet = "Solo existo dentro de la funcion (let)";
    const funtionConst = "Solo existo dentro de la funcion (const)";
    console.log(funtionVar);
    console.log(funtionLet);
    console.log(funtionConst);
}

functionLocal();

//Block Scope
if(true){
    // var no respeta el bloque
    var varEnElBloque = "Puedo salir del Bloque";
    
    let letEnBloque = "Atrapado en el Bloque";
    const constEnElBloque = "Atrapado en el Bloque";
}

console.log(varEnElBloque);