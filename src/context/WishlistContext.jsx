"use client"

import { createContext, useContext, useState, useEffect } from "react"


const WishlistContext = createContext()

export function WishlistProvider({ children }) {

    const [wishListItems, setWishListItems] = useState(() => {
        if (typeof window !== "undefined") {
            const savedWishList = localStorage.getItem("wishlist-items")
            return savedWishList ? JSON.parse(savedWishList) : []
        }
        return []
    })

    useEffect(() => localStorage.setItem("wishlist-items", JSON.stringify(wishListItems)), [wishListItems])


    function toggleWishlist(product) {
        setWishListItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id == product.id)

            if (existingItem) {
                return prevItems.filter(item => item.id !== product.id)
            } else {
                return [...prevItems, product]
            }
        })

    }

    function isInWishlist(productId) {
        return wishListItems.some(item => item.id === productId)
    }

    function removeFromWishlist (productId) {
        setWishListItems(prevItems =>
            prevItems.filter(item => item.id !== productId)
        )
    }


    return (
        <WishlistContext.Provider value={{ wishListItems, toggleWishlist, isInWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}

export function useWishlist() {
    return useContext(WishlistContext)
}