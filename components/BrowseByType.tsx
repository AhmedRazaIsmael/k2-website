"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function BrowseByType({ types = [] }: any) {

    const pathname = usePathname();
    const [swiperKey, setSwiperKey] = useState(0);
    useEffect(() => {
    setSwiperKey(prev => prev + 1);
    }, [pathname]);

  return (
    <section className="pb-10">

      {/* Top Tabs */}
      <div className="bg-[#6fa25a] py-12 flex justify-center gap-4 flex-wrap">
        {["New Arrival Stock", "Clearance Sale", "Recommended Stocks"].map((item) => (
          <button
            key={item}
            className="px-6 md:px-20 py-2 border border-white text-white rounded-md text-sm hover:bg-white hover:text-black transition"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-6 md:px-12 mt-8">

        {/* Title + Arrows */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[28px] font-semibold text-gray-800">
            Browse By Type
          </h2>

          <div className="flex gap-2">
            <button className="prev-btn w-8 h-8 font-black rounded-full bg-black text-white flex items-center justify-center cursor-pointer">
              ←
            </button>
            <button className="next-btn w-8 h-8 font-black rounded-full bg-black text-white flex items-center justify-center cursor-pointer">
              →
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          key={swiperKey}
          modules={[Navigation, Autoplay]}
          observer={true}
          observeParents={true}
          spaceBetween={16}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500, 
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
        }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            320: { slidesPerView: 2.2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {types.map((type: any) => {
            // const Icon = type.icon;

            return (
              <SwiperSlide key={type.id}>
                <Link href={`/cars-in-stock?body-type=${type.slug}`} prefetch>
                <div className="bg-white rounded-xl border border-gray-300 py-3 flex flex-col items-center justify-center hover:shadow- sm transition h-[120px]">
                  {/* <Icon size={100} className="text-gray-700" strokeWidth={1.5} /> */}
                  <img
                    src={type.image}
                    alt={type.name}
                    className=""
                    />

                  <span className="mt-3 text-[15px] text-gray-500 tracking-wide uppercase">
                    {type.name}
                  </span>
                </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </section>
  );
}