import React from 'react'
import Formulario from './Formulario';
import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import {FaGithub, FaLinkedin, FaBehance} from 'react-icons/fa';





const Contacto = () => {

  const {theme} = useContext(ThemeContext)


  return (
    <div className={`w-full h-full px-8 py-10 md:py-40 md:px-40 lg:px-60 ${theme.font} flex flex-col lg:flex-row justify-center md:justify-between gap-12 items-center md:items-start ${theme.button}`}>
            <div className="flex flex-col gap-12 justify-evenly items-center md:items-start">
              <div className='flex flex-col md:items-start items-center gap-3 h-full'>
                <hr className={` md:w-44 w-12 border-none h-0.5 bg-black`}/>
                <h2 className={`md:text-6xl lg:text-8xl md:text-start text-center font-bold text-3xl`}>¡Trabajemos Juntos!</h2>
              </div>
              <div className='flex justify-start items-center gap-6'>
                  <a href="https://github.com/francroce" target='blank' className='hover:opacity-70 cursor-pointer'><FaGithub className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}`  : "w-10 h-10 md:w-16 md:h-16 text-white"}/></a>
                  <a href="https://www.linkedin.com/in/franco-croce/" target='blank' className='hover:opacity-70 cursor-pointer'><FaLinkedin className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}` : "w-10 h-10 md:w-16 md:h-16 text-white"}/></a>
                  <a href="https://www.behance.net/francocroce" target='blank' className='hover:opacity-70 cursor-pointer'><FaBehance className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}` : "w-10 h-10 md:w-16 md:h-16 text-white"}/></a>
              </div>
          </div>
        <div className='min-w-96 lg:w-1/3 w-full'>
          <Formulario/>
        </div>
    </div>
  )
}

export default Contacto