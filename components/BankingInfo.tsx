"use client";

export default function BankingInfo() {
  return (
    <section className="py-10 px-4 md:px-8 bg-white">

      {/* TITLE */}
      <h2 className="text-center text-[32px] md:text-[36px] font-semibold text-[#387C3B] mb-8">
        Banking Information
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* 🔹 JAPAN */}
        <div className="border border-gray-300">

          {/* HEADER */}
          <div className="bg-[#387C3B] text-white font-semibold px-4 py-3 text-[18px]">
            Japan
          </div>

          {/* TABLE */}
          <div className="text-[16px]">
            {[
              ["Bank Name:", "SMBC"],
              ["Account Name:", "Tariq Motors Ltd."],
              ["Account #", "3920213"],
              ["Swift Code:", "SMBCJPJT"],
              [
                "Address:",
                "Post cord T532-0003 Osaka, Yodogawa Ward, Miyahara, 4-1-6 Shin-Osaka Branch, Branch No 506 Japan",
              ],
            ].map(([label, value], i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-gray-300 ${
                  i % 2 === 0 ? "bg-[#f4f4f4]" : "bg-[#e9e9e9]"
                }`}
              >
                <div className="font-semibold p-3 border-r border-gray-300">
                  {label}
                </div>
                <div className="col-span-2 p-3">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 UNITED STATES */}
        <div className="border border-gray-300">

          {/* HEADER */}
          <div className="bg-[#387C3B] text-white font-semibold px-4 py-3 text-[18px]">
            United States
          </div>

          {/* TABLE */}
          <div className="text-[16px]">
            {[
              ["Bank Name:", "PNC Bank"],
              ["Account Title:", "TML Universal"],
              ["Account #", "4755767558"],
              ["Routing #", "043000096"],
              ["Swift Code:", "PNCCUS33"],
              ["Bank Address:", "333 S Fry Road, Katy, TX 77450"],
              [
                "Company Address:",
                "3979 Bisley Hills Bends Fulshear, Texas, United States",
              ],
            ].map(([label, value], i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-gray-300 ${
                  i % 2 === 0 ? "bg-[#f4f4f4]" : "bg-[#e9e9e9]"
                }`}
              >
                <div className="font-semibold p-3 border-r border-gray-300">
                  {label}
                </div>
                <div className="col-span-2 p-3">{value}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}