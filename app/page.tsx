import type { Metadata } from "next";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrowseByType from "@/components/BrowseByType";
import PromoSection from "@/components/PromoSection";
import AvailableStocks from "@/components/AvailableStocks";
import { countriesByRegion } from "@/data/mockData";
import { getBrands, getVehicles, getBodyTypes, getAllFilters, getYears, getPrices } from "@/lib/api";

// export const dynamic = "force-dynamic";
export default async function HomePage() {

  const [brands, formattedCars, bodyTypes, filters, years, prices] = await Promise.all([
    getBrands(),
    getVehicles(),
    getBodyTypes(),
    getAllFilters(),
    getYears(),
    getPrices(),
  ]);

  // const filters = await getAllFilters();

  return (
    <div className="relative mb-10">

      {/* Hero (background) */}
      <Hero {...filters} years={years}/>

      <BrowseByType types={bodyTypes}/>

      <PromoSection />
      <AvailableStocks cars={formattedCars.cars} {...filters}
      countriesByRegion={countriesByRegion} prices={prices}/>

    </div>
  );
}