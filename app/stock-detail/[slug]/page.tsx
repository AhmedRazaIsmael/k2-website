// app/stock-detail/[slug]/page.tsx

import { getVehicleBySlug } from "@/lib/api";
import StockDetail from "@/components/StockDetail";

export default async function Page({ params }: any) {
  const { slug } = await params;

  const car = await getVehicleBySlug(slug);

  return (
      <div className="my-10">
        <div className="h-21 bg-[#000]"></div>
        <StockDetail car={car} />
      </div>
    );
}