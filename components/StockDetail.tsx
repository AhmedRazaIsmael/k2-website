"use client";

import { useState } from "react";
import Link from "next/link";

export default function StockDetail({ car }: any) {
  const [activeImage, setActiveImage] = useState(
    car.images?.[0]?.image_url
  );

  return (
    <section className="px-6 md:px-12 py-8">

      {/* BREADCRUMB */}
      {/* <div className="flex text-[13px] text-gray-500 mb-4 bg-[#F4F4F4]">
        <Link
                href={`/`}
                className=""
                ><img src="/icons/home-icon.webp" alt={car.title}/></Link> / <Link
                href={`/cars-in-stock`}
                className=""
                > Cars</Link> / {car.location} Stock / {car.brand?.name} /{" "}
        <span className="text-green-600">{car.title}</span>
      </div> */}
      <nav className="inline-flex mb-4 bg-[#F4F4F4] px-4 py-3 rounded-lg">
        <ol className="flex flex-wrap items-center gap-2 text-[14px] font-medium text-gray-500">

          {/* HOME */}
          <li className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <img src="/icons/home-icon.webp" alt="Home" className="w-4 h-4" />
            </Link>
            <span>|</span>
          </li>

          {/* CARS */}
          <li className="flex items-center gap-2">
            <Link href="/cars-in-stock" className="hover:text-green-600">
              Cars
            </Link>
            <span>|</span>
          </li>

          {/* LOCATION */}
          <li className="flex items-center gap-2">
            <Link
              href={`/cars-in-stock?location=${car.location?.toLowerCase()}`}
              className="hover:text-green-600"
            >
              {car.location} Stock
            </Link>
            <span>|</span>
          </li>

          {/* BRAND */}
          <li className="flex items-center gap-2">
            <Link
              href={`/cars-in-stock?make=${car.brand?.slug}`}
              className="hover:text-green-600"
            >
              {car.brand?.name}
            </Link>
            <span>|</span>
          </li>

          {/* CURRENT PAGE (NO LINK) */}
          <li className="text-green-600 font-medium">
            {car.title}
          </li>

        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT SIDE - IMAGES */}
        <div>
          {/* MAIN IMAGE */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={activeImage}
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {car.images?.map((img: any, i: number) => (
              <img
                key={i}
                src={img.image_url}
                onClick={() => setActiveImage(img.image_url)}
                className={`w-[90px] h-[70px] object-cover rounded-md cursor-pointer border ${
                  activeImage === img.image_url
                    ? "border-green-600"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* TITLE */}
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[32px] font-semibold text-[#212529]">
                {car.title}
              </h1>

              <p className="text-[16px] text-gray-500 mt-1">
                {car.chassis || "N/A"} <span className="text-[#5A9444]">({car.fuel})</span>
              </p>

              <p className="text-[16px] text-[#666666]">
                FOB Price
              </p>
            </div>

            <p className="text-green-600 font-semibold text-[20px]">
              {car.price}
            </p>
          </div>

          {/* SPECS */}
          <div className="flex items-center justify-between mt-6">
          <h3 className="font-semibold text-[24px]">SPECS</h3>
          <span className="flex items-center gap-1 text-[16px]"><img src="/mark.png" alt="" />{car.location}</span>
          </div>
          {/* TOP SPECS */}
          <div className="grid grid-cols-5 text-[12px] mt-2">
            {[
              { label: "Mileage", value: car.km },
              { label: "Year/Month", value: car.yearmonth },
              { label: "Engine", value: car.cc },
              { label: "Trans.", value: car.transmission },
              { label: "Fuel", value: car.fuel },
            ].map((item, i) => (
              <div key={i}>
                <div className="bg-[#eeffe7] p-2 text-center font-medium">
                  {item.label}
                </div>
                <div className="bg-white p-2 text-center">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* DETAIL TABLE */}
          <div className="grid grid-cols-2 gap-1 mt-4 text-[12px]">

            {[
              ["Ref. No", car.stock],
              ["Chassis No.", car.chassis],
              ["Model Code", car.model_code],
              ["Engine Size", car.cc],
              ["Location", car.location],
              ["Version/Class", car.version],
              ["Drive", car.drive],
              ["Transmission", car.transmission],
              ["Inventory", car.inventory],

              ["Mileage", car.km],
              ["Engine Code", "N/A"],
              ["Steering", car.steering],
              ["Ext. Color", car.color],
              ["Fuel", car.fuel],
              ["Seat", car.seats],
              ["Doors", car.doors],
              ["M3", car.m3],
            ].map(([label, value], i) => (
              <div key={i} className="flex">
                <div className="w-1/2 bg-[#eeffe7] p-2">
                  {label}
                </div>
                <div className="w-1/2 bg-white p-2">
                  {value || "N/A"}
                </div>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <h3 className="mt-6 font-semibold text-[16px]">
            Features
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">
            {car.features?.map((f: string, i: number) => (
              <span
                key={i}
                className="px-5 py-1.5 border border-[#5a9444] rounded-[8px] text-[16px] font-semibold text-[#000]"
              >
                {f}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}