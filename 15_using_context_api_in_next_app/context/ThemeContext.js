"use client"

import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {

    const [isDark, setIsDark] = useState(true);

    function toggleTheme() {
        setIsDark((pre) => !pre);
    }

    useEffect(
        () => {
            setIsDark(localStorage.getItem("isDark") === "true")
        }, []
    )
    useEffect(
        () => {
            localStorage.setItem("isDark", isDark)
            if (isDark) {
                document.documentElement.classList.add("dark")
            } else {
                document.documentElement.classList.remove("dark")
            }
        }, [isDark]
    )
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}