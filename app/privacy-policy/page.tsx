"use client";

import PrivacyHero from "@/components/PrivacyHero";
import GetInTouch from "@/components/GetInTouch";

export default function PrivacyPolicyPage() {
  return (
    <div className="">
        {/* <div className="h-28 md:h-22 bg-[#000]"></div> */}
        <PrivacyHero />

        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-14 bg-white">

            {/* TITLE */}
            <h1 className="text-center text-[32px] md:text-[40px] leading-tight font-bold text-[#5a9444]">
                Privacy Policy
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
                        "Information We Collect",
                        "How We Use Your Information",
                        "Information Sharings",
                        "Data Security",
                        "Your Rights",
                        "Changes to This Policy",
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
                Welcome to K2 Auto. By accessing and using our website, you agree to
                comply with the following terms and conditions. Please read them
                carefully before proceeding. If you do not agree to these terms, you
                must refrain from using our services.
                </p>

                {/* SECTIONS */}
                <div className="mt-10 space-y-12">

                {/* SECTION 1 */}
                <div id="section-1">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/file.png" alt="File" />
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#212529]">
                        1. Information We Collect
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        Personal Information: Name, email address, phone number, and
                        shipping address.
                    </li>

                    <li className="mb-0">
                        Non-Personal Information: Browser type, IP address, and website
                        usage statistics.
                    </li>
                    </ul>
                </div>

                {/* SECTION 2 */}
                <div id="section-2">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/shield.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        2. How We Use Your Information
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        To process orders and provide customer support.
                    </li>

                    <li className="mb-0">
                        To send updates about promotions and services (with your
                        consent).
                    </li>

                    <li className="mb-0">
                        To improve website functionality and user experience.
                    </li>
                    </ul>
                </div>

                {/* SECTION 3 */}
                <div id="section-3">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/share.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        3. Information Sharings
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        We do not sell or share your personal information with third
                        parties except for shipping providers, payment processors, or as
                        required by law.
                    </li>
                    </ul>
                </div>

                {/* SECTION 4 */}
                <div id="section-4">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/lock.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        4. Data Security
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        We implement appropriate security measures to protect your data
                        from unauthorized access.
                    </li>

                    <li className="mb-0">
                        However, no method of online transmission or storage is
                        completely secure, and we cannot guarantee absolute security.
                    </li>
                    </ul>
                </div>

                {/* SECTION 5 */}
                <div id="section-5">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/key.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        5. Your Rights
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        You can request access, correction, or deletion of your
                        personal information by contacting us at privacy@k2auto.com.
                    </li>

                    <li className="mb-0">
                        You may opt out of marketing communications at any time.
                    </li>
                    </ul>
                </div>

                {/* SECTION 6 */}
                <div id="section-6">

                    <div className="flex items-center gap-3 mb-4">
                    <img src="/icons/changes.png" alt="Icon" />

                    <h3 className="text-[20px] md:text-[24px] font-bold text-[#212529]">
                        6. Changes to This Policy
                    </h3>
                    </div>

                    <ul className="list-disc pl-8 space-y-2 text-[16px] leading-[30px] text-[#212529]">
                    <li className="mb-0">
                        K2 Auto reserves the right to update this privacy policy.
                        Please review this page periodically for changes.
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