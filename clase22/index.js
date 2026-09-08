// destructuracion

const [num1, setNum1] = useState()

const persona = ["Ana", 25];
const [nombre, edad] = persona;

// const nombre = persona[0]; // Lo mismo que lo de arriba
// const edad = persona[1];

function coordenadas(){
    return [10,20];
}

const [x, y] = coordenadas();