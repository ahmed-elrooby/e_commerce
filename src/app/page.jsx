import Categories from "@/components/Categories/Categories";
import Featured from "@/components/Featured/Featured";
import FlashSales from "@/components/FlashSales/FlashSales";
import Home from "@/components/Home/Home";
import Music from "@/components/Music/Music";
import OurProducts from "@/components/OurProducts/OurProducts";
import SellingProducts from "@/components/SellingProducts/SellingProducts";
import Services from "@/components/Services/Services";

export default function Page() {
  return <>
  <div className="mx-[10px] lg:mx-[135px]">
    <Home />
  <FlashSales />
  <Categories />
  <SellingProducts/>
  <Music/>
  <OurProducts />
  <Featured />
  <Services />
  </div>

  </>
}
