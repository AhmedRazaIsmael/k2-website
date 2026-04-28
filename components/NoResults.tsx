"use client";

import Link from "next/link";

export default function NoResults({ location }: { location?: string | null }) {
  // format location (optional)
  const formatted =
    location?.replaceAll("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()) ||
    "your search";

  return (
    <div className="bg-[#f6e7c1] border border-[#edd9a3] rounded-lg p-5">

      {/* TITLE */}
      <h3 className="text-[24px] font-semibold text-[#9c6b00]">
        Sorry
      </h3>

      {/* MESSAGE */}
      <p className="text-[16px] text-[#9c6b00] mt-1">
        We didn’t find any car for{" "}
        <span className="font-semibold text-[#212529]">{formatted}</span>
      </p>

      {/* LINE */}
      <div className="border-t border-[#edd9a3] my-4"></div>

      {/* DESCRIPTION */}
      <p className="text-[16px] text-[#9c6b00]">
        Please try searching with different filters, or{" "}
        <Link
          href="/contact-us"
          className="text-[#212529] font-semibold hover:text-[#000] hover:underline"
        >
          contact us
        </Link>{" "}
        for assistance in finding your desired car.
      </p>
    </div>
  );
}