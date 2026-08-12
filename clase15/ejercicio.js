const frutas = ["Manzana", "Banana", "Pera"];
frutas.push("Uva");
console.log(frutas);

const precioBase = [10,20,30];
let preciosImpuesto = precioBase.map(precio => precio * 1.2)
console.log(precioBase);
console.log(preciosImpuesto);
