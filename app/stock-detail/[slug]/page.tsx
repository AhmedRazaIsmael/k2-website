// app/stock-detail/[slug]/page.tsx
import { Metadata } from "next";
import { getVehicleBySlug, getRelatedVehicles } from "@/lib/api";
import StockDetail from "@/components/StockDetail";
import QuoteForm from "@/components/QuoteForm";
import { getVehicles } from "@/lib/api";
import RelatedVehicles from "@/components/RelatedVehicles";

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {

  const { slug } = await params;

  const car = await getVehicleBySlug(slug);

  return {
    title: `${car.title}`,

    description:
      `${car.title} available for export from ${car.location}. 
      View specs, price, mileage, features and inquiry details.`,

    openGraph: {
      title: `${car.title} | The K2`,

      description:
        `${car.title} available for export from ${car.location}.`,

      images: [
        {
          url:
            car.images?.[0]?.image_url ||
            "/placeholder.jpg",
        },
      ],
    },
  };
}

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