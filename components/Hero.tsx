"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero({
  brands = [],
  steering = [],
  bodyTypes = [],
  drives = [],
  transmissions = [],
  years = [],
}: any) {

  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState([]);
  const startYears = [...years].sort((a, b) => a - b);
  const endYears = [...years].sort((a, b) => b - a);

  const router = useRouter();

  const [filters, setFilters] = useState<any>({
    make: "",
    model: "",
    steering: "",
    "body-type": "",
    drive: "",
    transmission: "",
    year_from: "",
    year_to: "",
    min_price: "",
    max_price: "",
  });

  const handleBrandChange = async (e: any) => {
  const brandSlug = e.target.value;

  // ✅ update filters
  setFilters((prev: any) => ({
    ...prev,
    make: brandSlug,
    model: "", // reset model
  }));

  setSelectedBrand(brandSlug);

  if (!brandSlug) {
    setModels([]);
    return;
  }

  const selected = brands.find((b: any) => b.slug === brandSlug);
  if (!selected) return;

  const res = await fetch(
    `https://floralwhite-echidna-890292.hostingersite.com/api/filters?models&brand_id=${selected.id}`
  );

  const data = await res.json();
  setModels(data.models || []);
};

const handleChange = (key: string, value: any) => {
  setFilters((prev: any) => ({
    ...prev,
    [key]: value,
  }));
};

  return (
    <section className="relative w-full min-h-[725px] py-10">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-car.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-0 justify-between px-6 md:px-12 pt-30">

        {/* LEFT TEXT */}
        <div className="text-white max-w-xl">
          <h1 className="text-5xl md:text-[98px] font-semibold">
            $250 OFF
          </h1>

          <p className="mt-4 text-[24px] text-gray-300">
            Discount Valid form 1st to 7th January 2026
          </p>

          <p className="mt-3 text-[24px] font-semibold">
            Use Code : K2250
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-[700px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-5 mt-6 md:mt-0">

          <h2 className="text-white text-lg font-semibold mb-4">
            Search Cars
          </h2>

          <div className="space-y-3">

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" value={selectedBrand}
  onChange={handleBrandChange}>
              <option value="">Makers</option>
              {brands.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.name}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" value={filters.model}
  onChange={(e) => handleChange("model", e.target.value)}>
              <option value="">Models</option>
              {models.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.name}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("steering", e.target.value)}>
              <option value="">Steering</option>
              {steering.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("body-type", e.target.value)}>
              <option value="">Body Type</option>
              {bodyTypes.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("drive", e.target.value)}>
              <option value="">Drive</option>
              {drives.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            {/* Row */}
            <div className="flex gap-2">
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("year_from", e.target.value)}>
                <option value="">Start Year</option>
                {startYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("year_to", e.target.value)}>
                <option value="">End Year</option>
                {endYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("price_min", e.target.value)}>
                <option value="">Price From</option>
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="1500">$1,500</option>
                  <option value="2000">$2,000</option>
                  <option value="2500">$2,500</option>
                  <option value="3000">$3,000</option>
                  <option value="3500">$3,500</option>
                  <option value="4000">$4,000</option>
                  <option value="4500">$4,500</option>
                  <option value="5000">$5,000</option>
                  <option value="6000">$6,000</option>
                  <option value="7000">$7,000</option>
                  <option value="8000">$8,000</option>
                  <option value="9000">$9,000</option>
                  <option value="10000">$10,000</option>
                  <option value="15000">$15,000</option>
                  <option value="20000">$20,000</option>
              </select>
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("price_max", e.target.value)}>
                <option value="">Price To</option>
                <option value="20000">$20,000</option>
                <option value="15000">$15,000</option>
                <option value="10000">$10,000</option>
                <option value="9000">$9,000</option>
                <option value="8000">$8,000</option>
                <option value="7000">$7,000</option>
                <option value="6000">$6,000</option>
                <option value="5000">$5,000</option>
                <option value="4500">$4,500</option>
                <option value="4000">$4,000</option>
                <option value="3500">$3,500</option>
                <option value="3000">$3,000</option>
                <option value="2500">$2,500</option>
                  <option value="2000">$2,000</option>
                  <option value="1500">$1,500</option>
                  <option value="1000">$1,000</option>
                <option value="500">$500</option>
              </select>
            </div>

            <select className="w-full p-2 rounded bg-white text-black text-sm cursor-pointer" onChange={(e) => handleChange("transmission", e.target.value)}>
              <option value="">Transmission</option>
              {transmissions.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            {/* Button */}
            <button onClick={() => {
              const urlParams = new URLSearchParams();   // 👈 for browser URL (SEO)
              const apiParams = new URLSearchParams();   // 👈 for backend (Laravel)

              const attributeKeys = ["steering", "body-type", "drive", "transmission"];

              Object.entries(filters).forEach(([key, value]) => {
                if (!value) return;

                // 🔥 ATTRIBUTES
                if (attributeKeys.includes(key)) {
                  // ✅ Clean URL
                  urlParams.append(key, String(value));

                  // ✅ Backend format
                  apiParams.append(`attributes[${key}]`, String(value));
                }

                // 🏷️ BRAND
                else if (key === "make") {
                  urlParams.append("make", String(value));
                  apiParams.append("make", String(value));
                }

                // 🏷️ MODEL
                else if (key === "model") {
                  urlParams.append("model", String(value));
                  apiParams.append("model", String(value));
                }

                // 💰 PRICE
                else if (key === "price_min") {
                  urlParams.append("min_price", String(value));
                  apiParams.append("min_price", String(value));
                } else if (key === "price_max") {
                  urlParams.append("max_price", String(value));
                  apiParams.append("max_price", String(value));
                }

                // 📅 YEAR
                else if (key === "year_from") {
                  urlParams.append("min_year", String(value));
                  apiParams.append("min_year", String(value));
                } else if (key === "year_to") {
                  urlParams.append("max_year", String(value));
                  apiParams.append("max_year", String(value));
                }

                // 🔍 fallback
                else {
                  urlParams.append(key, String(value));
                  apiParams.append(key, String(value));
                }
              });

              // 👉 Only push clean URL
              router.push(`/cars-in-stock?${urlParams.toString()}`);
            }} className="w-full bg-[#498840] hover:bg-green-700 transition py-2 rounded text-white mt-2 cursor-pointer">
              Search
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}