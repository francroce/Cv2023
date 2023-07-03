import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import Proyecto1 from "../assets/projecto1.png"

const CardProyecto = (props) => {

    const {theme} = useContext(ThemeContext)

    return (
        <div className={`w-96 h-96 p-6 rounded-md overflow-hidden ${theme.button} flex flex-col items-center justify-between hover:scale-105 transition 0.5s cursor-pointer relative`}>
            <h3 className="absolute  bottom-[-100px] hover:bottom">{props.title}</h3>
            <img className="shadow-md" src={Proyecto1} alt="" />
            <div className="flex justify-center gap-5">
                <button className="bg-white rounded-md h-12 w-25 px-2">Ver Demo</button>
                <button className="bg-[#1F2023] rounded-md h-12 w-25 px-2">Github</button>
            </div>
        </div>
  )
}

export default CardProyecto