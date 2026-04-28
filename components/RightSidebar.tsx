"use client";
import { getCountryCode } from "@/lib/country";
import Link from "next/link";

export default function RightSidebar({ brands = [], prices = [], locations = [] }: any) {
  return (
    <div className="hidden lg:block bg-white rounded-xl p-4">

      <h3 className="font-semibold mb-3 text-[20px]">
        Search By Brand
      </h3>

      <hr className="my-4 h-[2px] bg-[#dee2e6] border-0" />

      <h4 className="font-semibold mb-3 text-[16px]">
        Browse All Brand
      </h4>

      <div className="space-y-2 text-sm">
        {brands.map((brand: any) => (
          <div
            key={brand.id}
            className="flex items-center gap-2 transition"
          >
            <Link href={`/cars-in-stock?brand=${brand.slug}`} className="flex gap-1 items-center">
            {/* Logo */}
            <img
              src={brand.logo_url}
              alt={brand.name}
              className="w-6 h-6 object-contain"
            />

            {/* Name */}
            <span className="font-medium text-[#666666] hover:text-green-600">{brand.name}</span>

            {/* Count (optional if exists) */}
              <span className="text-gray-400 text-xs">
                ({brand.count ?? 0})
              </span>
            </Link>
          </div>
        ))}
      </div>

    {/* Search By Price Filter */}
    <hr className="my-5 h-[2px] bg-[#dee2e6] border-0" />

      <h3 className="font-semibold mb-3 text-[20px]">
        Search By Price
      </h3>

      <div className="space-y-2 text-sm">
        {prices.map((price: any) => (
          <div
            key={`${price.min}-${price.max}`}
            className="flex items-center gap-2 pb-1 transition"
          >
            <Link href={`/cars-in-stock?min_price=${price.min}&max_price=${price.max}`} className="flex gap-2 items-center">
            {/* Logo */}
            <img
              src="/price.png"
              alt={price.label}
              className="w-5 h-5 object-contain"
            />

            {/* Name */}
            <span className="font-medium text-[#666666] hover:text-green-600">{price.label}</span>
            </Link>
          </div>
        ))}
      </div>

      <hr className="my-5 h-[2px] bg-[#dee2e6] border-0" />

      <h3 className="font-semibold mb-3 text-[20px]">
        Search By Handed
      </h3>

      <div className="space-y-2 text-sm">
          <div
            className="flex items-center gap-2 pb-1 transition"
          >
            <Link href="/cars-in-stock?steering=rhd" className="flex gap-2 items-center">
            {/* Logo */}
            <img
              src="/handed.png"
              alt="Handed"
              className="w-6 h-6 object-contain"
            />

            {/* Name */}
            <span className="font-medium text-[#666666] hover:text-green-600">Right Hand Drive</span>
            </Link>
          </div>
           <div
            className="flex items-center gap-2 pb-1 transition"
          >
            <Link href="/cars-in-stock?steering=lhd" className="flex gap-2 items-center">
            {/* Logo */}
            <img
              src="/handed.png"
              alt="Handed"
              className="w-6 h-6 object-contain"
            />

            {/* Name */}
            <span className="font-medium text-[#666666] hover:text-green-600">Left Hand Drive</span>
            </Link>
          </div>
      </div>

      <hr className="my-5 h-[2px] bg-[#dee2e6] border-0" />

      <h3 className="font-semibold mb-3 text-[20px]">
        Inventory Location
      </h3>

      <div className="space-y-2 text-sm">
        {locations.map((location: any) => (
          <div
            key={`${location.id}`}
            className="flex items-center gap-2 pb-1 transition"
          >
            <Link href={`/cars-in-stock?location=${location.slug}`} className="flex gap-2 items-center">
            {/* Logo */}
            <img
              src={`https://flagcdn.com/w80/${getCountryCode(location.value)}.png`}
              alt={location.value}
              className="w-7 h-5 object-fill border rounded-[4px] border-[#dee2e6]"
            />

            {/* Name */}
            <span className="font-medium text-[#666666] hover:text-green-600">{location.value}</span>
            <span className="text-gray-400 text-xs">
                ({location.count ?? 0})
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link href="/auto-parts"><img src="/sidebar-autoparts.png" alt="" className="w-full"/></Link>
      </div>

    </div>
  );
}