import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="relative mt-10">

      <div className="max-w-[1450px] mx-auto px-6 -mb-25">

        {/* CTA CARD */}
        <div className="relative rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.25)]">

          {/* ✅ BACKGROUND IMAGE (REPLACED GRADIENT) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/get-in-touch.png')", // 👈 your image path
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-10 md:py-12 text-white md:ps-15">

            <h2 className="text-[22px] md:text-[36px] font-bold tracking-[0.3px]">
              GET IN TOUCH
            </h2>

            <p className="mt-3 text-[16px] md:text-[18px] text-white/80 leading-[1.7] max-w-[420px]">
              Have questions or need assistance? We're here to help. Reach out to our
              friendly team anytime, and let us help you find your perfect car.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">

              <button className="px-6.5 py-3 md:px-11.5 md:py-3 text-[16px] rounded-md bg-[#498840] hover:bg-[#5c8d4a] transition cursor-pointer">
                <Link href="tel:+818058510923">Call Now</Link>
              </button>

              <button className="px-9.5 py-3 text-[16px] rounded-md bg-[#AF1F23] hover:bg-[#a61e1e] transition cursor-pointer">
                <Link href="mailto:talkto@theK2.com">Email</Link>
              </button>

            </div>

          </div>
        </div>

      </div>

      <div className="bg-gradient-to-r from-[#BBB8B9] to-[#BBB8B9] h-30 -mb-2 md:-mb-1"></div>
    </section>
  );
}