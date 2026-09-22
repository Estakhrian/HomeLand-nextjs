"use client"

import Link from "next/link";
import { serviceItems } from "@/data/FooterDetails";

export default function Footer() {
    return (
        <footer className="w-full mt-10 bg-gray-100 dark:bg-[#1a1d23]">
            <div>
                {/**top footer */}
                <div className="w-full flex items-center justify-around gap-2 mb-10 p-2">
                    {serviceItems.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center gap-1">
                            <img src={item.icon} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
                            <div className="text-[10px] sm:text-xs text-black/80 dark:text-gray-400">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border text-gray-300 w-[90%]"/>
                {/** bottom footer */}
                <div className="w-full flex flex-col md:flex-row justify-between items-stretch p-2 mt-14 mb-3">
                    <div className="w-full md:w-77 flex flex-col items-start">
                        <h2 className="text-lg font-medium mb-2 border-b border-gray-200 text-[#FF8E0B]">درباره هوم لند</h2>
                        <p className="text-sm text-gray-500 leading-6">
                            یکی از مراکز تخصصی خرید لوازم خانگی اصل و اورجینال اعم از لوازم خانه و آشپزخانه، گرمایشی و سرمایشی، شستشو و نظافت، آرایشی و بهداشتی و صوتی و تصویری می‌باشد. این مجموعه ارائه دهنده‌ی برترین برندهای لوازم خانگی موجود در بازار می‌باشد.
                        </p>
                    </div>
                    <div className="w-full md:w-30 flex flex-col items-start md:items-center gap-1 p-1">
                        <h2 className="text-sm font-medium mb-2 border-b border-gray-200 text-black/70 dark:text-gray-300">لینک های مهم</h2>
                        <ul className="flex flex-col items-center gap-1 text-sm text-gray-500">
                            <li>
                                <Link href={"/"}>صفحه اصلی</Link>
                            </li>
                            <li>
                                <Link href={"/store"}>فروشگاه</Link>
                            </li>
                            <li>
                                <Link href={"/auth/register"}> ثبت نام</Link>
                            </li>
                            <li>
                                <Link href={"/cart"}> سبد خرید</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-30 flex flex-col items-start md:items-center gap-1 p-1">
                        <h2 className="text-sm font-medium mb-2 border-b border-gray-200  text-black/70 dark:text-gray-300">دسته بندی </h2>
                        <ul className="flex flex-col items-center gap-1 text-sm text-gray-500">
                            <li>
                                <Link href={"/store?category=washing-machine"}>لباسشویی</Link>
                            </li>
                            <li>
                                <Link href={"/store?category=gas-stove"}>اجاق گاز</Link>
                            </li>
                            <li>
                                <Link href={"/store?category=range-hood"}>هود</Link>
                            </li>
                            <li>
                                <Link href={"/store?category=vacuum-cleaner"}>جاروبرقی</Link>
                            </li>
                            <li>
                                <Link href={"/store?category=coffee-macker"}>قهوه ساز</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-30 flex flex-col items-start md:items-center gap-1 p-1">
                        <h2 className="text-sm font-medium mb-2 border-b border-gray-200 text-black/70  dark:text-gray-300">ارتباط با ما</h2>
                        <ul className="flex flex-col items-start md:items-center gap-1 text-xs text-gray-500">
                            <li>
                                <a href="tel:989172314323">+989172314323</a>
                            </li>
                            <li>اینستاگرام ما</li>
                            <li>تلگرام ما</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-30 flex flex-col items-start md:items-center gap-1 p-1">
                        <h2 className="text-sm font-medium mb-2 border-b border-gray-200 text-black/70  dark:text-gray-300"> نشان های اعتبار ما</h2>
                        <div className="flex md:flex-col gap-1">
                            <img src="/images/footerimg/enamad.png"  className="w-14 h-14"/>
                            <img src="/images/footerimg/sabtSamaneh.webp" className="w-14 h-14"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}