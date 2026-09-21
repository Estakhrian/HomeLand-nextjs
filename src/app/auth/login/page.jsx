import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div className="w-full flex justify-center items-center mt-12">
            <div className="w-[90%] md:w-[40%] flex flex-col justify-start items-center border border-black/10 
            rounded-2xl bg-white shadow-[0px_8px_64px_0px_rgba(41,65,15,0.09)] p-2">
                <h2 className="font-bold my-2">لطفا اطلاعات خود را جهت ورود وارد نمایید</h2>
                <form dir="rtl" className="flex flex-col justify-center items-start w-full h-full">

                    <div className="w-[90%] mx-auto mb-4">
                        <div className="relative flex">
                            <Mail size={16} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600"/>
                            <input type="email"
                                placeholder="ایمیل خود را وارد کنید"
                                className="w-full bg-gray-100 rounded-2xl text-sm  p-2 pr-6" />
                        </div>
                        <span className="text-xs text-red-500 mx-auto mr-2">ایمیل خود را صحیح وارد کنید</span>
                    </div>
                    <div className="w-[90%] mx-auto mb-4">
                         <div className="relative flex">
                            <Lock size={16} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-600"/>
                            <input type="email"
                                placeholder="رمز عبور خود را وارد کنید"
                                className="w-full bg-gray-100 rounded-2xl text-sm  p-2 pr-6" />
                        </div>
                        <span className="text-xs text-red-500 mx-auto mr-2">رمز عبور خود را صحیح وارد کنید</span>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <button type="submit" className="bg-blue-400 w-[90%] mx-auto rounded-2xl p-1">ورود</button>
                        <Link href={"/auth/register"} className="text-blue-400 text-xs">آیا حساب کاربری ندارید؟ برای ثبت نام کلیک کنید</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}