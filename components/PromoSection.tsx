"use client";

import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="py-10">
      <div className="w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:h-[400px]">

          {/* Image */}
          <img
            src="/car1.png"
            alt="car"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-start px-10 text-white pt-10">
            <h3 className="text-lg md:text-[28px] font-medium">
              Looking For ?
            </h3>

            <Link href="/cars-in-stock" className="mt-3 bg-[#347A3B] hover:bg-[#5a9444] transition px-4 py-2 rounded-md text-[18px] w-fit">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:h-[400px]">

          {/* Image */}
          <img
            src="/car2.png"
            alt="car"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-start px-10 text-white pt-10">
            <h3 className="text-lg md:text-[28px] font-medium">
              Check Our Stocks
            </h3>

            <Link href="/cars-in-stock" className="mt-3 bg-[#347A3B] hover:bg-[#5a9444] transition px-4 py-2 rounded-md text-[18px] w-fit">
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}