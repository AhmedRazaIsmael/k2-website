export default function WhyChooseUs() {
  const features = [
    {
      title: "QUALITY YOU CAN TRUST",
      desc: "Every vehicle undergoes a comprehensive inspection to ensure it meets our strict quality standards.",
      icon: "/icons/quality.png",
    },
    {
      title: "AFFORDABLE EXCELLENCE",
      desc: "Top-quality cars at prices that offer unbeatable value.",
      icon: "/icons/affordable.png",
    },
    {
      title: "CUSTOMER-CENTRIC SERVICE",
      desc: "From your first inquiry to post-purchase support, we put you first.",
      icon: "/icons/service.png",
    },
    {
      title: "EXTENSIVE SELECTION",
      desc: "Choose from a variety of makes, models, and price points to find the right fit.",
      icon: "/icons/selection.png",
    },
  ];

  return (
    <section className="pt-16 pb-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[55%]">

            {/* Heading */}
            <h2 className="text-[22px] md:text-[36px] font-bold text-[#2c2c2c] tracking-[0.3px] mb-10">
              WHY CHOOSE K2 Global?
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">

              {features.map((item, index) => (
                <div key={index} className="flex flex-col">

                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#e1f8fc] rounded-md flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-[20px] font-bold text-[#2c2c2c] leading-tight">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-[17px] text-[#707070] leading-[1.7] max-w-[300px]">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">

            <img
              src="/why-choose.png"
              alt="Why choose us"
              className="w-full max-w-[550px] h-auto object-contain rounded-xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}