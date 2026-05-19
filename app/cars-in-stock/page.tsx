import type { Metadata } from "next";

import StockHero from "@/components/StockHero";
import StockFilters from "@/components/StockFilters";
import StockList from "@/components/StockList";
import { getVehicles, getBrands, getPrices, getAllFilters, getYears } from "@/lib/api";
import RightSidebar from "@/components/RightSidebar";

// export async function generateMetadata({
//   searchParams,
// }: any): Promise<Metadata> {

//   const params = await searchParams;

//   const make = params.make;
//   const model = params.model;
//   const bodyType = params["body-type"];
//   const location = params.location;

//   // 🔥 FORMAT FUNCTION
//   const formatSlug = (value: string) =>
//     value
//       .replace(/-/g, " ")
//       .replace(/\b\w/g, (c) => c.toUpperCase());

//   // 🔥 TITLE PARTS
//   const titleParts = [];

//   // LOCATION FIRST
//   if (location) {
//     titleParts.push(`${formatSlug(location)} Stocks`);
//   }

//   if (make) {
//     titleParts.push(formatSlug(make));
//   }

//   if (model) {
//     titleParts.push(formatSlug(model));
//   }

//   if (bodyType) {
//     titleParts.push(formatSlug(bodyType));
//   }

//   // DEFAULT
//   let title =
//     titleParts.length > 0
//       ? titleParts.join(" | ")
//       : "Cars In Stock";

//   // FINAL TITLE
//   title += " | Japanese Used Cars";

//   // 🔥 DESCRIPTION
//   const description =
//     `Browse ${
//       make ? formatSlug(make) : "Japanese used"
//     } vehicles ${
//       location
//         ? `available in ${formatSlug(location)}`
//         : ""
//     }. Find quality export cars with competitive prices from The K2.`;

//   return {
//     title,

//     description,

//     openGraph: {
//       title,
//       description,
//     },

//     robots: {
//       index: true,
//       follow: true,
//     },
//   };
// }

export async function generateMetadata({
  searchParams,
}: any): Promise<Metadata> {

  const params = await searchParams;

  // 🔥 FORMAT SLUG
  const formatSlug = (value: string) =>
    value
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // 🔥 ALL FILTERS
  const filters = [
    params.location && `${formatSlug(params.location)} Stocks`,

    (params.make || params.brand) &&
  `${formatSlug(params.make || params.brand)} Stocks`,

    params.model && `${formatSlug(params.model)} Stocks`,

    params["body-type"] &&
      `${formatSlug(params["body-type"])} Stocks`,

    params.color &&
      `${formatSlug(params.color)} Stocks`,
  ].filter(Boolean);

  // 🔥 TITLE
  const title =
    filters.length > 0
      ? `${filters.join(" | ")} | Japanese Used Cars`
      : "Cars In Stock | Japanese Used Cars";

  // 🔥 DESCRIPTION
  const description =
    `Browse ${
      filters.length > 0
        ? filters.join(", ")
        : "Japanese used vehicles"
    } available for export worldwide from The K2.`;

  return {
    title,

    description,

    openGraph: {
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function CarsInStockPage({ searchParams }: any) {

  const params = await searchParams;  
  // fetch data using filters + pagination + sort
  const { cars, meta } = await getVehicles(params);

  const brands = await getBrands();
  const prices = await getPrices();
  const filters = await getAllFilters();
  const years = await getYears();

  return (
    <div className="mb-10">
      <StockHero />
      <StockFilters {...filters} years={years}/>
      {/* 🔥 MAIN LAYOUT */}
      <div className="max-w-full px-6 md:px-12 mx-auto px-4 mt-6 flex gap-6">

        {/* 🟢 LEFT SIDEBAR */}
        <div className="w-[260px] hidden lg:block">
          <RightSidebar {...filters} prices={prices}/>
        </div>

        {/* 🔵 MAIN CONTENT */}
        <div className="flex-1">
          <StockList cars={cars} meta={meta} />
        </div>

      </div>
    </div>
  );
}