import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import Proyecto1 from "../assets/projecto1.png"

const CardProyecto = (props) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div style={{backgroundImage: `url(${Proyecto1})`}} className={`bg-cover shadow-md md:min-w-40 md:w-2/5 w-full h-52 md:h-80 rounded-md overflow-hidden ${theme.button} flex flex-col items-center justify-between hover:scale-105 transition 0.5s cursor-pointer relative`}>
            <div className={`w-full h-full flex-col gap-3 opacity-0 transition 0.5s hover:opacity-100 ${theme.button} bg-opacity-80 backdrop-blur-sm flex justify-center items-center relative`}>
                <h3 className="text-white text-2xl">{props.title}</h3>
                <button className={`bg-white ${theme.color} font-semibold w-40 h-10 rounded-md`}>Ver demo</button>           
            </div>

        </div>
  )
}

export default CardProyecto