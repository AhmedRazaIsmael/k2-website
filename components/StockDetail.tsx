"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function StockDetail({ car }: any) {
  // const [activeImage, setActiveImage] = useState(
  //   car.images?.[0]?.image_url
  // );

  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const images = car.images || [];

  const specs = [
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
    ["Engine Code", car.engine_code],
    ["Steering", car.steering],
    ["Ext. Color", car.color],
    ["Fuel", car.fuel],
    ["Seat", car.seats],
    ["Doors", car.doors],
    ["M3", car.m3],
  ];

  // 🔥 split into 2 equal columns
  const half = Math.ceil(specs.length / 2);
  const left = specs.slice(0, half);
  const right = specs.slice(half);

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

          {/* 🔥 MAIN SLIDER */}
          <Swiper
            modules={[Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            thumbs={{ swiper: thumbsSwiper }}
            // pagination={{ clickable: true }}
            className="rounded-xl overflow-hidden"
          >
            {images.map((img: any, i: number) => (
              <SwiperSlide key={i}>
                <div
                  className="group relative cursor-zoom-in overflow-hidden"
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={img.image_url}
                    className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🔥 THUMBNAILS (DRAGGABLE) */}
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            pagination={{ clickable: true, el: ".thumb-dots-custom", dynamicBullets: true }}
            className="mt-4 mb-4"
          >
            {images.map((img: any, i: number) => (
              <SwiperSlide key={i}>
                <img
                  src={img.image_url}
                  className={`h-[55px] md:h-[150px] w-full object-cover rounded-md cursor-pointer border ${
                    activeIndex === i
                      ? "border-green-600"
                      : "border-transparent"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="thumb-dots-custom flex justify-center mt-2"></div>

          {/* 🔥 LIGHTBOX */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images.map((img: any) => ({
              src: img.image_url,
            }))}
            index={activeIndex}
          />

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
          <div className="md:grid hidden md:grid-cols-5 text-[16px] mt-2 gap-1">
            {[
              { label: "Mileage", value: car.km },
              { label: "Year/Month", value: car.yearmonth },
              { label: "Engine", value: car.cc },
              { label: "Trans.", value: car.transmission },
              { label: "Fuel", value: car.fuel },
            ].map((item, i) => (
              <div key={i}>
                <div className="bg-[#eeffe7] py-3 px-2 text-center">
                  {item.label}
                </div>
                <div className="bg-white py-3 px-2 text-center">
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* DETAIL TABLE */}
          <div className="grid grid-cols-2 gap-1 mt-4 text-[16px]">

            {/* {[
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
            ))} */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 md:mt-4 text-[16px]">

            {/* LEFT COLUMN */}
            <div className="space-y-[2px]">
              {left.map(([label, value], i) => (
                <div key={i} className="flex">
                  <div className="w-1/2 bg-[#eeffe7] py-3 px-2">
                    {label}
                  </div>
                  <div className="w-1/2 bg-white py-3 px-2">
                    {value || "N/A"}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-[2px]">
              {right.map(([label, value], i) => (
                <div key={i} className="flex">
                  <div className="w-1/2 bg-[#eeffe7] py-3 px-2">
                    {label}
                  </div>
                  <div className="w-1/2 bg-white py-3 px-2">
                    {value || "N/A"}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* FEATURES */}
          <h3 className="mt-6 font-semibold text-[24px]">
            Features
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">
            {car.features?.map((f: string, i: number) => (
              <span
                key={i}
                className="px-5 py-1.5 border border-[#5a9444] rounded-[8px] text-[16px] font-semibold text-[#000] transition hover:bg-[#5a9444] hover:text-[#fff] hover:cursor-pointer"
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