"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#589243] to-[#387C3B] text-white">

      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 lg:grid-cols-[40%_20%_20%_20%] gap-10 md:gap-0">

        {/* LOGO + DESCRIPTION */}
        <div>
          <Link href="/" className="contents"><img src="/logo.png" alt="logo" className="h-16 mb-4" /></Link>

          <p className="text-sm text-white/80 leading-relaxed md:w-sm">
            K2 Global is your trusted partner in buying high-quality Japanese used cars.
            We provide an extensive range of vehicles to suit your needs. Experience seamless auto
            trading with exceptional service, competitive pricing, and worldwide shipping.
            Drive your dream car with K2!
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>

          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white"><Link href="/about-us">About Us</Link></li>
            <li className="hover:text-white"><Link href="/how-to-buy">How to buy</Link></li>
            <li className="hover:text-white"><Link href="/cars-in-stock">Cars In Stock</Link></li>
            <li className="hover:text-white"><Link href="/contact-us">Contact</Link></li>
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Customer Support</h3>

          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white"><Link href="/bank-details">Bank Details</Link></li>
            <li className="hover:text-white"><Link href="/faqs">FAQs</Link></li>
            <li className="hover:text-white"><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li className="hover:text-white"><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <div className="text-sm text-white/80 space-y-3">

            {/* <p>
              USA Address: 3979 Bisley hills bend, fulshear TX 77441
            </p> */}

            <p>
              Japan Address: 79-1 NANSHO CHO NARA SHI NARA KEN JAPAN
            </p>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hover:underline"><Link href="mailto:cs@theK2.com">cs@theK2.com</Link></span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hover:underline"><Link href="mailto:talkto@theK2.com">talkto@theK2.com</Link></span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+1 (281) 748-8125</span>
            </div>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-white/70 pb-6">
        Copyright © 2026. All Rights Reserved.
      </div>

    </footer>
  );
}