import Categories from "@/components/Categories/Categories";
import Featured from "@/components/Featured/Featured";
import FlashSales from "@/components/FlashSales/FlashSales";
import Home from "@/components/Home/Home";
import Music from "@/components/Music/Music";
import SellingProducts from "@/components/SellingProducts/SellingProducts";
import Services from "@/components/Services/Services";
import ExploreProducts from "@/components/ExplorerProducts/ExplorerProducts";

export default function Page() {
  return <>
  <div className="mx-[10px] md:mx-[136px]">
    <Home />
  <FlashSales />
  <Categories />
  <SellingProducts/>
  <Music/>
  <ExploreProducts />
  <Featured />
  <Services />
  </div>

  </>
}
