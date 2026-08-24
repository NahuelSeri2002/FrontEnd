document.addEventListener("DOMContentLoaded", function(){
    
    //Referencias
    const text = document.getElementById("text");
    const color = document.getElementById("color");
    const fontSize = document.getElementById("fontSize");
    const bgColor = document.getElementById("bgColor");
    const resultado = document.getElementById("resultado");
    const body = document.querySelector("body");

    //Funciones
    function actualizarTexto(donde, que){
        donde.textContent = que.value;
    }

    function actualizarColor(text, color){
        text.style.color = color.value;
    }

    function actualizarTamanioFuente(text, size){
        text.style.fontSize = `${size.value}px`
    }

    function actualizarColorFondo(fondo, color){
        fondo.style.backgroundColor = color.value
    }

    //Eventos
    text.addEventListener("input", () => actualizarTexto(resultado, text))
    color.addEventListener("input", () => actualizarColor(resultado, color))
    fontSize.addEventListener("input", () => actualizarTamanioFuente(resultado, fontSize))
    bgColor.addEventListener("input", () => actualizarColorFondo(body, bgColor))
})