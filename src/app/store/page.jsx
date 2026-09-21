"use client"
import ProductCard from "@/Components/ProductCard"
import { productDetails } from "@/data/products"
import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Suspense, useState } from "react"


export function ProductsPage() {

    const searchParams = useSearchParams()
    const discount = searchParams.get("discount")
    const category = searchParams.get("category")

    const [searchTerm, setSearchTerm] = useState("")

    let productToShow = productDetails
    let title = "محصولات موجود در فروشگاه"

    if (category) {
        productToShow = productDetails.filter(product => product.category === category)
    }
    else if (discount) {
        productToShow = productDetails.filter(product => product.discount === true)
        title = "محصولات تخفیف دار فروشگاه"
    }
    if(searchTerm !== ""){
        productToShow = productDetails.filter(product => product.title.includes(searchTerm))
    }



    return (
        <div className="w-full p-3 flex flex-col items-center gap-5">
            <h2 className="text-lg font-bold text-[#FF8E0B] ">{title}</h2>
            <div className="relative bg-[#fcfcfc] mb-2 dark:bg-[#1a1d23] rounded-2xl">
                <Search size={10} className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
                <input className="bg-gray-200 dark:bg-gray-600 w-56 rounded-2xl  pr-7 py-1 text-sm dark:text-gray-300"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                    placeholder="جستجو محصولات..."
                    type="text" />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-6
            justify-items-center items-center mx-auto mb-4">
                {productToShow.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default function Products () {
    return (
        <Suspense fallback={<div>در حال بارگذاری ...</div>}>
            <ProductsPage />
        </Suspense>
    )
}