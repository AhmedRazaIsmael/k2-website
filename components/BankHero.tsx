"use client";

export default function BankHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-[#000]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain"
        style={{
          backgroundImage: "url('/bank.png')", // your image
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="text-white max-w-xl">
          <h1 className="text-[50px] md:text-[90px] font-semibold pt-22">
            Bank Details
          </h1>

          {/* <p className="text-md md:text-[22px] text-gray-300">
            Your Trusted Partner for Quality Used Cars.
          </p> */}
        </div>
      </div>

    </section>
  );
}