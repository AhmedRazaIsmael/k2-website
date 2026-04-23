export default function HistorySection() {
  return (
    <section className="bg-[#eff9ed] py-16">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP TEXT GRID */}
        <div className="grid md:grid-cols-2 gap-16 mb-10">

          {/* LEFT */}
          <div>
            <h2 className="text-[22px] md:text-[36px] font-bold text-[#212529]">
              OUR HISTORY
            </h2>

            <p className="mt-4 text-[16px] md:text-[18px] leading-[1.8] text-[#7a7a7a] max-w-[520px]">
              TML Global was founded with the goal of providing an exceptional car buying experience.
              Over the years, we have grown to become a leading provider of quality used cars,
              serving customers across various regions. Our commitment has earned the trust of satisfied customers.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="text-[22px] md:text-[36px] font-bold text-[#212529]">
              OUR LEGACY OF TRUST
            </h2>

            <p className="mt-4 text-[16px] md:text-[18px] leading-[1.8] text-[#7a7a7a] max-w-[520px]">
              With over 10,000 cars sold, TML Global has earned the trust of thousands of satisfied customers.
              Our commitment to quality, affordability, and service has made us a leading name in the used car market.
            </p>
          </div>

        </div>

        {/* IMAGE GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/history-1.png"
              alt="History"
              className="w-full h-[280px] md:h-[430px] object-cover rounded-[14px]"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/history-2.png"
              alt="Legacy"
              className="w-full h-[280px] md:h-[430px] object-cover rounded-[14px]"
            />
          </div>

        </div>

      </div>

    </section>
  );
}