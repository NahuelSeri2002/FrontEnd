document.addEventListener("DOMContentLoaded", function(){
    
    const lista = document.querySelector(".lista");
    const btnAgregar = document.getElementById("btn-agregar");
    
    const itemsList = document.querySelectorAll(".item")
    let contador = itemsList.length;

    btnAgregar.addEventListener("click", function(){
        contador++;
        const element = document.createElement('li');
        element.textContent = `Item ${contador}`;
        element.classList.add("item");
        lista.appendChild(element);
    })
})


