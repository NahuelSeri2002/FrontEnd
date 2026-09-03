export const mathOperations ={
    suma: (a, b) => a + b ,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => {
        if(b === 0)console.error("No se puede dividir por cero")
        return a / b
        
    }
}