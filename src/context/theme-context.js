
import { useState, useEffect, createContext } from 'react';

const initialState = {
    dark: false,
    theme: "light",
    toggle: () => {}
}

export const ThemeContext = createContext(initialState)

export const ThemeProvider = ({ children }) => {

    const [ dark, setDark ] = useState(false) // Default is light mode

    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    // To toggle between dark and light mode
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    const theme = dark ? 'dark': 'light'

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
  
}