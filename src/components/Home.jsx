import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import Cv from '../assets/curriculum-croce.pdf'
import ProfileLight from '../assets/profileLight.png'
import ProfileDark from '../assets/profileDark.png'

const Home = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className={` w-full h-screen px-10 py-10 md:px-60 ${theme.font} flex md:flex-row flex-col-reverse justify-center md:justify-between items-center`}>
        <div className='animate-fade-left w-full md:w-3/6 h-2/4 md:h-full flex flex-col gap-2 md:gap-4  items-center md:items-start justify-center text-center md:text-left'>
            <h2 className={`md:text-3xl font-bold text-xl ${theme.color}`}>Desarrollador Full-Stack</h2>
            <h1 className={`md:text-8xl font-bold text-3xl`}>Franco Croce</h1>
            <p className=" text-center md:text-left text-md opacity-70">Me considero una persona proactiva, empática, responsable, con facilidad para el aprenndizaje. Me gusta el trabajo en equipo y a la vez la resolución de tareas de manera independiente. Actualmente me encuentro en la búsqueda de una posición en relación de dependencia que me permita seguir creciendo como profesional IT.</p>
            <div className="flex gap-2 md:gap-5 w-auto justify-between items-center">
                <button className={`text-sm md:text-lg hover:opacity-60 w-auto h-auto px-6 py-3 ${theme.button} text-white rounded-md`}>Contactame</button>
                <a 
                 href={Cv}
                 download="Cv-Franco-Croce"
                 target="_blank"
                 rel="noreferrer"
                className={`hover:opacity-60 text-sm md:text-lg w-auto h-auto px-6 py-3 border-2 ${theme.border} ${theme.color} rounded-md`}>
                  Descargar CV
                </a>
            </div>
        </div>
        <img src={theme.background === "bg-bg-theme-light" ?  ProfileLight : ProfileDark} className=" animate-fade-left animate-delay-500"/>
    </div>
  )
}

export default Home