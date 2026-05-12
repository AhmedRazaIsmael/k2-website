"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqSections = [
  {
    title: "AUCTION AND BIDDING",
    faqs: [
      {
        question: "What is a bid price?",
        answer:
          "A bid price is the maximum amount you are willing to pay for a vehicle during the auction process.",
      },

      {
        question: "Why do I need to make an Advance Deposit?",
        answer:
          "The advance deposit confirms your seriousness as a buyer and allows us to participate in auctions on your behalf.",
      },

      {
        question: "How do I participate in an auction?",
        answer:
          "You can participate by registering for our Live Auction Service and placing bids through our support team.",
      },

      {
        question: "Can I cancel my bid after placing it?",
        answer:
          "Once a bid is placed in a live auction, cancellation may not be possible depending on auction rules.",
      },

      {
        question: "How will I know if my bid has been successful?",
        answer:
          "Our team will notify you immediately after the auction result is announced.",
      },
    ],
  },

  {
    title: "PRICING AND SHIPPING",
    faqs: [
      {
        question: "What costs are included in the auction price?",
        answer:
          "Auction price usually includes vehicle cost and auction fees. Shipping and destination charges are separate.",
      },

      {
        question: "How is shipping handled?",
        answer:
          "We arrange shipping from Japan to your selected destination port using trusted shipping partners.",
      },

      {
        question: "Can I get an estimated total cost for the vehicle?",
        answer:
          "Yes, our team can provide a full cost estimate including shipping and additional fees.",
      },

      {
        question: "How long does it take to ship my vehicle?",
        answer:
          "Shipping times vary depending on destination country and shipping schedules, typically 4–8 weeks.",
      },
    ],
  },

  {
    title: "VEHICLE CONDITION",
    faqs: [
      {
        question: "Are the vehicles inspected before listing for auction?",
        answer:
          "Auction price usually includes vehicle cost and auction fees. Shipping and destination charges are separate.",
      },

      {
        question: "What do the auction grade and condition report include?",
        answer:
          "We arrange shipping from Japan to your selected destination port using trusted shipping partners.",
      },

      {
        question: "Can I get additional photos or details about a vehicle?",
        answer:
          "Yes, our team can provide a full cost estimate including shipping and additional fees.",
      },

      {
        question: "What does the term 'as-is' mean for auction vehicles?",
        answer:
          "Shipping times vary depending on destination country and shipping schedules, typically 4–8 weeks.",
      },
    ],
  },
];

export default function AuctionFAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="bg-white px-4 md:px-8 lg:px-12 py-12 md:py-16">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-[30px] md:text-[52px] leading-tight font-bold text-[#5a9444]">
          Frequently Asked Question
        </h2>

        {/* FAQ GROUPS */}
        <div className="mt-12 md:mt-16 space-y-12">

          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>

              {/* SECTION TITLE */}
              <div className="flex items-center gap-4 mb-5">

                <div className="w-[3px] h-[28px] bg-[#5a9444]"></div>

                <h3 className="text-[20px] md:text-[22px] font-bold text-[#2d2d2d] uppercase">
                  {section.title}
                </h3>

              </div>

              {/* FAQ ITEMS */}
              <div className="space-y-3">

                {section.faqs.map((faq, faqIndex) => {
                  const faqId = `${sectionIndex}-${faqIndex}`;
                  const isOpen = openIndex === faqId;

                  return (
                    <div
                      key={faqIndex}
                      className="border border-[#dcdcdc] rounded-[4px] overflow-hidden"
                    >

                      {/* QUESTION */}
                      <button
                        onClick={() => toggleFAQ(faqId)}
                        className={`w-full flex items-center justify-between gap-4 px-4 md:px-6 py-5 md:py-6 transition cursor-pointer ${
                            isOpen
                            ? "bg-[#fafafa]"
                            : "bg-white hover:bg-[#fafafa]"
                        }`}
                        >

                        <div className="flex items-center gap-4 text-left">

                          {/* Q NUMBER */}
                          <span className="text-[26px] md:text-[33px] font-bold text-[#e3e3e3] leading-none shrink-0">
                            Q{faqIndex + 1}:
                          </span>

                          {/* QUESTION */}
                          <span className="text-[16px] md:text-[19px] font-bold text-[#2d2d2d] leading-snug">
                            {faq.question}
                          </span>

                        </div>

                        {/* ICON */}
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#5a9444] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#5a9444] shrink-0" />
                        )}

                      </button>

                      {/* ANSWER */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">

                          <div className="px-3 md:px-6 pt-4 pb-4 md:pb-4 pl-[30px] md:pl-[30px] text-[14px] md:text-[17px] leading-[28px] md:leading-[32px] text-[#555]">
                            {faq.answer}
                          </div>

                        </div>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}