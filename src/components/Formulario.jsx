import React, { useState } from "react";
import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'

function Formulario() {

const {theme} = useContext(ThemeContext)

const [nombre,setNombre] = useState("")
const [email,setEmail] = useState("")
const [mensaje,setMensaje] = useState("")

function handleSubmit(e){
  e.preventDefault();
  console.log("formulario enviado")
  console.log(nombre, email,mensaje)
  setNombre("")
  setEmail("")
  setMensaje("")
}

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <input type="text"
        placeholder="Nombre y apellido"
        className={`w-full h-16 rounded-md text-[#1F2023] bg-white px-4 py-3` }
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />

      <input type="email"
        placeholder="Email"
        className={`w-full h-16 text-[#1F2023] bg-white rounded-md px-4 py-3` }
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <textarea name="" id="" cols="30" rows="10" placeholder="Escriba su mensaje aqui..." className={`w-full h-36 bg-white text-[#1F2023] rounded-md px-4 py-3` }
        value={mensaje}
        onChange={(e)=>setMensaje(e.target.value)}
      />
      <button className={`bg-[#1F2023] h-16 rounded-md text-white`}>Enviar</button>

    </form>
  );
}

export default Formulario;
