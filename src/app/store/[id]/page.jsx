"use client"

import {use} from "react"
import { useCart } from "@/context/CartContext"
import { productDetails } from "@/data/products"
import { Heart, ShoppingBag, ShoppingBasket } from "lucide-react"

export default function ProductDetailsPage({ params }) {

    const { id } = use(params)
    const product = productDetails.find(product => product.id == id)

    // const {addToCart} = useCart()
    const { addToCart, isInCart } = useCart()

    if (!product) {
        return (
            <p>محصول مدنظر پیدا نشد</p>
        )
    }
    return (
        <div className="w-full flex flex-col gap-1 justify-start items-center">
            <h2 className="text-xl text-[#FF8E0B] font-bold my-5"> به فروشگاه ما خوش آمدید</h2>
            <div className="w-[90%] bg-white rounded-2xl flex justify-center items-center p-5 mx-auto 
            shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] dark:bg-black">
                <div className="w-full flex items-center justify-around gap-4">
                    <div className="w-55 h-60 border border-black/10 flex items-center justify-center rounded-2xl">
                        <img className="w-[90%] h-[90%]" src={product.image} alt={product.title} />
                    </div>
                    <div className="w-full flex flex-col justify-between items-start gap-4 dark:text-gray-400">
                        <h2 className="text-2xl font-bold">{product.title}</h2>
                        <p className="text-xs">در دنیایی که زیبایی و دوام حرف اول را می‌زنند، ما ترکیبی بی‌نظیر از طراحی مدرن و کیفیت ماندگار را به خانه شما می‌آوریم،
                            مجموعه‌ای از مبلمان و سرویس‌های چوبی با ساختی دقیق،
                            متریال ممتاز و طراحی‌های چشم‌نواز .</p>
                        <div className="flex flex-col justify-between items-start gap-2">
                            <p className="text-sm">رنگبندی :</p>
                            <div className="flex items-center gap-2">
                                {product.colors.map((color, index) => (
                                    <span key={index} className="size-4 rounded-xl" style={{ backgroundColor: color }}></span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-2 ">
                            <p className="text-sm">قیمت :

                                <span className="text-xs text-black/40 dark:text-gray-400">{product.price.toLocaleString("fa-IR")} تومان</span>
                            </p>
                            {product.oldPrice && <del className="text-xs text-black/30 dark:text-gray-500">{product.oldPrice.toLocaleString("fa-IR")} تومان</del>}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1 sm:gap-3">
                            <button
                                onClick={() => addToCart(product)}
                                className="text-xs text-white flex justify-center gap-1 items-center bg-[#FF8E0B]
                         p-1.5 rounded cursor-pointer hover:scale-105 duration-300">
                                <ShoppingBasket size={15} /> افزودن به سبد خرید</button>
                            <button className="text-xs text-white flex justify-center gap-1 items-center bg-[#ff270b]
                         p-1.5 rounded cursor-pointer hover:scale-105 duration-300">
                                <Heart size={15} /> افزودن به لیست علاقه مندی ها</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}