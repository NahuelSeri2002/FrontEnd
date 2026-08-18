// ==========================================================
// SISTEMA DE INVENTARIO — funciones a completar
// Correr con:  node index.js
// ==========================================================

// ----------------------------------------------------------
// 1. listarProductos(lista)
//    Recorre el array e imprime cada producto con forEach.
//    Formato: "parlante -> $120000 (stock: 4)"
//    No retorna nada.
// ----------------------------------------------------------
// { nombre: "parlante", precio: 120000, stock: 4 }

function listarProductos(lista) {
    // TU CÓDIGO ACÁ
    lista.forEach(element => {
        console.log(`${element.nombre} -> ${element.precio} (stock: ${element.stock})`);
    });
}

// ----------------------------------------------------------
// 2. agregarProducto(lista, nuevoProducto)
//    Agrega nuevoProducto al final del array con push.
//    Retorna la lista modificada.
// ----------------------------------------------------------
function agregarProducto(lista, nuevoProducto) {
    // No tiene validacion
    // Atajamos el peor caso
    lista.push(nuevoProducto);
    return lista;
}


// ----------------------------------------------------------
// 3. reemplazarProducto(lista, nombre, nuevoProducto)
//    Encuentra el índice del producto con ese nombre (findIndex)
//    y lo reemplaza usando splice.
//    Retorna la lista modificada.
// ----------------------------------------------------------
function reemplazarProducto(lista, nombre, nuevoProducto) {
    // TU CÓDIGO ACÁ
    let index = lista.findIndex(element => element.nombre === nombre);
    lista.splice(index, index, nuevoProducto);
}


// ----------------------------------------------------------
// 4. obtenerDisponibles(lista)
//    Retorna un array NUEVO con los productos que tienen stock > 0.
//    Usar filter.
// ----------------------------------------------------------
// { nombre: "parlante", precio: 120000, stock: 4 }
function obtenerDisponibles(lista) {
    const disponibles = lista.filter(element => element.stock > 0);
    return disponibles;
}


// ----------------------------------------------------------
// 5. aplicarDescuento(lista, porcentaje)
//    Retorna un array NUEVO con cada producto con el precio
//    reducido según el porcentaje recibido (0 a 100).
//    El array original NO debe cambiar.
//    Usar map.
//    Ejemplo: aplicarDescuento(lista, 10) → precios con 10% menos
// ----------------------------------------------------------
// Aplica el descuento restando el % de descuento
function aplicarDescuento_2(lista, porcentaje) {
   
}

// Aplica el descuento retornando el % restante (si es 15% el descuento, entonces retorna 85%)
function aplicarDescuento(lista, porcentaje) {
    const oferta = lista.map(element => {
        return {
            ...element,
            precio: element.precio * (1 - porcentaje / 100)
        };
    });
    return oferta;
}

// ----------------------------------------------------------
// 6. buscarPorNombre(lista, nombre)
//    Retorna el objeto completo del producto con ese nombre.
//    Si no existe, retorna undefined.
//    Usar find.
// ----------------------------------------------------------
function buscarPorNombre(lista, nombre) {
    const objeto = lista.find(element => element.nombre === nombre);
    return objeto;
}

// ----------------------------------------------------------
// 7. todosConStock(lista)
//    Retorna true si TODOS los productos tienen stock > 0.
//    Usar every.
// ----------------------------------------------------------
function todosConStock(lista) {
    const stock = lista.every(element => element.stock > 0);
    return stock;
}


// ----------------------------------------------------------
// 8. algunoConStock(lista)
//    Retorna true si AL MENOS UN producto tiene stock > 0.
//    Usar some.
// ----------------------------------------------------------
function algunoConStock(lista) {
     const stock = lista.some(element => element.stock > 0);
    return stock;
}


// ----------------------------------------------------------
// 9. calcularValorTotal(lista)
//    Calcula y retorna el valor total del inventario.
//    Valor de cada producto = precio * stock.
//    Usar reduce.
// ----------------------------------------------------------
function calcularValorTotal(lista) {
    const sumaTotal = lista.reduce((acum, element) => acum + (element.precio * element.stock),0);
    return sumaTotal;
}


// ----------------------------------------------------------
// 10. ordenarPorPrecio(lista)
//     Retorna un array NUEVO con los productos ordenados
//     de más barato a más caro.
//     El array original NO debe cambiar.
//     Usar sort con una copia: [...lista]
// ----------------------------------------------------------
function ordenarPorPrecio(lista) {
    const ordenados = [...lista].sort((a, b) => a.precio - b.precio);
    return ordenados; 
}


// ----------------------------------------------------------
// 11. obtenerNombresConStock(lista)   ← DESAFÍO
//     Retorna un STRING con los nombres de los productos
//     que tienen stock, separados por coma.
//     Ejemplo: "parlante, mouse, teclado"
//     Usar filter + map + join en una sola línea.
// ----------------------------------------------------------
function obtenerNombresConStock(lista) {
    const nombres = lista.filter(element => element.stock > 0).map(element => element.nombre).join(", ");
    return nombres;
}

// module.exports -> permite acceder a estos elementos desde otros archivos
module.exports = {
    listarProductos,
    agregarProducto,
    reemplazarProducto,
    obtenerDisponibles,
    aplicarDescuento,
    buscarPorNombre,
    todosConStock,
    algunoConStock,
    calcularValorTotal,
    ordenarPorPrecio,
    obtenerNombresConStock,
};
