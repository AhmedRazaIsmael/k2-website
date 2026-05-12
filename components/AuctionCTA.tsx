"use client";
import Link from "next/link";

export default function AuctionCTA() {
  return (
    <section className="bg-black rounded-[6px] px-4 md:px-8 py-14 md:py-18">

      <div className="max-w-[900px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#5a9444]">
          Ready to Get Started?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[13px] md:text-[16px] leading-[26px] text-white">

          Register for our Live Auction Service now by filling out the inquiry
          form below or emailing us at{" "}

          <Link
            href="mailto:cs@thek2.com"
            className="text-[#5a9444] hover:underline"
          >
            cs@thek2.com
          </Link>

        </p>

        {/* BUTTON */}
        <div className="mt-7">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center
            min-w-[180px] h-[48px]
            px-8 rounded-[4px]
            bg-[#5a9444]
            text-white text-[15px] font-medium
            hover:bg-[#4d823b]
            transition"
          >
            Inquiry
          </Link>

        </div>

      </div>
    </section>
  );
}