import type { Metadata } from "next";
import TermsHero from "@/components/TermsHero";
import GetInTouch from "@/components/GetInTouch";

export const metadata: Metadata = {
  title: "Terms And Conditions",
  description:
    "Learn more about The K2, our history, mission, and commitment to providing quality Japanese vehicles worldwide.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="">
        {/* <div className="h-28 md:h-22 bg-[#000]"></div> */}
        <TermsHero />

        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-14 bg-white">

            {/* TITLE */}
            <h1 className="text-center text-[32px] md:text-[40px] leading-tight font-bold text-[#5a9444]">
                Terms & Conditions
            </h1>

            {/* CONTENT WRAPPER */}
            <div className="max-w-[1180px] mx-auto mt-12">

                {/* TABLE OF CONTENTS */}
                <div className="border border-[#dddddd] rounded-[4px] p-5 md:p-6 bg-[#F9F9F9]">

                {/* TOP */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                    {/* LEFT */}
                    <div>

                    <h2 className="text-[24px] font-medium text-[#333] underline mb-4">
                        Table of Contents
                    </h2>

                    <div className="space-y-2">

                        {[
                        "Use of the Website",
                        "Products and Pricing",
                        "Payment Terms",
                        "Shipping and Delivery",
                        "Refunds and Cancellations",
                        "Limitation of Liability",
                        "Governing Law",
                        ].map((item, i) => (
                        <a
                            key={i}
                            href={`#section-${i + 1}`}
                            className="block text-[16px] text-[#6ea257] hover:text-[#5a9444] transition mb-0"
                        >
                            {i + 1}. {item}
                        </a>
                        ))}

                    </div>
                    </div>

                    {/* RIGHT */}
                    <p className="text-[14px] text-[#777] whitespace-nowrap">
                    Last Updated: September 16, 2025
                    </p>

                </div>
                </div>

                {/* INTRO */}
                <p className="mt-6 text-[16px] leading-[32px] text-[#212529]">
                Welcome to K2 Auto. By accessing and using our website, you agree to comply with the following terms and conditions. Please read them carefully before proceeding. If you do not agree to these terms, you
must refrain from using our services.
                </p>

                {/* SECTIONS */}
                <div className="mt-10 space-y-12">

                {/* SECTION 1 */}
                <div id="section-1">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/globe.png" alt="File" />
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#212529]">
                        1. Use of the Website
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        You must be at least 18 years old to use our services.
                    </li>

                    <li className="mb-0">
                        You agree not to misuse the website, including but not limited to engaging in fraudulent activities, distributing malware, or violating any applicable laws.
                    </li>
                    </ul>
                </div>

                {/* SECTION 2 */}
                <div id="section-2">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/pricing.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        2. Products and Pricing
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        All prices listed on our website are subject to change without prior notice.
                    </li>

                    <li className="mb-0">
                        K2 Auto strives to provide accurate product descriptions and images; however, discrepancies may occur.
                    </li>

                    <li className="mb-0">
                        Prices exclude shipping costs, customs duties, and other applicable fees unless stated otherwise.
                    </li>
                    </ul>
                </div>

                {/* SECTION 3 */}
                <div id="section-3">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/terms.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        3. Payment Terms
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        Payments must be made in full as per the invoice provided.
                    </li>
                    <li className="mb-0">Accepted payment methods include bank transfers and other specified payment options.</li>
                    <li className="mb-0">Orders will be processed only after payment confirmation.</li>
                    </ul>
                </div>

                {/* SECTION 4 */}
                <div id="section-4">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/shipping.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        4. Shipping and Delivery
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        K2 Auto arranges shipping to your preferred location. Delivery times may vary depending on the destination and logistics.
                    </li>

                    <li className="mb-0">
                        Customers are responsible for customs duties, taxes, and any additional charges imposed by the destination country.
                    </li>
                    </ul>
                </div>

                {/* SECTION 5 */}
                <div id="section-5">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/refund.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        5. Refunds and Cancellations
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        Orders cannot be canceled once the vehicle has been shipped.
                    </li>

                    <li className="mb-0">
                        Refunds are issued only in cases where K2 Auto is unable to fulfill an order.
                    </li>
                    </ul>
                </div>

                {/* SECTION 6 */}
                <div id="section-6">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/liability.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        6. Limitation of Liability
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        K2 Auto is not liable for any delays, damages, or losses incurred during transit.
                    </li>
                    <li className="mb-0">
                        We are not responsible for inaccuracies or omissions on the website.
                    </li>
                    </ul>
                </div>

                {/* SECTION 7 */}
                <div id="section-7">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/law.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        7. Governing Law
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        These terms are governed by the laws of [Country Name], and any disputes will be subject to its jurisdiction.
                    </li>
                    </ul>
                </div>

                </div>
            </div>
            </section>
        <GetInTouch />
    </div>
  );
}