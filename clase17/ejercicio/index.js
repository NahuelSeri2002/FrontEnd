const miTitulo = document.getElementById("titulo");
miTitulo.textContent = "Nahuel";
miTitulo.classList.add("titulo-gigante");

const miParrafo = document.createElement("p");
miParrafo.textContent = "Creado desde la Matrix";
document.querySelector("body").appendChild(miParrafo);
