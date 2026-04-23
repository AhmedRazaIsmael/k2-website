"use client";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import VerticalCard from "@/components/VerticalCard"

export default function StockList({ cars = [], meta = {} }: any) {
  return (
    <div className="w-full">

        <h2 className="text-[28px] text-center font-bold text-[#2c2c2c]">
          STOCK LIST
        </h2>
      {/* 🔹 HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">

       <p className="text-[13px] text-gray-500">
        Showing {meta.total} results
        </p>

        <div className="flex items-center gap-4">

          {/* Pagination (top) */}
          <Pagination meta={meta} />

          {/* Sort */}
          <select className="h-[36px] px-3 text-[13px] border rounded-md bg-white">
            <option>Sort By</option>
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

      {/* 🔹 Pagination bottom */}
      <div className="mt-6">
        <Pagination meta={meta} />
      </div>

    </div>
  );
}