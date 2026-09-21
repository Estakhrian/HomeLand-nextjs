"use client"

import { useCart } from "@/context/CartContext"
import { useUser } from "@/context/UserContext"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"


export default function Cart() {

    const { cartItems, increaseQuantity,
        decreaseQuantity, removeFromCart, totalItems, totalPrice, clearCartItems } = useCart()
    const { user } = useUser()
    const router = useRouter()



    if (cartItems.length === 0) {
        return (
            <div className="w-full h-50 flex justify-center mt-10">
                <h2 className="font-bold dark:text-gray-400">سبد خرید شما خالی است </h2>
            </div>
        )
    }

    const chechoutHandler = () => {
        if (user) {

            Swal.fire({
                title: "  ثبت سفارش",
                text: "سفارش ما ثبت شد",
                icon: "success",
                confirmButtonText: "باشه",
                customClass: {
                    popup: "!w-64 rounded-xl",
                    title: "!text-lg font-bold",
                    htmlContainer: "!text-sm",
                    confirmButton: "!text-sm rounded-lg"
                }
            }).then(() => {
                router.push("/")
            })
             clearCartItems()
             
    } else {
        Swal.fire({
            title: "ابتدا باید ثبت نام کنید",
            text: "برای ادامه پرداخت باید ابتدا وارد حساب کاربری خود شوید",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "برو به ثبت نام",
            cancelButtonText: "انصراف",
            customClass: {
                popup: "!w-64 rounded-xl",
                title: "!text-lg font-bold",
                htmlContainer: "!text-sm",
                confirmButton: "!text-sm rounded-lg"
            }
        }).then((result) => {
            if (result.isConfirmed) {
                router.push("/auth/register")
            }
        })
}
    }
return (
    <div className="flex flex-col items-center">
        <h2 className="text-lg font-bold my-2 dark:text-gray-400">سبد خرید شما</h2>
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-7 md:gap-1 p-2 my-5  bg-inherit">
            {/** right section */}
            <div className="w-full md:w-[60%] h-60 md:h-80 overflow-y-auto flex flex-col mx-auto  border border-black/30  rounded-2xl p-4
                dark:border-gray-700 dark:bg-black">
                {cartItems.map((item, index) => (
                    <div key={index} dir="rtl"
                        className="flex items-center justify-between p-1.5 rounded-2xl my-1
                        shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] dark:bg-[#1a1d23]">
                        <div className="flex justify-center items-center gap-2">
                            <div>
                                <img src={item.image} alt={item.id} className="w-18 h-18" />
                            </div>
                            <div>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-sm md:font-medium font-bold dark:text-gray-400">
                                        {item.title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-sm dark:text-gray-400">
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="flex justify-center items-center w-5 h-5 border rounded-full p-.5 cursor-pointer">+</button>
                                        <p>{item.quantity}</p>
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="flex justify-center items-center w-5 h-5 border rounded-full p-.5 cursor-pointer">-</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <h2 className="text-sm dark:text-gray-400">قیمت:
                                <span> {(item.price * item.quantity).toLocaleString("fa-IR")} تومان </span>
                            </h2>
                            <Trash
                                onClick={() => removeFromCart(item.id)}
                                size={18}
                                className="text-red-500 cursor-pointer dark:text-red-700" />
                        </div>
                    </div>
                ))}
            </div>

            {/**left section */}
            <div className="w-full md:w-[35%] flex flex-col gap-4 mx-auto border border-black/30 rounded-2xl p-4 mb-3
                dark:border-gray-700 dark:bg-black">
                <h2 className="text-lg font-bold dark:text-gray-400">تسویه حساب</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm dark:text-gray-400">
                        <h2>تعداد محصولات شما :</h2>
                        <span>{totalItems} عدد</span>

                    </div>
                    <div className="flex justify-between items-center text-sm dark:text-gray-400">
                        <h2>قیمت نهایی :</h2>
                        <span>{totalPrice.toLocaleString("fa-IR")} تومان </span>
                    </div>
                </div>
                <button
                    onClick={chechoutHandler}
                    className="text-sm bg-blue-500 p-1.5 border border-black/30 rounded cursor-pointer
                    dark:bg-blue-700 dark:text-gray-300">پرداخت</button>
            </div>
        </div>
    </div>
)
}