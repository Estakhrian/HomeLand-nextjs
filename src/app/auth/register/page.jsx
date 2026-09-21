"use client"

import { useUser } from "@/context/UserContext";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";


export default function RegisterPage() {

    const router = useRouter()


    const nameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    const { registerUser } = useUser()
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [showNameError, setShowNameError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    const [showPasswordError, setShowPasswordError] = useState(false)



    const nameHandler = (e) => {

        setFormData({ ...formData, name: e.target.value })
        if (!nameRegex.test(formData.name)) {
            setShowNameError(true)
        } else {
            setShowNameError(false)
        }
    }


    const emailHandler = (e) => {

        setFormData({ ...formData, email: e.target.value })
        if (!emailRegex.test(formData.email)) {
            setShowEmailError(true)
        } else {
            setShowEmailError(false)
        }
    }


    const passwordHandler = (e) => {

        setFormData({ ...formData, password: e.target.value })
        if (!passwordRegex.test(formData.password)) {
            setShowPasswordError(true)
        } else {
            setShowPasswordError(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (nameRegex.test(formData.name) && emailRegex.test(formData.email) && passwordRegex.test(formData.password)) {
            registerUser(formData)

            Swal.fire({
                title: "ثبت نام موفق",
                text: "با موفقیت ثبت نام شدید",
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
        }
    }

    {/** برای مدیریت قابل کلیک یا غیر قابل کلیک بودن دکمه ثبت نام */ }
    const isFormValid = nameRegex.test(formData.name) && emailRegex.test(formData.email) && passwordRegex.test(formData.password)


    return (
        <div className="w-full flex flex-col md:flex-row justify-around items-center md:items-start gap-3">

            <div className="w-[90%] md:w-[50%] h-94 flex flex-col justify-start items-center gap-2 border border-black/10 
            rounded-2xl bg-white shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] mt-4
             dark:bg-[#1a1d23] dark:border-gray-700">
                <h2 className="font-bold mt-3 dark:text-gray-400">لطفا اطلاعات خود را جهت ثبت نام وارد نمایید</h2>
                <form dir="rtl" className="flex flex-col justify-center items-start w-full h-full" onSubmit={submitHandler}>
                    <div className=" w-[90%] mx-auto mb-4"  >
                        <div className="relative flex">
                            <User size={16} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400" />
                            <input type="text"
                                placeholder="نام کاربری خود را وارد نمایید "
                                className={`w-full bg-gray-100 rounded-2xl text-sm p-2 pr-6
                                     ${nameRegex.test(formData.name) && "border border-green-400 outline-green-500"}
                                     dark:bg-gray-600 dark:text-gray-300 dark:placeholder:text-gray-400`}
                                onChange={nameHandler}
                                maxLength={10}
                            />
                        </div>
                        {showNameError && <span className="w-full text-xs text-red-500 mr-2">نام کاربری خود را صحیح وارد کنید</span>}
                    </div>

                    <div className="w-[90%] mx-auto mb-4">
                        <div className="relative flex">
                            <Mail size={16} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400" />
                            <input type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className={`w-full bg-gray-100 rounded-2xl text-sm p-2 pr-6 
                                    ${emailRegex.test(formData.email) && "border border-green-400 outline-green-500"}
                                     dark:bg-gray-600 dark:text-gray-300 dark:placeholder:text-gray-400`}
                                onChange={emailHandler} />
                        </div>
                        {showEmailError && <span className="text-xs text-red-500 mx-auto mr-2">ایمیل خود را صحیح وارد کنید</span>}
                    </div>
                    <div className="w-[90%] mx-auto mb-4">
                        <div className="relative flex">
                            <Lock size={16} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400" />
                            <input type="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                className={`w-full bg-gray-100 rounded-2xl text-sm p-2 pr-6 
                                    ${passwordRegex.test(formData.password) && "border border-green-400 outline-green-500"}
                                     dark:bg-gray-600 dark:text-gray-300 dark:placeholder:text-gray-400`}
                                onChange={passwordHandler} />
                        </div>
                        {showPasswordError && <span className="text-xs text-red-500 mx-auto mr-2">رمز عبور خود را صحیح وارد کنید</span>}
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <button
                            disabled={!isFormValid}
                            type="submit"
                            className={`w-[90%] mx-auto rounded-2xl p-1 ${isFormValid ? "bg-blue-500 dark:bg-blue-700 text-white dark:text-gray-300 cursor-pointer"
                             : "bg-gray-300 dark:bg-gray-500 text-black/30 cursor-not-allowed"}`}>ثبت نام </button>
                        {/* <Link href={"/auth/login"} className="text-blue-400 text-xs">آیا حساب کاربری دارید؟ برای ورود کلیک کنید</Link> */}
                    </div>
                </form>
            </div>

            <div className=" w-[90%] md:w-[40%] text-sm  flex flex-col gap-3 border mt-8 md:mt-5 mb-6 p-3 border-black/10 
            rounded-2xl bg-white shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] dark:bg-[#1a1d23] dark:text-gray-400 dark:border-gray-700">
                <h3>نام کاربری باید شامل حروف انگلیسی بزرگ و کوچک و دو عدد باشد</h3>
                <h3>رمزعبور باید 8 رقم و شامل حروف انگلیسی بزرگ و کوچک و یک عدد باشد</h3>
                <h3>ایمیل باید با فرمت صحیح باشد</h3>
            </div>
        </div>
    )
}