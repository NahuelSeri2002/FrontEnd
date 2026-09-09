import { useEffect, useState } from "react"

//endpoint
const URL_PERSONAJES = "https://rickandmortyapi.com/api/character";

function useFetchPersonajes() {
  // Data es lo que la API me haya enviado
  const [personajes, setPersonajes] = useState([])
  // Loading
  const [loading, setLoading] = useState(true)
  // Error
  const [error, setError] = useState(null)

  // Funcion Principal
  const fetchPersonajes = async () =>{
    setLoading(true)
    setError(null)

    try {
      const respuesta = await fetch(URL_PERSONAJES)
      if(!respuesta.ok){
        throw new Error(`Error en la llamada: ${respuesta.status} ${respuesta.statusText}`)
      }

      const personajesParseados  = await respuesta.json()
      setPersonajes(personajesParseados.results)

    } catch (error) {
      setError(error.message || "Ocurrio un error en la API") 
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPersonajes();
  }, []);

  return {personajes, loading, error, fetchPersonajes};
}

export default useFetchPersonajes
