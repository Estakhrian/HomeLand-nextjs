"use client"

import { productDetails } from "@/data/products";
import { ChevronLeft } from "lucide-react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"
import "swiper/swiper.css"
import "swiper/css/pagination"
import Link from "next/link";


export default function LatestProducts() {

    const latestProducts = productDetails.filter(product => product.newProduct)
    return (
        <section dir="rtl" className="w-full flex flex-col p-8 rounded-3xl border border-black/10 my-2 bg-white
         dark:bg-[#1a1d23]">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold text-black/75 dark:text-gray-400">
                    <span className="text-[#47D155]">جدیدترین</span>  محصولات
                </h2>
                <Link href={"/store"} className="flex items-center justify-center text-[#FF8E0B] border border-[#FF8E0B] px-2 py-1
                 rounded text-xs hover:bg-[#FF8E0B] hover:text-white duration-400 cursor-pointer">
                    مشاهده همه
                    <ChevronLeft size={12} />
                </Link>
            </div>

            <div className="flex justify-center items-center">
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 4
                        },
                        1024: {
                            slidesPerView: 5
                        }
                    }}
                >
                    {latestProducts.map((product) => (
                        <SwiperSlide key={product.id} >
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="custom-pagination"></div> */}


            </div>
        </section>
    )
}