"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function PhilipsBanner() {
    return (
        <div className="w-full">
            <div className="flex flex-col sm:flex-row relative  items-center w-full h-82 lg:h-96 bg-linear-to-l from-orange-500 to-yellow-500
         rounded-3xl overflow-hidden">

                <div className="absolute left-14 top-10 -translat-y-1/2 w-76 h-76 rounded-full bg-orange-500 blur-xs" />

                <p className="absolute left-12 sm:left-1 md:left-2 lg:left-12 top-8 sm:top-20 lg:top-28 text-white text-4xl md:text-[40px] lg:text-5xl font-semibold tracking-wide z-10">
                    PHILIPS
                </p>
                <img
                    src="/images/banner.png"
                    alt="Philips"
                    className="absolute mx-auto sm:left-4 md:left-14 lg:left-16 top-3 sm:top-20 w-64 sm:w-72 lg:w-96" />

                <h2 className="absolute sm:right-4 md:right-12 lg:right-16 top-46 sm:top-18 lg:top-28 text-white text-xl sm:text-2xl md:text-4xl font-bold">
                    محصولات برند فیلیپس
                </h2>

                <p className="absolute sm:right-4 md:right-12 lg:right-16 top-58 sm:top-36 lg:top-48 text-white text-sm md:text-lg">
                    زندگی آسوده تر با محصولات هوشمند فیلیپس
                </p>

                <Link href={"/store"}>
                    <button className="absolute text-xs sm:text-sm flex items-center justify-center gap-1
                    left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 md:right-12 lg:right-16
                top-68 sm:top-50 lg:top-68 text-[#FF8E0B] bg-white p-1 md:px-5 md:py-3 rounded-lg font-semibold cursor-pointer">
                        مشاهده و خرید
                        <ChevronLeft size={12} />
                    </button>
                </Link>

            </div>
            {/* <div className="w-full h-80 flex sm:hidden">
                <img
                    className="w-full"
                    src="/images/mobileBanner.png" />
            </div> */}
        </div>
    )
}