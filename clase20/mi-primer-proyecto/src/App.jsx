import './App.css'

function App() {
  // Estado -> memoria
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea(event) {
    event.preventDefault();
    const textoLimpio = texto.trim();
    if(textoLimpio === "") return;

    const nuevaTarea = {
      id: crypto.randomUUID(),
      texto: textoLimpio,
      completada: false
    }

    setTareas([...tareas, nuevaTarea]);
    setTexto("");
  }

  function toggleTarea(id){
    setTareas(
      tareas.map((tarea) =>
      tarea.id === id ? {...tarea, completa: !tarea.completada} : tarea)
    );
  }

  function eliminarTarea(id, evento){
    evento.stopPropagation();
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <>
      <main class="app">
            <h1>Tareas</h1>
            <form id="form-tarea" onSubmit={agregarTarea}>
                <input type="text" id="input-tarea" placeholder="Que tenes que hacer?"
                value = {texto}
                onChange={(evento) => setTexto(evento.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>

            <ul id="lista-tareas">
              {tareas.map((tarea) =>(
                <li
                  key={tarea.id}
                  className={tarea.completada ? "completada" : ""}
                  onClick={() => toggleTarea(tarea.id)}
                >
                  <small>{tarea.texto}</small>
                  <button
                    className='tarea-eliminar'
                    onClick={(evento) => eliminarTarea(tarea.id, evento)}
                  >X</button>
                </li>
              ))}
            </ul>

            <p><span id="contador">{tareas.length}</span> tareas</p>
        </main>
    </>
  )
}

export default App
