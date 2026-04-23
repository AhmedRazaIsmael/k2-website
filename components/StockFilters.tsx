"use client";

import { useRouter } from "next/navigation";

export default function StockFilters() {
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

  return (
    <section className="bg-[#6fa25a] max-w-full mx-6 md:mx-12 my-8 rounded-[10px] p-4 md:p-6">

      <form onSubmit={handleSubmit}>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

          {/* Row 1 */}
          <select name="maker" className="filter">
            <option value="">Maker</option>
          </select>

          <select name="model" className="filter">
            <option value="">Model</option>
          </select>

          <select name="steering" className="filter">
            <option value="">Steering</option>
          </select>

          <select name="body_type" className="filter">
            <option value="">Body Type</option>
          </select>

          <select name="fuel" className="filter">
            <option value="">Fuel</option>
          </select>

          <select name="drive" className="filter">
            <option value="">Drive</option>
          </select>

          {/* Row 2 */}
          <select name="transmission" className="filter">
            <option value="">Transmission</option>
          </select>

          <select name="color" className="filter">
            <option value="">Color</option>
          </select>

          <select name="location" className="filter">
            <option value="">Location</option>
          </select>

          <select name="year_from" className="filter">
            <option value="">Year From</option>
          </select>

          <select name="year_to" className="filter">
            <option value="">Year To</option>
          </select>

          <select name="price_min" className="filter">
            <option value="">Price Min</option>
          </select>

          {/* Row 3 */}
          <select name="price_max" className="filter">
            <option value="">Price Max</option>
          </select>

          <select name="mileage_min" className="filter">
            <option value="">Mileage Min</option>
          </select>

          <select name="mileage_max" className="filter">
            <option value="">Mileage Max</option>
          </select>

          <select name="cc_min" className="filter">
            <option value="">CC Min</option>
          </select>

          <select name="cc_max" className="filter">
            <option value="">CC Max</option>
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