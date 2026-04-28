"use client";
import CarCard from "@/components/CarCard";
import RightSidebar from "@/components/RightSidebar";
import Link from "next/link";
import { getCountryCode } from "@/lib/country";
import { useState } from "react";

export default function AvailableStocks({
  cars = [],
  brands = [],
  prices = [],
  countriesByRegion = [],
  locations = [],
}: any) {

    const accordionRegions = ["Gulf Region", "Carribean", "Others"];
    const [openRegions, setOpenRegions] = useState<any>({});
    const toggleRegion = (region: string) => {
    setOpenRegions((prev: any) => ({
        ...prev,
        [region]: !prev[region],
    }));
    };
  return (
    <section className="py-10">
      <div className="w-full mx-auto px-6 md:px-12">

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-5">

          {/* LEFT SIDEBAR */}
          {/* <div className="hidden lg:block bg-white rounded-xl p-4">
            <h3 className="font-semibold mb-3 text-[20px]">Search By Brand</h3>
            <hr />
            <br/>
            <h4 className="font-semibold mb-3 text-[16px]">Browse All Brand</h4>
            <div className="space-y-2 text-sm">
              {brands.map((b: any) => (
                <div key={b.id} className="flex justify-start align-items-center">
                    <span className="pe-2 w-8 pt-0.5"><img src={b.logo_url}/></span>
                  <span className="font-[500]">{b.name}</span>
                  <span className="text-gray-400 ps-2">({b.count})</span>
                </div>
              ))}
            </div>
          </div> */}

          <RightSidebar brands={brands} prices={prices} locations={locations}/>

          {/* CENTER GRID */}

          <div>
            {/* Title */}
            <h2 className="text-[38px] font-bold mb-6 text-center md:text-left uppercase">
            AVAILABLE STOCKS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
                {cars.map((car: any) => (
                    <CarCard key={car.id} car={car} />
                ))}
                
            </div>

            <div className="mt-6">
                
                <Link
                href={`/cars-in-stock`}
                className="block w-full text-center bg-[#347A3B] hover:bg-[#5a9444] text-[#fff] py-3 rounded-lg hover:text-white transition text-sm font-medium transition"
                >
                See More
                </Link>
            </div>

            <h2 className="text-[38px] font-bold py-8 text-center md:text-left uppercase">Clearance Sale</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
                {cars.map((car: any) => (
                    <CarCard key={car.id} car={car} />
                ))}
                
            </div>

            <h2 className="text-[38px] font-bold py-8 text-center md:text-left uppercase">Our Recommended Stocks</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
                {cars.map((car: any) => (
                    <CarCard key={car.id} car={car} />
                ))}
                
            </div>
          </div>

          

          {/* RIGHT SIDEBAR */}

          <div className="hidden lg:block bg-white rounded-xl p-4">

            <h3 className="font-semibold mb-3 text-[20px]">
                Search By Countries
            </h3>

            <hr className="mb-4 h-[2px] bg-[#dee2e6] border-0" />

            {Object.entries(countriesByRegion).map(([region, countries]) => {
            const isAccordion = accordionRegions.includes(region);
            const isOpen = openRegions[region];

            return (
                <div key={region} className="mb-4">

                {/* 🔥 REGION TITLE */}
                <div
                    onClick={() => isAccordion && toggleRegion(region)}
                    className={`flex items-center justify-between font-semibold text-[16px] mb-3 text-gray-700 ${
                    isAccordion ? "cursor-pointer" : ""
                    }`}
                >
                    <span>{region}</span>

                    {/* 🔽 Arrow only for accordion */}
                    {isAccordion && (
                    <span className={`transition ${isOpen ? "rotate-180" : ""}`}>
                        <img src="/arrow.png" alt="" />
                    </span>
                    )}
                </div>

                {/* 🔥 COUNTRIES */}
                {(!isAccordion || isOpen) && (
                    <div className="space-y-2 text-sm">
                    {(countries as any[]).map((c: any) => (
                        <div
                        key={c.slug}
                        className="flex items-center gap-2 pb-1 transition"
                        >
                        <a
                            href={`/cars-in-stock?location=${c.slug}`}
                            className="flex gap-2 items-center"
                        >
                            {/* FLAG */}
                            <img
                            src={
                                c.code
                                ? `https://flagcdn.com/w80/${c.code}.png`
                                : `https://flagcdn.com/w80/${getCountryCode(c.name)}.png`
                            }
                            alt={c.name}
                            className="w-7 h-5 object-fill border rounded-[4px] border-[#dee2e6]"
                            />

                            {/* NAME */}
                            <span className="font-medium text-[#666666] hover:text-green-600">
                            {c.name}
                            </span>
                        </a>
                        </div>
                    ))}
                    </div>
                )}

                <hr className="mt-4 h-[2px] bg-[#dee2e6] border-0" />
                </div>
            );
            })}

            <div>
                <Link href="/cars-in-stock?brand=toyota"><img src="/festival.png" alt="Toyota Festival" className="w-full" /></Link>
            </div>
            </div>
            

        </div>
      </div>
      
    </section>
  );
}