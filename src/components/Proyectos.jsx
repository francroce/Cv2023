import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import CardProyecto from '../components/CardProyecto'
import Carrusel from "./Carrusel"

const Proyectos = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`w-full  h-auto px-8 py-5 md:py-40 md:px-40 lg:px-60 ${theme.font} flex flex-col justify-center md:justify-between gap-20 items-center md:items-start`}>
        <div className="flex flex-col gap-3 md:h-2/5 h-auto justify-center items-center md:items-start">
            <hr className={` md:w-44 w-12 border-none h-0.5  ${theme.button}`}/>
            <h2 className={`md:text-6xl lg:text-8xl md:text-start text-center font-bold text-3xl`}>Proyectos</h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-6 items-center w-full md:h-auto">
            <CardProyecto title="CV 2023"/>
            <CardProyecto title="CV 2023"/>
            <CardProyecto title="CV 2023"/>
            <CardProyecto title="CV 2023"/>
        </div>

    </div>
  )
}

export default Proyectos