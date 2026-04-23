"use client";

import { useState } from "react";

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

  // 👇 your handler will also go here
  const handleBrandChange = async (e: any) => {
    const brandSlug = e.target.value;
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

            <select className="w-full p-2 rounded bg-white text-black text-sm" value={selectedBrand}
  onChange={handleBrandChange}>
              <option value="">Makers</option>
              {brands.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.name}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm">
              <option value="">Models</option>
              {models.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.name}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm">
              <option value="">Steering</option>
              {steering.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm">
              <option value="">Body Type</option>
              {bodyTypes.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            <select className="w-full p-2 rounded bg-white text-black text-sm">
              <option value="">Drive</option>
              {drives.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            {/* Row */}
            <div className="flex gap-2">
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm">
                <option value="">Start Year</option>
                {startYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm">
                <option value="">End Year</option>
                {endYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm">
                <option value="">Price From</option>
              </select>
              <select className="w-1/2 p-2 rounded bg-white text-black text-sm">
                <option value="">Price To</option>
              </select>
            </div>

            <select className="w-full p-2 rounded bg-white text-black text-sm">
              <option value="">Transmission</option>
              {transmissions.map((b: any) => (
                    <option key={b.id} value={b.slug}>
                    {b.value}
                    </option>
                ))}
            </select>

            {/* Button */}
            <button className="w-full bg-[#498840] hover:bg-green-700 transition py-2 rounded text-white mt-2">
              Search
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}