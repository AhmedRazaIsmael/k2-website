import Link from "next/link";

export default function AutoPartsSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[22px] md:text-[36px] font-bold text-[#5a9444] leading-tight">
            AUTO PARTS AND <br /> DISMANTLING SERVICES
          </h2>

          <p className="mt-4 text-[16px] font-semibold text-[#333]">
            Looking for quality parts for your automotive needs?
          </p>

          <p className="mt-3 text-[16px] text-[#5a9444] font-semibold">
            K2 Global Is Your One Stop for Quality Scrap Cars and Parts
          </p>

          <p className="mt-4 text-[16px] text-[#212529] leading-relaxed">
            At K2 Global, we offer an extensive range of scrap cars from which
            you can purchase spare parts or complete engine sets.
          </p>

          <p className="mt-3 text-[16px] text-[#212529] leading-relaxed">
            We use modern, specially fitted equipment, which allows us to reduce
            the time and increase the quality and density of loading, reducing
            your risks for damage of parts.
          </p>

          <p className="mt-3 text-[16px] text-[#212529] leading-relaxed">
            Along with dismantling, we can also load the used parts into
            containers and arrange the shipment so you don’t have to worry about
            making any of the arrangements. Numbers of the cars that we can load
            into the container will vary depending on the way you want to
            dismantle the car.
          </p>

          <p className="mt-3 text-[16px] text-[#212529] leading-relaxed">
            Dismantling, packaging parts and loading them into containers is
            conducted in Toyama dismantling yard of K2 Global.
          </p>

          {/* BUTTON */}
          <Link className="mt-6 flex items-center justify-center w-41 gap-2 bg-[#5a9444] text-white px-5 py-2.5 rounded-md text-[14px] hover:bg-green-700 transition" href="">
            <span><img src="/wp.png" alt=""/></span> WhatsApp Now
          </Link>
        </div>

        {/* RIGHT ICON BLOCKS */}
        <div className="relative h-[300px] md:h-[350px] lg:h-[400px]">

          {/* BOX 1 */}
          <div className="flex items-center justify-end">
            <img src="/parts.png" alt="" className="" />
          </div>

        </div>

      </div>
    </section>
  );
}