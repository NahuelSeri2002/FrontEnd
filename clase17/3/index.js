const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".texto");

titulo.addEventListener("click", function (){
    if(titulo.style.color === "red"){
        titulo.style.color = "";
    }else{
        titulo.style.color = "red";
    }
})
texto.addEventListener("mouseover", function(){
    texto.style.fontFamily = "Georgia, serif";
    texto.style.fontStyle = "italic";
})
texto.addEventListener("mouseout", function(){
    texto.style.fontFamily = "";
    texto.style.fontStyle = "";
})