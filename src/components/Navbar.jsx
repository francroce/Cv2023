import { useState, useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'
import {XMarkIcon,Bars3BottomRightIcon,MoonIcon,SunIcon} from '@heroicons/react/24/solid'
import Github from '../assets/github.png';
import Linkedin from '../assets/Linkedin.png';
import Line from '../assets/line.png';



const Navbar = () => {

const {theme, handleChangeTheme} = useContext(ThemeContext)
const [isOpen,SetIsOpen] = useState(false)

  return (   
        <div className={`w-full absolute top-0 left-0`}>
                <div className={`md:flex items-center ${theme.background} ${theme.font} justify-between py-4 md:py-7 md:px-10 px-7`}>
  
                    <div className='font-bold text-xl cursor-pointer flex items-center gap-1'>
                        <span className="font-medium text-md">Portfolio</span>
                    </div>
                    <div className="flex flex-row justify-center items-center absolute right-8 top-4 gap-3">
                        <div onClick={handleChangeTheme} className="w-7 h-7 bg-transparent md:hidden">{theme.background === "bg-bg-theme-light" ?  <MoonIcon/> : <SunIcon/>}</div>
                        <div onClick={()=>SetIsOpen(!isOpen)} className=' cursor-pointer md:hidden w-7 h-7'>
                            {isOpen ? <XMarkIcon/>: <Bars3BottomRightIcon/>}
                        </div>
                    </div>
                    <ul className={`md:flex md:items-center gap-4 flex flex-col md:flex-row md:pb-0 pb-12 absolute ${theme.background} ${theme.font} md:static md:gap-6 md:z-auto z-30 left-0 w-full md:w-auto md:pl-0 pl-9 ${isOpen ? 'top-24' : 'top-[-200px]'}`}>
                        <a href='./'>Projectos</a>
                        <a href='./favoritos'>Tecnologias</a>
                        <a href='./contacto'>Experiencias</a>
                        <a href='./contacto'>Contacto</a>
                    </ul>
                    <div className="md:flex md:justify-evenly md:gap-6 md:items-center hidden md:block">
                        <img src={Github} alt="" className="w-6 h-6" />
                        <img src={Linkedin} alt="" className="w-6 h-6"  />
                        <img src={Line} alt="" className=" w-0.5 h-6"/>
                        <div onClick={handleChangeTheme} className="w-7 h-7 bg-transparent ">{theme.background === "bg-bg-theme-light" ?  <MoonIcon/> : <SunIcon/>}</div>
                    </div>
                </div>
        </div>
  )
}

export default Navbar
