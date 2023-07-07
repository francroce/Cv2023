import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import bgGradientLight from '../assets/bgGradientLight.png'
import bgGradientDark from '../assets/bgGradientDark.png'
import {PiFileJsxLight,PiDatabaseLight,PiNotePencilLight,PiCirclesThreePlusLight} from 'react-icons/pi'
import Card from "./Card"


const Tecnologias = () => {

const {theme} = useContext(ThemeContext)

  return (
    <div style={theme.background === "bg-bg-theme-light" ? {backgroundImage: `url(${bgGradientLight})`} : {backgroundImage: `url(${bgGradientDark})`}} id="tecnologias" className={`overflow-hidden bg-fixed bg-cover bg-center w-full lg:min-h-screen md:h-auto h-auto px-8 py-20 md:py-40 md:px-40 lg:px-60 ${theme.font} flex flex-col justify-center md:justify-between gap-12 items-center md:items-start`}>
        <div className="flex flex-col gap-3 md:h-2/5 h-auto justify-center items-center md:items-start">
            <hr className={` md:w-44 w-12 border-none h-0.5 bg-[#1F2023]`}/>
            <h2 className={`md:text-6xl lg:text-8xl md:text-start text-center font-bold text-3xl`}>Tecnologias</h2>
        </div>
        <div className=' animate-fade-down animate-ease-in animate-delay-1000 w-full h-full md:justify-between flex md:flex-row flex-wrap items-center justify-center gap-8 md:gap-0'>
            <Card titulo='Front-End' texto='Experiencia trabajando con HTML5, CSS, Javascript y React.js'>
                <PiFileJsxLight className='w-12 h-12 text-gray-950'/>
            </Card>
            <Card titulo='Back-End' texto='Experiencia trabajando con Java, SpringBoot y Bases de datos (SQL)'>
                <PiDatabaseLight className='w-12 h-12 text-gray-950'/>
            </Card>
            <Card titulo='Ux/Ui' texto='Experiencia trabajando con Adobe Illustrator y Figma'>
                <PiNotePencilLight className='w-12 h-12 text-gray-950'/>
            </Card>
            <Card titulo='Otros' texto='Conocimiento en Python, Github, Manual Testing, habilidades blandas'>
                <PiCirclesThreePlusLight className='w-12 h-12 text-gray-950'/>
            </Card>
        </div>
        
    </div>
  )
}

export default Tecnologias