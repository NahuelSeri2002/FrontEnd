
 const list = document.querySelector(".lista-desordenada");
const listItem = document.getElementsByClassName("list-item");
 const texto = document.querySelector(".texto");
const contenedor = document.querySelector(".contenedor-magico");
const itemEspecial = document.getElementById("item-especial");

// Crear elemento al final de la lista
 function crearElementoListaFinal(){
      const li = document.createElement("li");
     li.textContent = "Elemento creado al final";
     li.classList.add("list-item");
     list.appendChild(li);
}
// Crear elemento al principio de la lista
 function crearElementoListaPrincipio(){
      const li = document.createElement("li");
     li.textContent = "Elemento creado al principio";
     li.classList.add("list-item");
     list.prepend(li); // agregar elementos al principio de una ul
}

// - Toggle de atributo
function agregarAtributoToggle(){
    itemEspecial.classList.toggle('rojo');
}

// - Remover una clase
function removerClaseVerde(){
    itemEspecial.classList.remove("verde");
}

// - Quitar todas las clases (atributo)
function quitarAtributo(){
    itemEspecial.removeAttribute("class");
}

