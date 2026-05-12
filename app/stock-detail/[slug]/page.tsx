// app/stock-detail/[slug]/page.tsx

import { getVehicleBySlug, getRelatedVehicles } from "@/lib/api";
import StockDetail from "@/components/StockDetail";
import QuoteForm from "@/components/QuoteForm";
import { getVehicles } from "@/lib/api";
import RelatedVehicles from "@/components/RelatedVehicles";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const car = await getVehicleBySlug(slug);
  const formattedCars = await getVehicles();
  const relatedCars = await getRelatedVehicles(slug);

  return (
      <div className="my-10">
        <div className="h-28 md:h-22 bg-[#000]"></div>
        <StockDetail car={car} />
        <QuoteForm vehicleId={car.id}/>
        <RelatedVehicles cars={relatedCars}/>
      </div>
    );
}