"use client";

import {
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse",
    icon: "/icons/browse.png",
    image: "/step1.png",
    heading: "Step 1: Browse Our Stock",
    description:
      "Explore our extensive inventory of Japanese used cars on the Stock Listing Page. Use advanced filters to search by make, model, year, mileage, or price to find the perfect match for your needs.",
  },

  {
    id: 2,
    title: "Inquiry",
    icon: "/icons/inquiry.png",
    image: "/step2.png",
    heading: "Step 2: Submit Your Inquiry",
    description:
      "Once you’ve selected a vehicle, click the 'Inquire Now' button on the car's detail page. Fill out the inquiry form, and our team will promptly provide you with all the necessary details, including price, shipping, and payment options.",
  },

  {
    id: 3,
    title: "Order",
    icon: "/icons/orders.png",
    image: "/step3.png",
    heading: "Step 3: Confirm Your Order",
    description:
      "After finalizing your choice, confirm your order by accepting the provided quotation. Our sales team will guide you through the required documentation and payment process to secure your vehicle.",
  },

  {
    id: 4,
    title: "Payment",
    icon: "/icons/payments.png",
    image: "/step4.png",
    heading: "Step 4: Complete Payment",
    description:
      "K2 Global offers secure and convenient payment options. You can make payments via bank transfer or other approved methods. Once the payment is confirmed, your car will be prepared for shipping.",
  },

  {
    id: 5,
    title: "Delivery",
    icon: "/icons/delivery-icon.png",
    image: "/step5.png",
    heading: "Step 5: Vehicle Delivery",
    description:
      "Your vehicle will be shipped promptly to your desired location. We provide tracking updates throughout the shipping process to ensure transparency and peace of mind.",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-12 py-10 md:py-18">

      {/* HEADER */}
      <div className="max-w-full mx-auto">

        <h1 className="text-center text-[30px] md:text-[40px] leading-tight font-bold text-[#222] uppercase">
          How To Buy Japanese Used Cars From K2 Global
        </h1>

        <p className="max-w-[720px] mx-auto text-center text-[14px] md:text-[16px] leading-[28px] text-[#7a7a7a] mt-4">
          At K2 Global, we make purchasing high-quality Japanese used cars a
          seamless and enjoyable process. Follow these 5 simple steps to find
          and own your dream car today!
        </p>

        {/* STEP TOP NAV */}
        <div className="hidden lg:flex items-center justify-between mt-16">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="flex items-center gap-28"
              >

                {/* STEP */}
                {/* <div className="flex flex-col items-center">

                  <div className="w-[150px] h-[150px] rounded-full border border-[#ececec] flex flex-col items-center justify-center bg-white">

                    <img src={step.icon} alt={step.title}/>

                    <span className="text-[16px] text-[#777] mt-2">
                      Step {step.id}
                    </span>

                    <span className="text-[20px] font-medium text-[#222]">
                      {step.title}
                    </span>
                  </div>
                </div> */}
                <button
                onClick={() => {
                    document
                    .getElementById(`step-${step.id}`)
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }}
                className="flex flex-col items-center cursor-pointer group"
                >
                <div
                    className="w-[150px] h-[150px] rounded-full border border-[#ececec]
                    flex flex-col items-center justify-center bg-white
                    transition-all duration-300
                    group-hover:border-[#5a9444]
                    group-hover:shadow-md"
                >

                    <img
                    src={step.icon}
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                    />

                    <span className="text-[16px] text-[#777] mt-2">
                    Step {step.id}
                    </span>

                    <span className="text-[20px] font-medium text-[#222]">
                    {step.title}
                    </span>

                </div>
                </button>

                {/* ARROW */}
                {index !== steps.length - 1 && (
                  <div className="flex-1 flex justify-center">
                    <ChevronRight className="w-8 h-8 text-[#777]" />
                  </div>
                )}
              </div>
            );
          })}

        </div>

        {/* MOBILE STEP CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 lg:hidden">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="border border-[#ececec] rounded-xl p-4 flex flex-col items-center text-center"
              >
                <img src={step.icon} alt={step.title}/>

                <span className="text-[13px] text-[#777] mt-3">
                  Step {step.id}
                </span>

                <span className="text-[18px] font-semibold text-[#222]">
                  {step.title}
                </span>
              </div>
            );
          })}

        </div>

        {/* DIVIDER */}
        <hr className="my-12 border-[#e8e8e8]" />

        {/* STEP SECTIONS */}
        <div className="space-y-16 md:space-y-24">

          {steps.map((step, index) => (
            <div key={step.id} id={`step-${step.id}`}>

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* IMAGE */}
                <div>

                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full rounded-[18px]"
                  />
                </div>

                {/* CONTENT */}
                <div>

                  <h2 className="text-[30px] md:text-[32px] leading-[1.1] font-semibold text-[#212529]">
                    {step.heading.split(":")[0]}:
                    <span className="font-bold">
                      {step.heading.split(":")[1]}
                    </span>
                  </h2>
                  <div className="h-[4px] bg-[#5a9444] mt-4 w-[49%]"></div>
                  {/* <div className="inline-block">

                    <h2 className="text-[34px] md:text-[64px] leading-[1.1] font-bold text-[#212529]">
                        {step.heading.split(":")[0]}:
                        <span className="font-extrabold">
                        {step.heading.split(":")[1]}
                        </span>
                    </h2>
                    
                    </div> */}

                  <p className="mt-6 text-[16px] md:text-[18px] leading-[34px] text-[#666] max-w-[660px]">
                    {step.description}
                  </p>
                </div>

              </div>

              {/* DIVIDER */}
              {index !== steps.length - 1 && (
                <hr className="mt-16 md:mt-24 border-[#ededed]" />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}