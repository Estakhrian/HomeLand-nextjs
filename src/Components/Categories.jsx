"use client"

import Link from "next/link"


export default function Categories({ categoryDetails }) {

    return (
        <section
            dir="rtl"
            className="grid grid-cols-2 gap-8 py-4 md:grid-cols-4 md:gap-12 lg:gap-16 my-10">
            {categoryDetails.map(item => (
                <Link key={item.id} href={`/store?category=${item.category}`}>
                    <div  className="flex items-center justify-start gap-1">
                        <div className="bg-[#A3852A]/30 flex justify-center items-center size-16 md:size-20 rounded-full">
                            <img src={item.image} className="w-12 md:w-14 h-12 md:h-14" />
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <p className="w-full text-right font-bold text-black dark:text-gray-400 text-sm lg:text-base">{item.title}</p>
                            <p className="text-xs text-[#808080] dark:text-gray-500">{item.brands}</p>
                        </div>
                    </div>
                    </Link>
            ))}
        </section>
    )

}