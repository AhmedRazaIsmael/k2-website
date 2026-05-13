"use client";

export default function BankingInfo() {
  const bankDetails = [
    ["Bank Name:", "SMBC"],
    ["Account Name:", "Tariq Motors Ltd."],
    ["Account #", "3920213"],
    ["Swift Code:", "SMBCJPJT"],
    [
      "Address:",
      "Post cord T532-0003 Osaka, Yodogawa Ward, Miyahara, 4-1-6 Shin-Osaka Branch, Branch No 506 Japan",
    ],
  ];
  return (
    <section className="py-10 px-4 md:px-8 bg-white">

      {/* TITLE */}
      <h2 className="text-center text-[32px] md:text-[40px] font-semibold text-[#387C3B] mb-8">
        Bank Details
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-6xl mx-auto">

        {/* <div className="border border-gray-300 bg-[#f4f4f4]">

          <div className="bg-[#387C3B] text-white font-semibold px-4 py-3 text-[18px]">
            Japan
          </div>
          
          <div className="text-[16px]">
            {bankDetails.map(([label, value], i) => {
              const isLast = i === bankDetails.length - 1;

              return (
                <div
                  key={i}
                  className={`grid grid-cols-3 border-t border-gray-300 ${
                    i % 2 === 0 ? "bg-[#f4f4f4]" : "bg-[#e9e9e9]"
                  } ${isLast ? "border-b" : ""}`}
                >
                  <div className="font-semibold p-3 border-r border-gray-300">
                    {label}
                  </div>

                  <div className="col-span-2 p-3">
                    {value}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Japan */}
        <div className="border border-gray-300">

          {/* HEADER */}
          <div className="bg-[#387C3B] text-white font-semibold px-4 py-3 text-[18px]">
            Japan
          </div>

          {/* TABLE */}
          <div className="text-[16px]">
            {[
              ["Bank Name:", "SUMITOMO MITSUI BANKING CORP"],
              ["Account Title:", "K2 BOEKI CORPORATION"],
              ["Account #", "1661370"],
              ["Swift Code:", "SMBCJPJT"],
              [
                "Branch Name:",
                "WEBSITE BRANCH by SWIFT directly (Branch Code: 998)",
              ],
              [
                "Branch No:",
                "157-68-1 MINAMI SHO CHO NARA CITY",
              ],
              ["Branch Address:", "1- 37- 12 FUDA CHOFU - SHI TOKYO 182-0024 JAPAN"],
              
              
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