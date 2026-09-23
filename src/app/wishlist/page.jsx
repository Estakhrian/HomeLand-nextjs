"use client"

import { useCart } from "@/context/CartContext"
import { useWishlist } from "@/context/WishlistContext"
import { Trash, ShoppingCart } from "lucide-react"
import Link from "next/link"


export default function wishlistPage() {

    const { wishListItems, removeFromWishlist } = useWishlist()

    const { addToCart} = useCart()


    if (wishListItems.length === 0) {
        return (
            <div className="w-full h-50 flex justify-center mt-10">
                <h2 className="font-bold dark:text-gray-400"> لیست شما خالی است </h2>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col items-center">
            <h2 className="text-lg font-bold my-2 text-black/70 dark:text-gray-400">لیست علاقه مندی های شما</h2>
            <div className="w-full text-black/70 flex flex-col md:flex-row justify-center items-start gap-7 md:gap-1 p-2 my-3  bg-inherit">
                <div className="w-full md:w-[80%] h-70 overflow-auto px-4 ">
                    {wishListItems.map((item, index) => (
                        <div key={index} dir="rtl"
                            className="w-full flex items-center justify-between gap-10 p-1.5 rounded-2xl my-3
                        shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] dark:bg-[#1a1d23]">
                            <div className="flex justify-start items-center w-[70%] gap-2">
                                <Trash
                                    onClick={() => removeFromWishlist(item.id)}
                                    size={18}
                                    className="text-red-500 cursor-pointer dark:text-red-700" />
                                <Link href={`/store/${item.id}`}>
                                    <img src={item.image} alt={item.id} className="w-20 h-20" />
                                </Link>
                                <div className="flex flex-col justify-center items-start gap-1 sm:gap-2 md:gap-3">
                                    <Link href={`/store/${item.id}`} className="flex flex-col gap-2">
                                        <h2 className="text-[12px] sm:text-xs md:font-medium font-bold dark:text-gray-400">
                                            {item.title}
                                        </h2>
                                    </Link>
                                    <button 
                                    onClick={() => addToCart(item)}
                                    className="flex justify-center items-center p-0.5 text-white 
                                    rounded text-[8px] bg-[#F57201] cursor-pointer">
                                        <ShoppingCart size={16} />
                                        خرید محصول
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-[12px] sm:text-sm dark:text-gray-400">قیمت:
                                    <span className="text-[12px] sm:text-xs"> {(item.price).toLocaleString("fa-IR")} </span>
                                </h2>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}