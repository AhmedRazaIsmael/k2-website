"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StockFilters({
  brands = [],
  steering = [],
  bodyTypes = [],
  drives = [],
  transmissions = [],
  years = [],
  colors = [],
  fuel = [],
  locations = [],
}: any) {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value) params.append(key, value.toString());
    });

    router.push(`/cars-in-stock?${params.toString()}`);
  };

    const handleReset = () => {
        router.push("/cars-in-stock");
    };

    const [selectedBrand, setSelectedBrand] = useState("");
    const [models, setModels] = useState([]);
    const startYears = [...years].sort((a, b) => a - b);
    const endYears = [...years].sort((a, b) => b - a);

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
    <section className="bg-[#6fa25a] max-w-full mx-6 md:mx-12 my-8 rounded-[10px] p-4 md:p-6">

      <form onSubmit={handleSubmit}>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

          {/* Row 1 */}
          <select name="make" className="filter" value={selectedBrand}
  onChange={handleBrandChange}>
            <option value="">Maker</option>
            {brands.map((b: any) => (
                <option key={b.id} value={b.slug}>
                {b.name}
                </option>
            ))}
          </select>

          <select name="model" className="filter" value={filters.model}
  onChange={(e) => handleChange("model", e.target.value)}>
            <option value="">Model</option>
            {models.map((m: any) => (
                <option key={m.id} value={m.slug}>
                {m.name}
                </option>
            ))}
          </select>

          <select name="steering" className="filter">
            <option value="">Steering</option>
            {steering.map((s: any) => (
                <option key={s.id} value={s.slug}>
                {s.value}
                </option>
            ))}
          </select>

          <select name="body-type" className="filter">
            <option value="">Body Type</option>
            {bodyTypes.map((b: any) => (
                <option key={b.id} value={b.slug}>
                {b.value}
                </option>
            ))}
          </select>

          <select name="fuel" className="filter">
            <option value="">Fuel</option>
            {fuel.map((fuel: any) => (
                <option key={fuel.id} value={fuel.slug}>
                {fuel.value}
                </option>
            ))}
          </select>

          <select name="drive" className="filter">
            <option value="">Drive</option>
            {drives.map((d: any) => (
                <option key={d.id} value={d.slug}>
                {d.value}
                </option>
            ))}
          </select>

          {/* Row 2 */}
          <select name="transmission" className="filter">
            <option value="">Transmission</option>
            {transmissions.map((t: any) => (
                <option key={t.id} value={t.slug}>
                {t.value}
                </option>
            ))}
          </select>

          <select name="color" className="filter">
            <option value="">Color</option>
            {colors.map((color: any) => (
                <option key={color.id} value={color.slug}>
                {color.value}
                </option>
            ))}
          </select>

          <select name="location" className="filter">
            <option value="">Location</option>
            {locations.map((location: any) => (
                <option key={location.id} value={location.slug}>
                {location.value}
                </option>
            ))}
          </select>

          <select name="min_year" className="filter">
            <option value="">Year From</option>
            {startYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
            ))}
          </select>

          <select name="max_year" className="filter">
            <option value="">Year To</option>
            {endYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
            ))}
          </select>

          <select name="min_price" className="filter">
            <option value="">Price Min</option>
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

          {/* Row 3 */}
          <select name="max_price" className="filter">
            <option value="">Price Max</option>
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

          <select name="min_mileage" className="filter">
            <option value="">Mileage Min</option>
            <option value="10000">10,000 km</option>
            <option value="20000">20,000 km</option>
            <option value="30000">30,000 km</option>
            <option value="40000">40,000 km</option>
            <option value="50000">50,000 km</option>
            <option value="60000">60,000 km</option>
            <option value="70000">70,000 km</option>
            <option value="80000">80,000 km</option>
            <option value="90000">90,000 km</option>
            <option value="100000">100,000 km</option>
            <option value="150000">150,000 km</option>
            <option value="200000">200,000 km</option>
            <option value="300000">300,000 km</option>
          </select>

          <select name="max_mileage" className="filter">
            <option value="">Mileage Max</option>
            <option value="300000">300,000 km</option>
            <option value="200000">200,000 km</option>
            <option value="150000">150,000 km</option>
            <option value="100000">100,000 km</option>
            <option value="90000">90,000 km</option>
            <option value="80000">80,000 km</option>
            <option value="70000">70,000 km</option>
            <option value="60000">60,000 km</option>
            <option value="50000">50,000 km</option>
            <option value="40000">40,000 km</option>
            <option value="30000">30,000 km</option>
            <option value="20000">20,000 km</option>
            <option value="10000">10,000 km</option>
          </select>

          <select name="min_cc" className="filter">
            <option value="">CC Min</option>
            <option value="660">660 cc</option>
            <option value="1000">1000 cc</option>
            <option value="1500">1500 cc</option>
            <option value="1800">1800 cc</option>
            <option value="2000">2000 cc</option>
            <option value="2500">2500 cc</option>
            <option value="4000">4000 cc</option>
          </select>

          <select name="max_cc" className="filter">
            <option value="">CC Max</option>
            <option value="4000">4000 cc</option>
            <option value="2500">2500 cc</option>
            <option value="2000">2000 cc</option>
            <option value="1800">1800 cc</option>
            <option value="1500">1500 cc</option>
            <option value="1000">1000 cc</option>
            <option value="660">660 cc</option>
          </select>

          {/* Spacer */}
          <div className="hidden lg:block"></div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-6 mt-6">

          <button
            type="button"
            onClick={handleReset}
            className="px-7 md:px-25 py-2 rounded-md border border-white text-white text-sm hover:bg-white hover:text-black transition"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-7 md:px-25 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Search
          </button>

        </div>

      </form>

    </section>
  );
}