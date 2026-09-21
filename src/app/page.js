
import Header from "@/Components/Header";
import PhilipsBanner from "@/Components/PhilipsBanner";
import Categories from "@/Components/Categories";
import OfferSection from "@/Components/OfferSection";
import { categoryDetails, categoryDetails2 } from "@/data/categoryDetails";
import Banner from "@/Components/Banner";
import LatestProducts from "@/Components/LatestProducts";
import Brand from "@/Components/Brand";
import FreeShippingBanner from "@/Components/FreeShippingBanner";

export default function Home() {
  return (
    <div className="overflow-hidden" dir="rtl">
      <PhilipsBanner />
      <Categories categoryDetails={categoryDetails}/>
      <OfferSection/>
      <Categories categoryDetails={categoryDetails2}/>
      <Banner />
      <LatestProducts />
      <Brand />
      <FreeShippingBanner />
    </div>
  );
}
