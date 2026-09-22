import { useCart } from "@/context/CartContext";
import { CheckIcon, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function ProductCard({ product }) {

    const { addToCart, isInCart } = useCart()
    const inCart = isInCart(product.id)

    
    return (
        <div className="relative w-46 h-78 flex flex-col rounded-2xl border border-[#E4E4E4] bg-white p-4
        dark:bg-black dark:border-0">
            <div className="flex flex-col items-center justify-between">
                {/**top of card */}
                <div className="w-full flex justify-between">
                    <div className="flex flex-col items-center gap-1">
                        {product.colors.map((color, index) => (
                            <span key={index} className="size-2 rounded-full" style={{ backgroundColor: color }} />
                        ))}
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                        {product.discount ? (
                            <div className="text-xs text-white flex flex-col justify-center items-center bg-[#D30707] p-1 rounded
                            dark:text-gray-400">
                                <span>
                                    {product.discountPercent}
                                </span>
                                <span>%</span>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center bg-[#47D155] text-white text-xs p-1 rounded
                             dark:bg-green-700 dark:text-gray-300">
                                <span>N</span>
                                <span>E</span>
                                <span>W</span>
                            </div>
                        )}
                        <button>
                            <Heart size={18} className="dark:text-gray-400" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between w-full">
                    <img src={product.image} className=" w-32 h-32 mb-4 -mt-10" />
                    <h2 className="mb-3 text-center text-lg font-bold text-black/90 dark:text-gray-400">{product.title}</h2>
                    <hr className="w-full mb-4 border-t border-black/10 dark:border-gray-700" />
                    <div className="flex justify-between w-full mb-2">
                        {product.discount && (<del className="text-gray-400 text-xs">{product.oldPrice.toLocaleString("fa-IR")}</del>)}
                        {product.newProduct && (<span className="text-xs" style={{ color: product.tagColor }}>{product.tag}</span>)}
                        <span className="text-sm text-black/70 dark:text-gray-300">{product.price.toLocaleString("fa-IR")}</span>
                    </div>
                    <div className="w-full flex justify-between items-end">
                        <div className="flex">
                            <ShoppingCart
                                size={18}
                                className="text-black/70 cursor-pointer dark:text-gray-400"
                                onClick={() => addToCart(product)} />
                                {inCart && <CheckIcon size={18} className="text-green-500"/>}
                        </div>
                        <Link href={`/store/${product.id}`} >
                            <button className="text-[#F57201] cursor-pointer ">مشاهده</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}