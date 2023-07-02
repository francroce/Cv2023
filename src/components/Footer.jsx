import { useContext } from "react"
import {ThemeContext} from '../context/ThemeContext'

const Footer = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`w-full text-center h-20 flex justify-center items-center ${theme.button}`}>
        <span>powered by <strong>Franco Croce - 2023</strong></span>
    </div>
  )
}

export default Footer