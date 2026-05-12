"use client";

import {
  Handshake,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: "handshake",
    img: "/why-choose-1.png",
    title: "Simplified Buying Process",
    description:
      "Buying from Japanese auction houses can seem complex, but we’re here to make it simple. From bidding to purchasing, we’ll guide you every step of the way to ensure a seamless experience.",
  },

  {
    id: 2,
    icon: "auction",
    img: "/why-choose-2.png",
    title: "Access to Over 150 Auction Houses",
    description:
      "Gain entry to more than 150 auction houses across Japan, offering a weekly inventory of over 100,000 vehicles. With such a wide selection, finding the perfect car for yourself or your customers becomes easier than ever.",
  },

  {
    id: 3,
    icon: "support",
    img: "/why-choose-3.png",
    title: "Free Consultation and Expert Assistance",
    description:
      "We provide free consultations regarding your country’s regulations, ideal vehicle specifications, and more. Additionally, our team will assist in interpreting Japanese auction sheets to give you a clear understanding of the vehicle’s condition.",
  },
];

export default function WhyChooseAuction() {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-12 py-14 md:py-20">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-[32px] md:text-[36px] leading-tight font-bold text-[#5a9444]">
          Why Choose Our Live Auction Service?
        </h2>

        {/* FEATURES */}
        <div className="mt-10 md:mt-14">

          {features.map((item, index) => (
            <div key={item.id}>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 py-8 md:py-10">

                {/* LEFT ICON */}
                <div className="shrink-0">

                  <div className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full bg-[#f5f5f5] flex items-center justify-center">

                    {/* HANDSHAKE */}
                    {item.icon === "handshake" && (
                      <img src={item.img} alt="" />
                    )}

                    {/* AUCTION */}
                    {item.icon === "auction" && (
                      <img src={item.img} alt="" />
                    )}

                    {/* SUPPORT */}
                    {item.icon === "support" && (
                      <img src={item.img} alt="" />
                    )}

                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1">

                  <h3 className="text-[18px] md:text-[24px] leading-tight font-bold text-[#2b2b2b]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] md:text-[16px] leading-[30px] md:leading-[34px] text-[#555] max-w-[850px]">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* DIVIDER */}
              {index !== features.length - 1 && (
                <div className="border-b border-[#dbe5d4]"></div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}