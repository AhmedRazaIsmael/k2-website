"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
        fuel: "",
        drive: "",
        transmission: "",
        color: "",
        location: "",
        min_year: "",
        max_year: "",
        min_price: "",
        max_price: "",
        min_mileage: "",
        max_mileage: "",
        min_cc: "",
        max_cc: "",
    });

    const searchParams = useSearchParams();

    useEffect(() => {
    const newFilters: any = {};

    searchParams.forEach((value, key) => {
        newFilters[key] = value;
    });

    setFilters((prev: any) => ({
        ...prev,
        ...newFilters,
    }));

    // 🔥 also sync brand dropdown
    if (newFilters.make) {
        setSelectedBrand(newFilters.make);
    }
    }, [searchParams]);

    useEffect(() => {
    const loadModels = async () => {
        if (!filters.make) return;

        const selected = brands.find((b: any) => b.slug === filters.make);
        if (!selected) return;

        const res = await fetch(
        `https://floralwhite-echidna-890292.hostingersite.com/api/filters?models&brand_id=${selected.id}`
        );

        const data = await res.json();
        setModels(data.models || []);
    };

    loadModels();
    }, [filters.make]);
    
    // const handleBrandChange = async (e: any) => {
    // const brandSlug = e.target.value;

    // // ✅ update filters
    // setFilters((prev: any) => ({
    //     ...prev,
    //     make: brandSlug,
    //     model: "", // reset model
    // }));

    // setSelectedBrand(brandSlug);

    // if (!brandSlug) {
    //     setModels([]);
    //     return;
    // }

    // const selected = brands.find((b: any) => b.slug === brandSlug);
    // if (!selected) return;

    // const res = await fetch(
    //     `https://floralwhite-echidna-890292.hostingersite.com/api/filters?models&brand_id=${selected.id}`
    // );

    // const data = await res.json();
    // setModels(data.models || []);
    // };

    const handleBrandChange = async (e: any) => {
    const brandSlug = e.target.value;

    setFilters((prev: any) => ({
        ...prev,
        make: brandSlug,
        model: "",
    }));

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

          {/* Row 1 */}
          <select name="make" className="filter" value={filters.make}
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

          <select name="steering" className="filter" value={filters.steering}
  onChange={(e) => handleChange("steering", e.target.value)}>
            <option value="">Steering</option>
            {steering.map((s: any) => (
                <option key={s.id} value={s.slug}>
                {s.value}
                </option>
            ))}
          </select>

          <select name="body-type" className="filter" value={filters["body-type"]}
  onChange={(e) => handleChange("body-type", e.target.value)}>
            <option value="">Body Type</option>
            {bodyTypes.map((b: any) => (
                <option key={b.id} value={b.slug}>
                {b.value}
                </option>
            ))}
          </select>

          <select name="fuel" className="filter" value={filters.fuel}
  onChange={(e) => handleChange("fuel", e.target.value)}>
            <option value="">Fuel</option>
            {fuel.map((fuel: any) => (
                <option key={fuel.id} value={fuel.slug}>
                {fuel.value}
                </option>
            ))}
          </select>

          <select name="drive" className="filter" value={filters.drive}
  onChange={(e) => handleChange("drive", e.target.value)}>
            <option value="">Drive</option>
            {drives.map((d: any) => (
                <option key={d.id} value={d.slug}>
                {d.value}
                </option>
            ))}
          </select>

          {/* Row 2 */}
          <select name="transmission" className="filter" value={filters.transmission}
  onChange={(e) => handleChange("transmission", e.target.value)}>
            <option value="">Transmission</option>
            {transmissions.map((t: any) => (
                <option key={t.id} value={t.slug}>
                {t.value}
                </option>
            ))}
          </select>

          <select name="color" className="filter" value={filters.color}
  onChange={(e) => handleChange("color", e.target.value)}>
            <option value="">Color</option>
            {colors.map((color: any) => (
                <option key={color.id} value={color.slug}>
                {color.value}
                </option>
            ))}
          </select>

          <select name="location" className="filter" value={filters.location}
  onChange={(e) => handleChange("location", e.target.value)}>
            <option value="">Location</option>
            {locations.map((location: any) => (
                <option key={location.id} value={location.slug}>
                {location.value}
                </option>
            ))}
          </select>

          <select name="min_year" className="filter" value={filters.min_year}
  onChange={(e) => handleChange("min_year", e.target.value)}>
            <option value="">Year From</option>
            {startYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
            ))}
          </select>

          <select name="max_year" className="filter" value={filters.max_year}
  onChange={(e) => handleChange("max_year", e.target.value)}>
            <option value="">Year To</option>
            {endYears.map((year: number) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
            ))}
          </select>

          <select name="min_price" className="filter" value={filters.min_price}
  onChange={(e) => handleChange("min_price", e.target.value)}>
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
          <select name="max_price" className="filter" value={filters.max_price}
  onChange={(e) => handleChange("max_price", e.target.value)}>
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

          <select name="min_mileage" className="filter" value={filters.min_mileage}
  onChange={(e) => handleChange("min_mileage", e.target.value)}>
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

          <select name="max_mileage" className="filter" value={filters.max_mileage}
  onChange={(e) => handleChange("max_mileage", e.target.value)}>
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

          <select name="min_cc" className="filter" value={filters.min_cc}
  onChange={(e) => handleChange("min_cc", e.target.value)}>
            <option value="">CC Min</option>
            <option value="660">660 cc</option>
            <option value="1000">1000 cc</option>
            <option value="1500">1500 cc</option>
            <option value="1800">1800 cc</option>
            <option value="2000">2000 cc</option>
            <option value="2500">2500 cc</option>
            <option value="4000">4000 cc</option>
          </select>

          <select name="max_cc" className="filter" value={filters.max_cc}
  onChange={(e) => handleChange("max_cc", e.target.value)}>
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
            className="px-7 md:px-25 py-2 rounded-md border border-white text-white text-sm hover:bg-white hover:text-black transition cursor-pointer"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-7 md:px-25 py-2 rounded-md bg-black text-white text-sm hover:bg-gray-800 transition cursor-pointer"
          >
            Search
          </button>

        </div>

      </form>

    </section>
  );
}