import StockHero from "@/components/StockHero";
import StockFilters from "@/components/StockFilters";
import StockList from "@/components/StockList";
import { getVehicles } from "@/lib/api";
import RightSidebar from "@/components/RightSidebar";
import { getBrands } from "@/lib/api";

export default async function CarsInStockPage({ searchParams }: any) {
  
  const params = await searchParams;  
  // fetch data using filters + pagination + sort
  const { cars, meta } = await getVehicles(params);

  const brands = await getBrands();

  return (
    <div className="mb-10">
      <StockHero />
      <StockFilters />
      {/* 🔥 MAIN LAYOUT */}
      <div className="max-w-full px-6 md:px-12 mx-auto px-4 mt-6 flex gap-6">

        {/* 🟢 LEFT SIDEBAR */}
        <div className="w-[260px] hidden lg:block">
          <RightSidebar brands={brands}/>
        </div>

        {/* 🔵 MAIN CONTENT */}
        <div className="flex-1">
          <StockList cars={cars} meta={meta} />
        </div>

      </div>
    </div>
  );
}