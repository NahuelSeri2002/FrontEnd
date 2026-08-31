// Elementos a capturar
document.addEventListener("DOMContentLoaded", function(){
    const listaTareas = document.getElementById("lista-tareas");
    const inputTarea = document.getElementById("input-tarea");
    const form = document.getElementById("form-tarea"); 
    const contador = document.getElementById("contador");


    function actualizarContador(){
        contador.textContent = `${listaTareas.children.length}`;
    }

    form.addEventListener("submit", function(event){
        event.preventDefault();
        const texto = inputTarea.value.trim();
        if(texto ==="") return;

        const li = document.createElement("li");
        const small = document.createElement("small");
        small.textContent = texto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.className = "tarea-eliminar";

        li.addEventListener("click", function(){
            li.classList.toggle("completada");
        });

        botonEliminar.addEventListener("click",function(event){
            event.stopPropagation();
            li.remove();
            actualizarContador();
        })

        li.appendChild(small);
        li.appendChild(botonEliminar);

        listaTareas.appendChild(li);

        actualizarContador();

        inputTarea.value = "";
        inputTarea.focus();

    })

    actualizarContador();
});
