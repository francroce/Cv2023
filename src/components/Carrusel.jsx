import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import Proyecto1 from "../assets/projecto1.png"

const Carrusel = () => {

    const {theme} = useContext(ThemeContext)

  return (
        <div className={`w-full h-full p-6 rounded-md overflow-hidden ${theme.button} flex flex-col items-center justify-between hover:scale-105 transition 0.5s cursor-pointer relative`}>
            <h3 className="">Hola</h3>
            <img className="shadow-md" src={Proyecto1} alt="" />
    
        </div>
  )
}

export default Carrusel