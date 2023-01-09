import {createContext, useState, useEffect}  from 'react';

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

    // const [theme, setTheme] = useState(allThemes.light);
    // get currentTheme from localStorage
    // let currentTheme = localStorage.getItem("currentTheme")
    // currentTheme = JSON.parse(currentTheme)
    const [theme, setTheme] = useState(allThemes.light);
    // from the first time (component loaded/mounted)
    useEffect(()=>{
        // check if localstorage(currentTheme) is exist (stored in browser)
        if(localStorage.getItem("currentTheme")){
            setTheme(JSON.parse(localStorage.getItem('currentTheme')))
        }else{
            // set default theme
            setTheme(allThemes.light)
            // store it also in local storage
            localStorage.setItem('currentTheme', JSON.stringify(allThemes.light))
        }
    }, [allThemes.light])
    return (
        <ThemeContext.Provider value={{allThemes, setAllThemes, theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
