"use client"

import { useCart } from "@/context/CartContext"
import { useTheme } from "@/context/ThemeContext"
import { useUser } from "@/context/UserContext"
import { category } from "@/data/categoryDetails"
import { ShoppingBasket, User, House, Receipt, Handshake, Truck, X, MessageCircle, BadgePercent, ChevronDown, Search, Menu, Store, ChevronUp, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"


export default function Header() {

    const { cartItems } = useCart()
    const { user, logoutUser } = useUser()
    const { isDark, toggleTheme } = useTheme()
    const {pathname} = usePathname()

    const [showMenu, setShowMenu] = useState(false)
    const [isCategoryOpen, setIsCategoryOpen] = useState(false)




    const handleLogoutClick = () => {
        Swal.fire({
            title: "خروج از حساب کاربری",
            text: "میخواهید از حساب خود خارج شوید ؟",
            showCancelButton: true,
            confirmButtonText: "بله",
            cancelButtonText: "خیر",
            customClass: {
                    popup: "!w-64 rounded-xl",
                    title: "!text-lg font-bold",
                    htmlContainer: "!text-sm",
                    confirmButton: "!text-sm rounded-lg",
                    cancelButton:"!text-sm rounded-lg"
                }
        }).then(result => {
            if (result.isConfirmed) {
                logoutUser()
            }
        })
    }
    return (
        <header className="w-full h-14 md:h-26 rounded-3xl bg-[#fcfcfc] dark:bg-[#1a1d23] dark:border border-gray-700 mt-3 mb-4 shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)]">

            {/**mobile header */}
            <div dir="rtl" className=" w-full h-full md:hidden flex justify-between items-center">
                <div onClick={() => setShowMenu(true)} className=" cursor-pointer mr-3 dark:text-gray-400">
                    <Menu />
                </div>
                <div className="">
                    <h2 className="font-extrabold text-xl text-[#FF8E0B]">HOMELAND</h2>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <button
                        className="text-black/70 cursor-pointer hover:scale-110 mr-1 dark:text-gray-400"
                        onClick={toggleTheme}>
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Link href={"/cart"} className="ml-3">
                        <div className=" flex justify-start items-center text-xs gap-1 p-1 bg-gray-100 rounded-xl
                     hover:text-black duration-100 cursor-pointer dark:bg-[#1a1d23] dark:border dark:border-gray-700">
                            <span className="text-sm text-black/70 dark:text-gray-400">{cartItems ? cartItems.length : 0}</span>
                            <ShoppingBasket size={22} className="text-black/70 dark:text-gray-400" />
                        </div>
                    </Link>
                </div>
            </div>

            {/** hamburger menu */}

            <div style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                className={`fixed top-0 right-0 w-48 h-screen bg-white z-50 transition-transform duration-1000 ease-out
                ${showMenu ? "translate-x-0" : "translate-x-full"} dark:bg-[#1a1d23]`}>
                <div className="flex flex-col items-start justify-center gap-2 mt-3">
                    <div className=" w-full flex items-center justify-between p-1 my-2">
                        <h2 className="font-extrabold text-[#FF8E0B]">HOMELAND</h2>
                        <X onClick={() => {
                            setShowMenu(false)
                            setIsCategoryOpen(false)
                        }}
                            size={20} className="text-red-500 cursor-pointer border border-red-400 rounded-2xl p-.5
                        hover:bg-red-500 hover:text-white duration-300"/>
                    </div>

                    <div className="">
                        <div
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="w-full flex justify-between items-center text-sm gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                            <span>دسته بندی ها</span>
                            <ChevronDown size={12} />
                        </div>
                        {isCategoryOpen &&
                            <div className="w-36 bg-inherit flex flex-col items-start justify-start gap-3
                                text-xs text-black pr-3 py-1 mr-1 right-10 rounded-xl shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)]
                                 border border-black/20  dark:text-gray-400 dark:hover:text-gray-300 dark:border-gray-300">
                                {category.map(item => (
                                    <Link href={`/store?category=${item.category}`}
                                        key={item.category}
                                        className="my-.5 hover:border-b border-black/30 hover:scale-105 duration-200"
                                        onClick={() => setIsCategoryOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>}
                    </div>

                    <Link href={"/"}>
                        <div className=" flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer
                    dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                            <House size={16} />
                            <span>صفحه اصلی</span>
                        </div>
                    </Link>
                    <Link href={"/store"}>
                        <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                            <Store size={16} />
                            <span>فروشگاه</span>
                        </div>
                    </Link>
                    <Link href={"/store?discount=true"}>
                        <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                            <BadgePercent size={16} />
                            <span>فروش ویژه</span>
                        </div>
                    </Link>
                    <div className="flex justify-start items-center text-xs gap-.5  
                    text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                        <Receipt size={16} />
                        <span>خرید اقساطی</span>
                    </div>

                    <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                        <Truck size={16} />
                        <span>   پیگیری سفارشات</span>
                    </div>
                    <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                        <MessageCircle size={16} />
                        <span>ارتباط با ما</span>
                    </div>

                    {user ?
                        (<button
                            onClick={handleLogoutClick}
                            className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                            <User size={16} />
                            {user.name}
                        </button>)
                        :
                        (
                            <Link href={`/auth/register?redirect=${pathname}`}>
                                <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black duration-100 cursor-pointer 
                     dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-300">
                                    <User size={16} />
                                    <h3>ورود و ثبت نام</h3>
                                </div>
                            </Link>
                        )}
                </div>
            </div>


            {/** header for top of Md */}
            <div className="hidden md:block w-full h-full">
                {/* top header*/}
                <div className="w-full h-10 flex items-center justify-between pt-4 px-6">
                    {/** top header - right section */}
                    <div className="flex items-center justify-center gap-4">
                        <h2 className="text-[#FF8E0B] text-xl font-bold">HOMELAND</h2>
                        <button
                            onClick={toggleTheme}
                            className="text-black/70 dark:text-gray-400 cursor-pointer hover:scale-110 mr-1">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/**top header - left section */}
                    <div className="flex items-center justify-center gap-3">
                        <Link href={"/cart"}>
                            <div className="  w-10 h-8 flex items-center justify-center gap-1 bg-gray-100 dark:bg-[#1a1d23d4] dark:border border-gray-700 rounded hover:scale-110 duration-300">
                                <span className="text-xs text-black/70 dark:text-gray-400 ">{cartItems ? cartItems.length : 0}</span>
                                <ShoppingBasket size={20} className=" text-black/70 dark:text-gray-400 " />
                            </div>
                        </Link>
                        {user ? (
                            <button
                                onClick={handleLogoutClick}
                                className="w-28 h-8 flex items-center justify-center gap-1 cursor-pointer border border-gray-200 p-1 rounded  hover:scale-110 duration-300 dark:border
                                dark:border-gray-700
                    ">
                                <User size={20} className=" text-black/80 dark:text-gray-400" />
                                <span className="text-sm  text-black/80 dark:text-gray-400">{user.name}</span>
                            </button>
                        ) : (
                            <Link href={`/auth/register?redirect=${pathname}`}>
                                <div className="w-28 h-8 flex items-center justify-center gap-1 border border-gray-200 p-1 rounded  hover:scale-110 duration-300
                                dark:border dark:border-gray-700
                    ">
                                    <User size={20} className=" text-black/80 dark:text-gray-400" />
                                    <span className="text-xs  text-black/80 dark:text-gray-400">ورود | ثبت نام</span>
                                </div>

                            </Link>
                        )}

                    </div>
                </div>

                <div className="mx-6 my-3 h-px bg-black/10" />

                {/** bottom header */}
                <div className="flex items-start justify-between px-6">
                    {/**right section- menu */}
                    <div
                        className="flex justify-center items-start gap-3 lg:gap-6">
                        <div className="relative">
                            <div
                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                className="bg-[#FF8E0B] px-2 py-1 rounded text-xs text-[#fcfcfc] flex items-center justify-center gap-1 cursor-pointer">
                                <span>دسته بندی ها</span>
                                {isCategoryOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                            </div>
                            {isCategoryOpen &&
                                <div className="absolute w-32 bg-white flex flex-col items-start justify-start gap-3
                                text-xs text-black px-2 py-1 mt-1 rounded z-50 shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)]
                             dark:border dark:border-gray-600 dark:bg-black">
                                    {category.map(item => (
                                        <Link href={`/store?category=${item.category}`}
                                            key={item.category}
                                            className="my-.5 hover:border-b border-black/30 hover:scale-105 duration-200
                                            dark:text-gray-400 dark:hover:text-gray-300
                                            "
                                            onClick={() => setIsCategoryOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>}
                        </div>
                        <Link href={"/"}>
                            <div className=" flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer
                    dark:text-gray-400 dark:border-gray-300 dark:hover:text-gray-300">
                                <House size={16} />
                                <span>صفحه اصلی</span>
                            </div>
                        </Link>

                        <Link href={"/store"}>
                            <div className="flex justify-start items-center text-xs gap-.5 text-gray-700 p-1
                    hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                      dark:text-gray-400 dark:border-gray-300 dark:hover:text-gray-300">
                                <Store size={16} />
                                <span>فروشگاه</span>
                            </div>
                        </Link>

                        <div className="py-1 text-xs text-black/70 flex items-center justify-center gap-1
                        hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                          dark:text-gray-400 dark:border-gray-300 dark:hover:text-gray-300">
                            <Receipt size={16} />
                            <span>خرید اقساطی</span>
                        </div>

                        <div className="py-1 text-xs text-black/70 flex items-center justify-center gap-1
                        hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                          dark:text-gray-400 dark:border-gray-300 dark:hover:text-gray-300">
                            <Truck size={16} />
                            <span>   پیگیری سفارشات</span>
                        </div>
                        <div className="py-1 text-xs text-black/70 flex items-center justify-center gap-1
                        hover:border-b border-black/30 hover:text-black hover:font-bold duration-100 cursor-pointer 
                          dark:text-gray-400 dark:border-gray-300 dark:hover:text-gray-300">
                            <MessageCircle size={16} />
                            <span>ارتباط با ما</span>
                        </div>
                    </div>

                    {/** left section */}
                    <div>
                        <Link href={"/store?discount=true"} className="px-2 py-1 rounded text-xs text-red-500 border border-red-500 flex items-center 
                        justify-center gap-1 hover:scale-110 duration-300 dark:border dark:border-red-800 dark:text-red-800">
                            <BadgePercent size={16} />
                            <span>فروش ویژه</span>
                        </Link>
                    </div>
                </div>
            </div>

        </header >
    )
}