import Link from "next/link";
import { getCountryCode } from "@/lib/country";

export default function VerticalCard({ car }: any) {
  return (
    <div className="border border-[#dcdcdc] rounded-[12px] p-4 bg-white">

      <div className="flex flex-col lg:flex-row gap-4 items-center">

        {/* IMAGE */}
        <div className="w-full lg:w-[270px] relative">
            <div className="relative">
            <Link
                href={`/stock-detail/${car.slug}`}
                className=""
                ><img
                src={car.image}
                className="w-full h-[210px] object-cover rounded-[10px]"
            /></Link>

            <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 text-white px-2 py-[2px] rounded">
                Ref# {car.stock}
            </span>

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
          </div>

          {/* CTA */}
            <div className="flex justify-center items-center mt-5">
                <Link
                href={`/stock-detail/${car.slug}`}
                className="block w-full text-center border border-[#5a9444] text-[#5a9444] py-2 rounded-lg hover:bg-[#5a9444] hover:text-white transition text-[14px] font-semibold me-2"
                >
                Inquire Now
                </Link>
                <Link href={`https://wa.me/+818058510923?text=Hi K2 Global, I am interested in your stock *${car.title}* having reference number *${car.stock}*.Kindly contact me at your earliest convenience regarding this vehicle. Thank you.`} target="_blank"><img src="/whatsapp.png"/></Link>
            </div>

        </div>

        {/* CONTENT */}
        <div className="flex-1">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between ">

            <div className="md:flex items-center gap-2">
              <h3 className="text-[20px] font-semibold border-r-[1px] border-[#DEE2E6] pe-2">
                <Link
                href={`/stock-detail/${car.slug}`}
                className=""
                >{car.title}</Link>
              </h3>

              <span className="text-[14px] flex items-center text-gray-500">
                <span className="mr-2"><img className="w-8 h-5 border rounded-[4px]" src={`https://flagcdn.com/w40/${getCountryCode(car.location)}.png`} alt={car.location} /></span> <span>{car.location}</span>
              </span>
            </div>

            <p className="mt-1 md:mt-0">
              <span className="text-gray-500 mr-1 text-[14px]">FOB Price</span>
              <span className="text-[#5a9444] font-semibold text-[20px]">
                {car.price}
              </span>
            </p>
          </div>

          {/* SPEC GRID */}
          <div className="mt-3 border border-[#00000030] overflow-hidden">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.3fr_1fr_1.3fr_1fr_1.3fr_1fr] text-[12px]">

                <Spec icon="/mileage.png" label="Mileage" value={car.km} />
                <Spec icon="/year.png" label="Year" value={car.year} />
                <Spec icon="/car-engine.png" label="Engine" value={car.cc} />

                <Spec icon="/transmission.png" label="Trans." value={car.transmission} />
                <Spec icon="/chassis.png" label="Chassis Number" value={car.chassis} />
                <Spec icon="/steering.png" label="Steering" value={car.steering} />

                <Spec icon="/fuel.png" label="Fuel" value={car.fuel} />
                <Spec icon="/seats.png" label="Seats" value={car.seats} />
                <Spec icon="/body-type.png" label="Body Type" value={car.body} />

                <Spec icon="/color.png" label="Color" value={car.color} />
                <Spec icon="/car-drive.png" label="Drive" value={car.drive} />
                <Spec icon="/doors.png" label="Doors" value={car.doors} />

            </div>

            </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-2 mt-3">
            {car.features?.map((f: string, i: number) => (
              <span
                key={i}
                className="text-[14px] px-3 py-[4px] text-[#212529] border border-[#5a9444] border-[2px] rounded-full font-medium"
              >
                ✓ {f}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function Spec({ icon, label, value }: any) {
  return (
    <>
      {/* LABEL CELL */}
      <div className="flex items-center gap-2 border border-[#00000030] px-3 py-[6px]">
        <span className="text-[14px] text-green-600"><img src={icon} alt={label}/></span>
        <span className="text-[14px] font-medium">{label}</span>
      </div>

      {/* VALUE CELL */}
      <div className="border border-[#00000030] px-3 py-[6px]">
        <span className="text-[14px] font-medium">
          {value || "N/A"}
        </span>
      </div>
    </>
  );
}

// const getCountryCode = (country: string) => {
//   const map: any = {
//     Japan: "jp",
//     Thailand: "th",
//     USA: "us",
//     Germany: "de",
//     UK: "gb",
//     UAE: "ae",
//   };

//   return map[country] || "jp"; // fallback
// };