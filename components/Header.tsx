"use client";

import { useState } from "react";
import { Menu, X, Search, Phone, MapPin, User } from "lucide-react";
import { useRouter } from "next/navigation";
import JSTTime from "@/components/JSTTime";
import Link from "next/link";

export default function Header({ totalStock = 0 }: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;

    router.push(`/cars-in-stock?search=${encodeURIComponent(query)}`);
  };

  return (
    <header className="w-full text-white">

      {/* Top Bar */}
      <div className="bg-black text-[15px] px-6 md:px-12 py-2 flex items-center justify-between">
        
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
            <Link href="tel:+818058510923" className="flex items-center gap-2">
            <Phone size={20} className="opacity-80"/>
            <span>+81 80-5851-0923</span>
            </Link>
          </div>

          {/* <div className="flex items-center gap-2 cursor-pointer">
            <User size={14} />
            <span>Login</span>
          </div> */}
        </div>
      </div>

      {/* Main Header */}
      <div
        className="px-6 md:px-12 py-4 flex items-center justify-between
        backdrop-blur-md border-b border-white/10
        sticky top-0 z-50"
        style={{
            background:
            "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(26,26,26,0.4) 40%, rgba(0,0,0,0.7) 100%)",
        }}
        >

        {/* Logo */}
        <Link href="/" className="cursor-pointer"><img src="/logo.png" className="h-14 object-contain" /></Link>

        <div className="flex items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 px-10 text-[16px] font-semibold">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/about-us" className="hover:text-green-400 transition">About Us</Link>
          <Link href="/cars-in-stock" className="hover:text-green-400 transition">Cars In Stock</Link>
          <Link href="/auto-parts" className="hover:text-green-400 transition">Auto Parts</Link>
          <Link href="/auction" className="hover:text-green-400 transition">Auction</Link>
          <Link href="/contact-us" className="hover:text-green-400 transition">Contact Us</Link>
        </nav>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#f1f1f1] rounded-md px-2 py-1 w-[320px]">

        <input
          type="text"
          placeholder="Search for Cars Model"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 bg-transparent px-3 py-2 text-[14px] text-black placeholder:text-gray-500 outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-[#498840] p-2 flex rounded-md cursor-pointer items-center justify-center"
        >
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
            <Link href="/" className="block">Home</Link>
            <Link href="/about-us" className="block">About Us</Link>
            <Link href="/cars-in-stock" className="block">Cars In Stock</Link>
            <Link href="/auto-parts" className="block">Auto Parts</Link>
            <Link href="/auction" className="block">Auction</Link>
            <Link href="/contact-us" className="block">Contact Us</Link>
          </nav>

          <div className="flex bg-white rounded-md overflow-hidden">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="px-4 py-2 w-full text-black outline-none"
              placeholder="Search for Cars Model"
            />
            <button onClick={handleSearch} className="bg-[#498840] px-4">
              <Search size={18} />
            </button>
          </div>

        </div>
      )}
    </header>
  );
}