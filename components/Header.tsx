"use client";

import { useState } from "react";
import { Menu, X, Search, Phone, MapPin, User } from "lucide-react";
import JSTTime from "@/components/JSTTime";

export default function Header({ totalStock = 0 }: any) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-white">

      {/* Top Bar */}
      <div className="bg-black text-[15px] px-6 py-2 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-2">
          <Search size={20} className="opacity-80" />
          <span>
            Total In Stock:{" "} <span className="font-semibold">{totalStock.toLocaleString()}</span>
          </span>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-2">
            <MapPin  size={20} className="opacity-80"/>
            <JSTTime />
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={20} className="opacity-80"/>
            <span>+1 (281) 748-8125</span>
          </div>

          {/* <div className="flex items-center gap-2 cursor-pointer">
            <User size={14} />
            <span>Login</span>
          </div> */}
        </div>
      </div>

      {/* Main Header */}
      <div
        className="px-6 py-4 flex items-center justify-between
        backdrop-blur-md border-b border-white/10
        sticky top-0 z-50"
        style={{
            background:
            "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(26,26,26,0.4) 40%, rgba(0,0,0,0.7) 100%)",
        }}
        >

        {/* Logo */}
        <a href="/" className="cursor-pointer"><img src="/logo.png" className="h-14 object-contain" /></a>

        <div className="flex items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 px-10 text-[16px] font-semibold">
          <a href="/" className="hover:text-green-400 transition">Home</a>
          <a href="#" className="hover:text-green-400 transition">About Us</a>
          <a href="#" className="hover:text-green-400 transition">Cars In Stock</a>
          <a href="#" className="hover:text-green-400 transition">Auto Parts</a>
          <a href="#" className="hover:text-green-400 transition">Auction</a>
          <a href="#" className="hover:text-green-400 transition">Contact Us</a>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#f1f1f1] rounded-md px-2 py-1 w-[320px]">

        <input
            type="text"
            placeholder="Search for Cars Model"
            className="flex-1 bg-transparent px-3 py-2 text-[14px] text-black placeholder:text-gray-500 outline-none"
        />

        <button className="bg-[#498840] rounded-md p-2 flex items-center justify-center">
            <Search size={16} className="text-white" />
        </button>

        </div>
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black p-4 space-y-4">

          <nav className="space-y-3 text-sm">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">About Us</a>
            <a href="#" className="block">Cars In Stock</a>
            <a href="#" className="block">Auto Parts</a>
            <a href="#" className="block">Auction</a>
            <a href="#" className="block">Contact Us</a>
          </nav>

          <div className="flex bg-white rounded-md overflow-hidden">
            <input
              className="px-4 py-2 w-full text-black outline-none"
              placeholder="Search for Cars Model"
            />
            <button className="bg-[#498840] px-4">
              <Search size={18} />
            </button>
          </div>

        </div>
      )}
    </header>
  );
}