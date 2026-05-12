export default function AuctionServiceSection() {
  return (
    <section className="py-1 md:py-16 px-6 md:px-12">

      <div className="max-w-full mx-auto">

        <div className="bg-[#6fa25a] rounded-xl p-6 md:p-10">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="text-white md:ps-15">
              <h2 className="text-[22px] md:text-[36px] font-bold">
                About Our Live Auction Service
              </h2>

              <p className="mt-4 text-[14px] md:text-[16px] leading-relaxedtext-white/90 md:max-w-lg mb-4">If you haven’t found your desired vehicle in our stocklist, don’t worry! Our Live Auction Service connects you to a vast network of Japanese auction
houses, ensuring you find exactly what you’re looking for.</p> 
            </div>

            {/* Image */}
            <div>
              <img
                src="/auction-about.png"
                alt="Commitment"
                className="w-full h-[240px] md:h-[420px] object-cover rounded-[14px]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}