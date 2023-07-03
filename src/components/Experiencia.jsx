import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'

const Experiencia = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={`bg-fixed bg-cover bg-center w-full md:h-screen h-auto px-8 py-5 md:py-40 md:px-40 lg:px-60 ${theme.font} flex flex-col justify-center md:justify-between gap-12 items-center md:items-start`}>
        <div className="flex flex-col gap-3 md:h-2/5 h-auto justify-center items-center md:items-start">
        <hr className={` md:w-44 w-12 border-none h-0.5  ${theme.button}`}/>
            <h2 className={`md:text-6xl lg:text-8xl md:text-start text-center font-bold text-3xl`}>Experiencia</h2>
            <div className="flex">
              <div className="flex-col">
                
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Experiencia