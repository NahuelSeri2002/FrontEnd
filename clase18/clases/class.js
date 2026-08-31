const list = document.querySelector(".lista-desordenada");
const listItem = document.getElementsByClassName("list-item");
const texto = document.querySelector(".texto");
const contenedor = document.querySelector(".contenedor-magico");
const itemEspecial = document.getElementById("item-especial");
const ogText = itemEspecial.textContent;
let cont = 0;

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
    if(cont === 0) {
        itemEspecial.textContent = "Soy Rojo";
        cont++;
    }
    else{
        itemEspecial.textContent = ogText;
        cont = 0;
    }
}

// - Remover una clase
function removerClaseVerde(){
    itemEspecial.classList.remove("verde");
}

// - Quitar todas las clases (atributo)
function quitarAtributo(){
    itemEspecial.removeAttribute("class");
}

//Eliminar el ulitmo elemento de la lita
function eliminarUlitmoElemento(){
    //list.removeChild(listItem[listItem.length-1]);
    list.removeChild(list.lastElementChild);
}

//Eliminar el primer elemento de la lita
function eliminarPrimerElemento(){
    //list.removeChild(listItem[0]);
    list.removeChild(list.firstElementChild);
}

//Crear un elemento e insertarlo
function crearElemento(){
    contenedor.innerHTML = `
    <ul>
        <li> <h1> Soy un li magico </h1> </li>
        <li> <p class="verde"> Soy un li magico 2 </p> </li>
        <li> <span> Soy un li magico 3 </span> </li>
    </ul>
    `
}

