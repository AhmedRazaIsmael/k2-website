"use client";
import Link from "next/link";

export default function CarCard({ car }: any) {
  return (
    <div className="bg-white rounded-xl border border-[#DCDCDC] p-2">

      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
        <Link href={`/stock-detail/${car.slug}`}><img
          src={car.image}
          className="w-full h-full object-cover rounded-lg"
        /></Link>

        {car.status !== "available" && (
        <div className="absolute top-0 left-0 overflow-hidden w-[120px] h-[120px]">

            <span
            className={`absolute top-[22px] left-[-44px] w-[150px] text-center rotate-[-45deg] text-white text-xs font-semibold py-1 shadow-md
            ${
                car.status === "reserved"
                ? "bg-green-600"
                : car.status === "sold"
                ? "bg-red-600"
                : ""
            }`}
            >
            {car.status.toUpperCase()}
            </span>

        </div>
        )}
        {/* {car.reserved && (
        <div className="absolute top-0 left-0 overflow-hidden w-[120px] h-[120px]">
            <span className="absolute top-[20px] left-[-40px] rotate-[-45deg] bg-green-600 text-white text-xs font-semibold px-10 py-1 shadow-md">
            RESERVED
            </span>
        </div>
        )}

        {car.sold && (
        <div className="absolute top-0 left-0 overflow-hidden w-[120px] h-[120px]">
            <span className="absolute top-[20px] left-[-40px] rotate-[-45deg] bg-green-600 text-white text-xs font-semibold px-10 py-1 shadow-md">
            SOLD
            </span>
        </div>
        )} */}
      </div>

      {/* Title */}
      
      <h4 className="mt-3 text-[16px] font-semibold line-clamp-2 min-h-[48px] ">
       <Link href={`/stock-detail/${car.slug}`} className="inline"> {car.title}</Link>
      </h4>
      
      {/* Location */}
      <p className="text-[13px] text-gray-500 mt-1 pt-1 flex justify-between items-center">
        <span className="flex items-center"><span className="pe-1"><img src="/location.png"/> </span>{car.location}</span> <span className="text-[15px] font-[700] text-[#000]">{car.price === "Ask For Price" ? "ASK" : car.price}</span>
      </p>

      <hr className="mt-3 pb-3 text-[#DEE2E6]"/>

      {/* Specs */}
      <div className="flex justify-between text-[13px] mt-2 text-gray-600">
        <span className="flex items-center"><span className="pe-1"><img src="/engine.png"/> </span>{car.cc}</span>
        <span className="flex items-center"><span className="pe-1"><img src="/mileage.png"/> </span>{car.km}</span>
      </div>

      <div className="flex justify-between text-[13px] mt-1 text-gray-600">
        <span className="flex items-center"><span className="pe-1"><img src="/hash.png"/> </span>{car.stock}</span>
        <span className="flex items-center"><span className="pe-1"><img src="/drive.png"/> </span>{car.drive}</span>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center mt-5">
        {/* <button className="w-full border border-green-600 text-green-600 py-2 rounded hover:bg-green-600 hover:text-white transition text-[14px] font-semibold me-2">
            Buy Now
        </button> */}
        <Link
        href={`/stock-detail/${car.slug}`}
        className="block w-full text-center border border-[#5a9444] text-[#5a9444] py-2 rounded-lg hover:bg-[#5a9444] hover:text-white transition text-[14px] font-semibold me-2"
        >
        Buy Now
        </Link>
        <Link href={`https://wa.me/+818058510923?text=Hi K2 Global, I am interested in your stock *${car.title}* having reference number *${car.stock}*.Kindly contact me at your earliest convenience regarding this vehicle. Thank you.`} target="_blank"><img src="/whatsapp.png"/></Link>
      </div>
    </div>
  );
}