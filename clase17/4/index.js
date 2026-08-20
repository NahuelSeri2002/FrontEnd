//Capturar elementos
const catalogoBody = document.querySelector("#catalogo-body");
const catalogoCantidad = document.querySelector("#catalogo-cantidad");
const btnIniciar = document.querySelector("#iniciar");
const btnReiniciar = document.querySelector("#reiniciar");
const seccionResultados = document.querySelector("#resultados");
const listaAceptados = document.querySelector("#lista-aceptados");
const listaNoEncontrados = document.querySelector("#lista-no-encontrados");
const precioTotal = document.querySelector("#total");

// 1. Lista de Precios Base
// Crear una estructura de datos productos que contenga el catálogo de la tienda con sus respectivos precios de referencia.
// Cada producto es un objeto con dos claves: nombre y precio.
const productos = [
    { nombre: "pan", precio: 3000 },
    { nombre: "cafe", precio: 7000 },
    { nombre: "aceite", precio: 1500 },
    { nombre: "leche", precio: 1000 },
    { nombre: "fideos", precio: 700 },
    { nombre: "vinagre", precio: 500 },
    { nombre: "harina", precio: 850 },
    { nombre: "azucar", precio: 1000 },
    { nombre: "galletitas", precio: 1500 },
    { nombre: "shampoo", precio: 800 },
];

// 2. Función registrarProductos(productos)
// Implementar una función que le pida al usuario ingresar los productos uno a uno mediante prompt().
function resgistrarProductos(productos){
    const productosCliente = [];
    const productosNoEncontrados = [];

    const nombreProductos = productos.map(producto => producto.nombre);
    console.log(nombreProductos);

    let agregarProductos = true;
    while(agregarProductos){
        const entrada = prompt("Ingrese el nombre del producto. Para finalizar la compra escribi un punto")
        if(entrada === null){
            alert("Para terminar la compra tenes que ingresar un punto: .");
            continue;
        }
        const productoNormalizado = entrada.trim().toLowerCase();
        if(productoNormalizado === "."){
            agregarProductos = false;
            continue
        }
        if(productoNormalizado === ""){
            alert("Ingrese un producto valido");
            continue;
        }

        const nombreEncontrado = nombreProductos.find(nombre => nombre === productoNormalizado)
        if(nombreEncontrado !== undefined){
            productosCliente.push(productoNormalizado);
            console.log(`${productoNormalizado} agregado a la compra`)
        }
        else{
            productosNoEncontrados.push(productoNormalizado);
            console.log(`${productoNormalizado} no existe`);
        }
    }

    return {productosCliente, productosNoEncontrados};
}

// 3. Función calcularTotal(productosCliente, productos)
// Implementar una función que reciba la lista de productos válidos del cliente y la lista base de precios:
// Recorrer la lista de productos comprados con .forEach().
// Buscar con .find() el precio unitario correspondiente a cada producto en el catálogo.
// Acumular y calcular el total a pagar.

function calcularTotal(productosCliente, productos){
    let TotalAPagar = 0;

    productosCliente.forEach(producto => {
        const productoEncontrado = productos.find(item => item.nombre === producto)

        if(productoEncontrado !== undefined){
            const precio = productoEncontrado.precio;
            TotalAPagar += precio;
            console.log(`${producto}: $${precio} (subtotal: $${TotalAPagar})`)
        }
    });
    return TotalAPagar;
}

// 5. Función mostrarLista(contenedor, elementos, mensajeVacio)
// Función reutilizable que dibuja un array de strings dentro de un <ul>. Se usa dos veces: para los productos aceptados y para los no encontrados.
function mostrarLista(contenedor, elementos, mensajeVacio){
    contenedor.innerHTML = "";// vacia la lista

    if(elementos.lenght === 0){
        const li = document.createElement("li");
        li.textContent = mensajeVacio;
        li.classList.add("vacio");
        contenedor.appendChild(li);
        return;
    }

    elementos.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element;
        contenedor.appendChild(li);
    })
}