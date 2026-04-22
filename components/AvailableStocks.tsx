"use client";
import CarCard from "@/components/CarCard";
import RightSidebar from "@/components/RightSidebar";
import Link from "next/link";

export default function AvailableStocks({
  cars = [],
  brands = [],
  countries = [],
}: any) {
  return (
    <section className="py-10">
      <div className="w-full mx-auto px-6 md:px-12">

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-4">

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

          <RightSidebar brands={brands} />

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
                className="block w-full text-center bg-[#6fa25a] text-[#fff] py-3 rounded-lg hover:bg-green-700 hover:text-white transition text-sm font-medium transition"
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
          <div className="hidden lg:block bg-white rounded-xl p-4 ">
            <h3 className="font-semibold mb-3 text-[20px]">Search By Countries</h3>
            <hr />
            <br/>
            <div className="space-y-2 text-sm">
              {countries.map((c: any) => (
                <div key={c.id} className="font-[500]">{c.name}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}