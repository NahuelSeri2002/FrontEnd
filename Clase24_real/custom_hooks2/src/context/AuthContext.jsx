// Va a manejar el contexto del usuario
// de esta forma podemos encontrar al usuario desde cualquier lado

import { createContext, useContext, useState } from "react";
import { URL_PERSONAJES, URL_USUARIOS } from "../utils/api";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(()=>{
        // de guardado obtengo un json
        const guardado = localStorage.getItem("usuario")
        // si lo tengo retorno un objeto de js
        // si no lo tenog retorno null
        return guardado ? JSON.parse(guardado) :null
    })

    const [error, setError] = useState(null)

    const guardarSesion = (usuarioLogeado) =>{
        setUsuario(usuarioLogeado)
        localStorage.setItem("usuario", JSON.stringify(usuarioLogeado))
    }

    const login = async(email, password) => {
        setError(null)

        const respuesta = await fetch(`${URL_PERSONAJES}?email=${email}&password=${password}`)

        const encontrados = await respuesta.json()
        if(encontrados.leght === 0){
            setError("Email o contraseña incorrectos")
            return false;
        }
        guardarSesion(encontrados[0])
        return true;
    }

    const registrar = async(name, email, password) =>{
        setError(null)

        const yaExiste = await fetch(`${URL_USUARIOS}?email=${email}`)
        const coincidencias = await yaExiste.json()
        if(coincidencias.leght > 0){
            setError("Este email ya esta registrado")
            return false;
        }

        const respuesta = await fetch(URL_USUARIOS,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({name, email, password})
        })

        if(!respuesta.ok){
            setError("No se pudo crear la cuenta")
            return false;
        }

        const nuevoUsuario = await respuesta.json()
        guardarSesion(nuevoUsuario)
        return true;

    }

    const logOut = () =>{
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return(
        <AuthContext.Provider value={{usuario, error, login, registrar, logOut}}>
            {children}
        </AuthContext.Provider>

    )

}

export function useAuth(){
    return useContext(AuthContext)
}