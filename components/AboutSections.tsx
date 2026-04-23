export default function AboutSections() {
  return (
    <section className="py-12 md:py-16">

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* 🔹 WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div>
            <img
              src="/about-1.png"
              alt="Who we are"
              className="w-full h-[310px] md:h-[500px] object-cover rounded-[14px]"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[22px] md:text-[36px] font-bold text-gray-800">
              WHO WE ARE
            </h2>

            <p className="mt-4 text-gray-500 text-[18px] md:text-[20px] leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

        </div>
      </div>

       <div className="max-w-[1600px] mx-auto mt-20 px-6 md:px-12 space-y-12">

        {/* 🔹 OUR COMMITMENT */}
        <div className="bg-[#6fa25a] rounded-xl p-6 md:p-10">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="text-white md:ps-15">
              <h2 className="text-[22px] md:text-[36px] font-bold">
                OUR COMMITMENT
              </h2>

              <p className="mt-4 text-[18px] md:text-[20px] leading-relaxedtext-white/90 md:max-w-lg">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>

            {/* Image */}
            <div>
              <img
                src="/about-2.png"
                alt="Commitment"
                className="w-full h-[310px] md:h-[580px] object-cover rounded-[14px]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}