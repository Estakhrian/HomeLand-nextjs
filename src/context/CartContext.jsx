"use client"

import { createContext, useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"

const cartContext = createContext()

export function CartProvider ({children}) {

    const [cartItems, setCartItems] = useState(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("homeLand-cart")
            return savedCart ? JSON.parse(savedCart) : []
        }
        return []
    })

    useEffect(() => localStorage.setItem("homeLand-cart", JSON.stringify(cartItems)), [cartItems])

    {/**اضافه کردن محصول به سبد خرید add to cart */}
    function addToCart (product, quantity = 1) {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id == product.id)

            if(existingItem) {
                return prevItems.map(item => item.id === product.id ? {...item, quantity: item.quantity + quantity} : item)
            }

            return [...prevItems, {...product, quantity}]
        })

        Swal.fire({
            toast: true,
            position: "bottom-end",
            icon: "success",
            title: `${product.title} به سبد خرید اضافه شد `,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: "#FF8E0B",
            color: "#ffff"
        })
    }

    function increaseQuantity (productId) {
        setCartItems((prevItems) => (
            prevItems.map( item => item.id === productId ? {...item, quantity: item.quantity + 1} : item)
        ))
    }

    function decreaseQuantity (productId) {
        setCartItems((prevItems) => (
            prevItems.map( item => item.id === productId ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0)
        ))
    }

    function removeFromCart (productId) {
        setCartItems(prevItems => 
            prevItems.filter(item => item.id !== productId)
        )
    }

    const clearCartItems = () => {
        setCartItems([])
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item. quantity, 0
    )

    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId)
    }


    return (
        <cartContext.Provider value={{cartItems,clearCartItems, addToCart, increaseQuantity, decreaseQuantity,
         removeFromCart, totalItems, totalPrice, isInCart}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart () {
    return useContext(cartContext)
}