import Link from "next/link";

export default function AuctionSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[22px] md:text-[36px] font-bold text-[#5a9444] leading-tight">
            Register Your Interest in Our  <br /> Live Auction Service Today!
          </h2>

          <p className="mt-4 text-[16px] text-[#212529] leading-relaxed">
            Take the first step towards owning your ideal Japanese vehicle. Simply fill out the inquiry form below or email us at cs@theK2.com to register for our
Live Auction Service.
          </p>

          {/* BUTTON */}
          <Link className="mt-6 flex items-center justify-center w-68 gap-2 bg-[#5a9444] text-white px-5 py-2.5 rounded-md text-[14px] hover:bg-green-700 transition" href="/contact-us">
            <span></span> Inquiry
          </Link>
        </div>

        {/* RIGHT ICON BLOCKS */}
        <div className="relative">

          {/* BOX 1 */}
          <div className="flex items-center justify-end">
            <img src="/auction-image.png" alt="" className="" />
          </div>

        </div>

      </div>
    </section>
  );
}