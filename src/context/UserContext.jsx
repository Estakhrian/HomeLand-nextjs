"use client"

import { createContext, useState, useEffect, useContext } from "react";

const userContext = createContext()

export function UserProvider({children}) {
    const [user, setUser] = useState(null)


    {/**موقع لود اولیه اگر کاربر قبلا ثبت نام کرده بود اطلاعاتشو میگیره */}
    useEffect(() => {
        const savedUser = localStorage.getItem("user")
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    },[])

    {/**تابع ثبت نام ، هم توی استیت هم لوکال استوریج ذخیره بشه */}

    const registerUser = (userData) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logoutUser =() => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <userContext.Provider value={{user, registerUser, logoutUser}}>
            {children}
        </userContext.Provider>
    )
}

export function useUser () {
    return useContext(userContext)
}