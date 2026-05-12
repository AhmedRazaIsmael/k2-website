"use client";

import {
  MailCheck,
  Search,
  BadgeDollarSign,
  CarFront,
  Gavel,
  Landmark,
  Ship,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";

const auctionSteps = [
  {
    id: 1,
    icon: <MailCheck className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-1.png",
    title: "Register for the Service",
    description: (
    <>
        Start by registering for our Live Auction Service.
        Fill out the{" "}
        
        <Link href="/contact-us"><span className="text-[#af1f23]">
        Inquiry Form
        </span></Link>

        {" "}or email us at{" "}

        <Link href="mailto:cs@thek2.com"><span className="text-[#af1f23]">
        cs@theK2.com
        </span></Link>

        {" "}to get started.
    </>
    ),
  },

  {
    id: 2,
    icon: <Search className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-2.png",
    title: "Search for Your Vehicle",
    description:
      "Once registered, you'll gain access to our extensive inventory. Search for the vehicle that suits your needs from our auction database.",
  },

  {
    id: 3,
    icon: <BadgeDollarSign className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-3.png",
    title: "Make an Advance Deposit",
    description:
      "To bid on vehicles, an advance deposit is required. Deposits are fully refundable if no successful bid has been made.",
    table: true,
  },

  {
    id: 4,
    icon: <CarFront className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-4.png",
    title: "Select Your Vehicle and Place a Bid",
    description:
      "After making your deposit, choose the vehicle you're interested in and place a maximum bid. Our team will review the auction sheet and provide details before activating your bid.",
  },

  {
    id: 5,
    icon: <Gavel className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-5.png",
    title: "Bidding Process",
    description:
      "We’ll bid on your behalf and notify you of the results. If successful, you'll receive a Proforma Invoice with the remaining amount due.",
  },

  {
    id: 6,
    icon: <Landmark className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-6.png",
    title: "Final Payment",
    description:
      "Settle the balance via bank wire transfer or PayPal. Additional charges such as inspections or shipping may apply.",
  },

  {
    id: 7,
    icon: <Ship className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-7.png",
    title: "Yard Inspection and Shipping",
    description:
      "Upon payment confirmation, we arrange inspections, complete documentation, and book your vehicle for shipping. Track your shipment anytime using our CAF service.",
  },

  {
    id: 8,
    icon: <PartyPopper className="w-12 h-12 text-[#5a9444]" />,
    img: "/auction-step-8.png",
    title: "Enjoy Your New Ride!",
    description:
      "Once your vehicle arrives, it's time to hit the road and enjoy the benefits of Japanese engineering.",
  },
];

export default function AuctionServiceSteps() {
  return (
    <section className="bg-[#eff9ed] px-4 md:px-8 lg:px-12 py-12 md:py-18">

      <div className="max-w-[980px] mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[28px] md:text-[36px] leading-tight font-bold text-[#5a9444]">
          Steps to Participate in Our Live Auction Service
        </h2>

        {/* STEPS */}
        <div className="mt-10 md:mt-14 space-y-8 md:space-y-10">

          {auctionSteps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col md:flex-row gap-5 md:gap-8"
            >

              {/* ICON BOX */}
              <div className="shrink-0 flex justify-center md:justify-start">

                <div className="">
                  <img src={step.img} alt="" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                {/* HEADING */}
                <div className="flex items-center gap-3 flex-wrap">

                  {/* NUMBER */}
                  <div className="w-7.5 h-7.5 rounded-full bg-[#c71f25] text-white flex items-center justify-center text-[22px] font-bold">
                    {step.id}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#2d2d2d]">
                    {step.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] text-[#555]">
                  {step.description}
                </p>

                {/* TABLE */}
                {step.table && (
                  <div className="mt-5 overflow-x-auto">

                    <table className="w-full border border-[#707070] border-[2px] text-left text-[14px] md:text-[16px]">

                      <thead>
                        <tr className="bg-[#f5f5f5]">
                          <th className="border border-[#707070] border-[2px] px-4 py-3 font-semibold">
                            Vehicle Price (JPY)
                          </th>

                          <th className="border border-[#707070] border-[2px] px-4 py-3 font-semibold">
                            Deposit (JPY)
                          </th>
                        </tr>
                      </thead>

                      <tbody>

                        {[
                          ["up to 1,000,000", "100,000"],
                          ["1,000,001 – 2,000,000", "200,000"],
                          ["2,000,001 – 3,000,000", "300,000"],
                          ["3,000,001 – 4,000,000", "400,000"],
                          ["4,000,001 – 5,000,000", "500,000"],
                          ["over 5,000,001", "20% of Vehicle Price"],
                        ].map((row, i) => (
                          <tr key={i}>

                            <td className="border border-[#707070] border-[2px] px-4 py-3">
                              {row[0]}
                            </td>

                            <td className="border border-[#707070] border-[2px] px-4 py-3">
                              {row[1]}
                            </td>

                          </tr>
                        ))}

                      </tbody>
                    </table>

                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
      
    </section>
  );
}