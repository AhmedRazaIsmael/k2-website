"use client";

export default function FaqHero() {
  return (
    <section className="relative w-full h-[440px] md:h-[570px] overflow-hidden bg-[#000]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right bg-contain"
        style={{
          backgroundImage: "url('/policy.png')", // your image
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-12">
        <div className="text-white max-w-2xl">
          <h1 className="text-[50px] md:text-[90px] font-semibold pt-28">
            FAQ
          </h1>

          {/* <p className="text-md md:text-[22px] text-gray-300">
            Your Trusted Partner for Quality Used Cars.
          </p> */}
        </div>
      </div>

    </section>
  );
}