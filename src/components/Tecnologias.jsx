import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import bgGradientLight from '../assets/bgGradientLight.png'
import bgGradientDark from '../assets/bgGradientDark.png'
import linea from '../assets/linea.png'
import Card from "./Card"
import reactImg from '../assets/react.png'


const Tecnologias = () => {

const {theme} = useContext(ThemeContext)

  return (
    <div style={theme.background === "bg-bg-theme-light" ? {backgroundImage: `url(${bgGradientLight})`} : {backgroundImage: `url(${bgGradientDark})`}} className={`bg-fixed bg-cover bg-center w-full h-screen px-8 py-10 md:px-60 ${theme.font} flex flex-col justify-center md:justify-center gap-12 items-center md:items-start`}>
        <div>
            <img src={linea} alt=""/>
            <h2 className={`md:text-8xl md:text-start text-center font-bold text-3xl`}>Tecnologias</h2>
        </div>
        <div className='w-full md:justify-between flex md:flex-row flex-wrap justify-center'>
            <Card imagen={reactImg} titulo='Front-End' texto='Experiencia trabajando con HTML5, CSS, Javascript y React.js'/>
            <Card imagen={reactImg} titulo='Front-End' texto='Experiencia trabajando con HTML5, CSS, Javascript y React.js'/>
            <Card imagen={reactImg} titulo='Front-End' texto='Experiencia trabajando con HTML5, CSS, Javascript y React.js'/>
            <Card imagen={reactImg} titulo='Front-End' texto='Experiencia trabajando con HTML5, CSS, Javascript y React.js'/>

        </div>
        
    </div>
  )
}

export default Tecnologias