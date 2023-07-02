import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = (props) => {

    const themes = {
        light: {
            font: 'text-tx-theme-light',
            background: 'bg-bg-theme-light',
            color: 'text-color-theme-light',
            button: 'bg-button-theme-light',
            border: 'border-color-theme-light'
        },
        dark: {
            font: 'text-tx-theme-dark',
            background: 'bg-bg-theme-dark',
            color: 'text-color-theme-dark',
            button: 'bg-button-theme-dark',
            border: 'border-color-theme-dark'
        }
    };

    const [theme, setTheme] = useState(themes.light)

    const handleChangeTheme = () => {
       {theme.font === themes.dark.font ? setTheme(themes.light) :setTheme(themes.dark)}}

const value={
    themes,
    theme,
    handleChangeTheme
}

  return (
    <ThemeContext.Provider value={value}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider