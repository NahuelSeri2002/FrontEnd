document.addEventListener("DOMContentLoaded", function(){
    const parrafoEspecial = document.getElementById("parrafo-especial");
    console.log(parrafoEspecial);
    // parrafoEspecial.style.backgroundColor = "#0069c0";
    // parrafoEspecial.style.color = "#e6e6e6"

    // HTML collection
    const items = document.getElementsByClassName('item');
    console.log(items);

    // nodelist
    const itemsList = document.querySelectorAll(".item")
    console.log(itemsList);

    //nodelist tiene foreach
    itemsList.forEach((item, index) => console.log(item.textContent, index));

    // HTML collection - no funciona con foreach -> usar for o lo transformas en array
    Array.from(items).forEach(item => console.log(`htmlcollection item: ${item.textContent}`));

    for(let i = 0; i < items.length; i++){
        console.log(`htmlcollection item with for: ${items[i].textContent}`);
    }
})


