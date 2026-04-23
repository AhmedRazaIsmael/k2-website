"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#4f8f46] text-white">

      <div className="max-w-7xl mx-auto py-12 grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 lg:grid-cols-[40%_20%_20%_20%] gap-10 md:gap-0">

        {/* LOGO + DESCRIPTION */}
        <div>
          <a href="/" className="contents"><img src="/logo.png" alt="logo" className="h-16 mb-4" /></a>

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
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">How to buy</li>
            <li className="hover:text-white cursor-pointer">Cars In Stock</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CUSTOMER SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Customer Support</h3>

          <ul className="space-y-2 text-sm text-white/80">
            <li className="hover:text-white cursor-pointer">Bank Details</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <div className="text-sm text-white/80 space-y-3">

            <p>
              USA Address: 3979 Bisley hills bend, fulshear TX 77441
            </p>

            <p>
              Japan Address: Postal code 658-0025 Hyogo ken Kobe Shi Higashi nada Ku Uozaki Minami machi 1-4-17-510
            </p>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hover:underline"><a href="mailto:cs@thehtml.com">cs@thehtml.com</a></span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span className="hover:underline"><a href="mailto:talkto@thehtml.com">talkto@thehtml.com</a></span>
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