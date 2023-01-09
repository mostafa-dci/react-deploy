import {createContext, useState}  from 'react';

export const ThemeContext = createContext();

//pool
export const ThemeProvider = ({children})=>{
    const [allThemes, setAllThemes] = useState({
        light: {
            name: "light",
            foreground: "#000000",
            background: "#FFFFFF"
        },
        dark: {
            name: "dark",
            foreground: "#FFFFFF",
            background: "#000000"
        },
        primary: {
            name: "primary",
            foreground: "#09AA50",
            background: "#055590"
        }
    })

    const [theme, setTheme] = useState(allThemes.light)
    return (
        <ThemeContext.Provider value={{allThemes, setAllThemes, theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
