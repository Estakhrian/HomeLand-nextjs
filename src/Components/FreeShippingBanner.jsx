import Link from "next/link";

export default function FreeShippingBanner() {
    return (
        <Link href={"/store"}>
            <div className="w-full h-80 sm:h-64 my-8 sm:my-16">
                <img
                    src="/images/bannerImg/freeBanner.png"
                    className="hidden sm:flex w-full h-full"
                />
                <img
                    src="/images/bannerImg/freeBannerMobile.png"
                    className="flex sm:hidden w-full h-full" />
            </div>
        </Link>
    )
}