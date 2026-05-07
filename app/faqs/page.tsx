"use client";

import FaqHero from "@/components/FaqHero";
import GetInTouch from "@/components/GetInTouch";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqData = [
  {
    title: "Buying Process",
    icon: "/icons/buying.png",
    items: [
      {
        question: "How do I buy a car from K2 Global?",
        answer:
          "You can browse our stock, select your preferred vehicle, and contact our sales team to proceed with the purchase process.",
      },
      {
        question: "Can I inspect the car before purchasing?",
        answer:
          "Yes, detailed inspection reports and photos are available upon request for most vehicles.",
      },
    ],
  },

  {
    title: "Payment Information",
    icon: "/icons/pay.png",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers and other secure international payment methods.",
      },
    ],
  },

  {
    title: "Shipping and Delivery",
    icon: "/icons/delivery.png",
    items: [
      {
        question: "Do you ship cars to my country?",
        answer:
          "Yes, we export vehicles worldwide to many countries across Africa, Europe, Asia, and the Caribbean.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times depend on destination country and shipping schedules, usually between 3–8 weeks.",
      },
      {
        question: "Who handles customs and import duties?",
        answer:
          "Customers are responsible for customs clearance and local import duties in their country.",
      },
    ],
  },

  {
    title: "Order Management",
    icon: "/icons/order.png",
    items: [
      {
        question: "Can I cancel my order?",
        answer:
          "Order cancellation depends on the processing stage. Please contact support immediately for assistance.",
      },
    ],
  },

  {
    title: "General Questions",
    icon: "/icons/question.png",
    items: [
      {
        question: "What if the car I want is sold?",
        answer:
          "Our team can help you find a similar vehicle based on your preferences and budget.",
      },
      {
        question: "How can I contact K2 Global?",
        answer:
          "You can contact us through WhatsApp, email, or the contact form available on our website.",
      },
    ],
  },
];


export default function Page() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleFAQ = (id: number) => {
        setOpenItems((prev) =>
        prev.includes(id)
            ? prev.filter((item) => item !== id)
            : [...prev, id]
        );
    };
  return (
    <div className="">
        {/* <div className="h-28 md:h-22 bg-[#000]"></div> */}
        <FaqHero />
        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-14 bg-white min-h-screen">
        
              {/* TITLE */}
              <h1 className="text-center text-[32px] md:text-[40px] font-bold text-[#5a9444]">
                FAQs
              </h1>
        
              {/* MAIN WRAPPER */}
              <div className="max-w-[1120px] mx-auto mt-10 md:mt-14 space-y-12">
        
                {faqData.map((section, sectionIndex) => {
                  const Icon = section.icon;
        
                  return (
                    <div key={sectionIndex}>
        
                      {/* SECTION TITLE */}
                      <div className="flex items-center gap-3 mb-5">
                        <img src={Icon} alt={section.title} />
        
                        <h2 className="text-[24px] md:text-[32px] font-bold text-[#2b2b2b]">
                          {section.title}
                        </h2>
                      </div>
        
                      {/* QUESTIONS */}
                      <div className="space-y-3">
        
                        {section.items.map((faq, faqIndex) => {
                          const uniqueId = sectionIndex * 100 + faqIndex;
                          const isOpen = openItems.includes(uniqueId);
        
                          return (
                            <div
                              key={faqIndex}
                              className="border border-[#cccccc] rounded-[5px] overflow-hidden"
                            >
        
                              {/* QUESTION */}
                              <button
                                onClick={() => toggleFAQ(uniqueId)}
                                className="w-full flex items-center justify-between gap-4 px-4 md:px-5 py-3 bg-[#f7f7f7] hover:bg-[#f3f3f3] transition text-left cursor-pointer"
                              >
                                <span className="text-[15px] md:text-[18px] text-[#333] font-medium">
                                  {faq.question}
                                </span>
        
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
                                  <div className="px-4 md:px-5 py-4 text-[14px] md:text-[16px] leading-[28px] text-[#555] bg-white border-t border-[#e5e5e5]">
                                    {faq.answer}
                                  </div>
                                </div>
                              </div>
        
                            </div>
                          );
                        })}
        
                      </div>
                    </div>
                  );
                })}
        
              </div>
            </section>
        
        <GetInTouch />
    </div>
  );
}