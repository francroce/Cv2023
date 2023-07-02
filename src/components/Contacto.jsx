import React from 'react'
import Formulario from './Formulario';
import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import {FaGithub, FaLinkedin, FaBehance} from 'react-icons/fa';





const Contacto = () => {

  const {theme} = useContext(ThemeContext)


  return (
    <div className={`w-full h-full px-8 py-10 md:py-40 md:px-60 ${theme.font} flex flex-col md:flex-row justify-center md:justify-between gap-12 items-center md:items-start ${theme.button}`}>
            <div className="flex flex-col gap-3 md:h-2/5 h-auto justify-center items-center md:items-start">
              <hr className={` md:w-44 w-12 border-none h-0.5 ${theme.button}`}/>
              <h2 className={`md:text-8xl md:text-start text-center font-bold text-3xl`}>¡Trabajemos Juntos!</h2>
              <div className='flex justify-start items-center gap-6'>
                  <FaGithub className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}`  : "w-10 h-10 md:w-16 md:h-16 text-white"}/>
                  <FaLinkedin className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}` : "w-10 h-10 md:w-16 md:h-16 text-white"}/>
                  <FaBehance className={theme.background === "bg-bg-theme-light" ? `w-10 h-10 md:w-16 md:h-16 ${theme.font}` : "w-10 h-10 md:w-16 md:h-16 text-white"}/>
              </div>
          </div>
        <div className='md:w-1/3 w-full'>
          <Formulario/>
        </div>
    </div>
  )
}

export default Contacto