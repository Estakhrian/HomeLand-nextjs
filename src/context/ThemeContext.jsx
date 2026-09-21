"use client"

import { createContext, useContext, useEffect, useState } from "react"

const themeContext = createContext()

export function ThemeProvider({ children }) {

    const [isDark, setIsDark] = useState(() => {
        if (typeof window === "undefined") return false

        const saved = localStorage.getItem("theme")

        if (saved === "dark") return true
        if (saved === "light") return false

        return window.matchMedia("(prefers-color-scheme: dark)").matches
    })


    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        localStorage.setItem("theme", isDark ? "dark" : "light")
    })

    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }

    return (
        <themeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme() {
    return useContext(themeContext)
}