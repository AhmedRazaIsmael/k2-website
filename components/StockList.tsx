"use client";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import VerticalCard from "@/components/VerticalCard"

export default function StockList({ cars = [], meta = {} }: any) {
    console.log(meta);
  return (
    <div className="w-full">

        <h2 className="text-[28px] text-center font-bold text-[#2c2c2c]">
          STOCK LIST
        </h2>
      {/* 🔹 HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">

       <p className="text-[16px] text-[#212529]">
        Showing{" "}
        {(meta.current_page - 1) * meta.per_page + 1}
        {" "}to{" "}
        {Math.min(meta.current_page * meta.per_page, meta.total)}
        {" "}of {meta.total} results
        </p>

        <div className="flex items-center gap-4">

          {/* Pagination (top) */}
          <Pagination meta={meta} />

          {/* Sort */}
          <select
            name="sort"
            onChange={(e) => {
                const value = e.target.value;

                const params = new URLSearchParams(window.location.search);

                if (value) {
                params.set("sort", value);
                } else {
                params.delete("sort");
                }

                window.location.href = `/cars-in-stock?${params.toString()}`;
            }}
            className="h-[36px] px-3 text-[13px] border rounded-md bg-white"
            >
            <option value="">Sort By</option>
            <option value="latest">Latest</option>
            <option value="price_low">Price Low → High</option>
            <option value="price_high">Price High → Low</option>
            </select>

        </div>
      </div>

      {/* 🔹 CAR LIST */}
      <div className="space-y-4">

        {cars.map((car: any) => (
          <VerticalCard key={car.id} car={car} />
        ))}

      </div>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        {/* 🔹 Pagination bottom */}
        <p className="text-[16px] text-[#212529]">
            Showing{" "}
            {(meta.current_page - 1) * meta.per_page + 1}
            {" "}to{" "}
            {Math.min(meta.current_page * meta.per_page, meta.total)}
            {" "}of {meta.total} results
        </p>

        <div className="mt-6">
            <Pagination meta={meta} />
        </div>

        </div>
    </div>

  );
}