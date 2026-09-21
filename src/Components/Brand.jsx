

import { brandImg } from "@/data/brandImgSrc"


export default function Brand() {

    return (
        <div className="w-full flex flex-col items-start justify-center mt-6">
            <h2 className="text-xl font-bold mr-2 mb-2 dark:text-gray-300">خرید بر اساس برند</h2>
            <div className="w-full h-34 md:h-20 rounded-2xl border border-black/10 bg-white grid grid-cols-3 gap-1 md:grid-cols-6 
            items-center justify-center dark:bg-[#1a1d23]">
                {brandImg.map(item => (
                    <div key={item.id} className="flex items-center justify-center">
                        <img src={item.src} className="w-16 h-16" />
                    </div>
                ))}
            </div>
        </div>


    )

}