import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'

const CardProyecto = (props) => {

    const {theme} = useContext(ThemeContext)

    return (
    <div className={`w-1/4 h-full p-6 rounded-md ${theme.button} flex flex-col items-center justify-between`}>
        <h3>{props.title}</h3>
        <div className="flex justify-center gap-5">
            <button className="bg-white rounded-md h-12 w-25 px-2">Ver Demo</button>
            <button className="bg-[#1F2023] rounded-md h-12 w-25 px-2">Github</button>
        </div>
    </div>
  )
}

export default CardProyecto