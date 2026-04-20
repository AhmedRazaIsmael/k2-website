"use client";

export default function CarCard({ car }: any) {
  return (
    <div className="bg-white rounded-xl border border-[#DCDCDC] p-2">

      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={car.image}
          className="w-full h-full object-cover rounded-lg"
        />

        {car.reserved && (
        <div className="absolute top-0 left-0 overflow-hidden w-[120px] h-[120px]">
            <span className="absolute top-[20px] left-[-40px] rotate-[-45deg] bg-green-600 text-white text-xs font-semibold px-10 py-1 shadow-md">
            RESERVED
            </span>
        </div>
        )}
      </div>

      {/* Title */}
      <h4 className="mt-3 text-[16px] font-semibold">
        {car.title}
      </h4>

      {/* Location */}
      <p className="text-[13px] text-gray-500 mt-1 pt-1 flex justify-between items-center">
        <span className="flex items-center"><span className="pe-1"><img src="/location.png"/> </span>{car.location}</span> <span className="text-[15px] font-bold">ASK</span>
      </p>

      <hr className="mt-3 pb-3 text-[#DEE2E6]"/>

      {/* Specs */}
      <div className="flex justify-between text-[13px] mt-2 text-gray-600">
        <span className="flex items-center"><span className="pe-1"><img src="/engine.png"/> </span>{car.cc} CC</span>
        <span className="flex items-center"><span className="pe-1"><img src="/mileage.png"/> </span>{car.km} KM</span>
      </div>

      <div className="flex justify-between text-[13px] mt-1 text-gray-600">
        <span className="flex items-center"><span className="pe-1"><img src="/hash.png"/> </span>{car.stock}</span>
        <span className="flex items-center"><span className="pe-1"><img src="/drive.png"/> </span>{car.drive}</span>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center mt-5">
        <button className="w-full border border-green-600 text-green-600 py-2 rounded hover:bg-green-600 hover:text-white transition text-[14px] font-semibold me-2">
            Buy Now
        </button>
        <a href="http://"><img src="/whatsapp.png"/></a>
      </div>
    </div>
  );
}