export default function DismantlingSection() {
  const components = [
    { icon: "/icons/engine.png", label: "Engine and Gear x 1 (without catalytic converter)" },
    { icon: "/icons/suspension.png", label: "Front and Rear Suspension x 1" },
    { icon: "/icons/front.png", label: "Front Nose Cut x 1" },
    { icon: "/icons/fender.png", label: "Front Fenders x 2" },
    { icon: "/icons/bonnet.png", label: "Bonnet x 1" },
    { icon: "/icons/door.png", label: "Side Doors x 4" },
    { icon: "/icons/mirror.png", label: "Side Mirrors x 2" },
    { icon: "/icons/trunk.png", label: "Back Door or Trunk Lid x 1" },
    { icon: "/icons/bumper.png", label: "Rear Bumper x 1" },
    { icon: "/icons/light.png", label: "Tail Lights x 2" },
  ];

  return (
    <section className="py-1 md:py-16 px-6 md:px-12">

      <div className="max-w-[1280px] mx-auto">

        {/* 🔥 HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-[22px] md:text-[36px] font-bold text-[#333]">
            COMPONENTS FOR DISMANTLING
          </h2>

          <div className="w-[50%] h-[2px] bg-[#5a9444] mx-auto mt-3"></div>
        </div>

        {/* 🔥 GRID */}
        <div className="grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4"
        >
          {components.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e5e5] rounded-md p-4 
                         flex flex-col items-center justify-center text-center
                         hover:shadow-sm transition"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="object-contain mb-3"
              />

              <p className="text-[16px] font-medium text-[#212529] leading-snug mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* ================= PROCESS ================= */}

        <div className="text-center mt-12 md:mt-24 mb-6">
          <h2 className="text-[22px] md:text-[36px] font-bold text-[#333]">
            PROCESS
          </h2>

          <div className="w-[50%] h-[2px] bg-[#5a9444] mx-auto mt-3"></div>
        </div>

        {/* 🔥 PROCESS IMAGE */}
        <div className="flex justify-center mt-15">
          <img
            src="/process.png" // 👈 your uploaded image
            alt="Process"
            className="w-full max-w-[1000px] object-contain"
          />
        </div>

        <div className="bg-[#6fa25a] rounded-xl p-6 md:p-10 mt-12 md:mt-24">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="text-white md:ps-15">
              {/* <h2 className="text-[22px] md:text-[36px] font-bold">
                OUR COMMITMENT
              </h2> */}

              <p className="mt-4 text-[14px] md:text-[16px] leading-relaxedtext-white/90 md:max-w-lg mb-4">On the customer’s request TML Global staff can also place bids and purchase cars on their own. We purchase cars from usual auctions as well as from recycle car auctions. Some single parts could be also purchased from sources like yahoo auctions etc.</p>
<p className="mb-4">Once the car arrives in our yard, we upload 30-40 photos of your car to customers’ personal page and the video of the engine working.</p>
<p className="mb-4">We start to dismantle once all cars for the container are collected in our yard. Dismantle is done based on your request. Based on difficulty our staff dismantle 5-10 cars daily.</p>
<p className="font-semibold">Usually container waiting time in Japan after the loading is 1 week. Transit time by ship depends on the country of the destination. Average 30-35 days.</p>
            </div>

            {/* Image */}
            <div>
              <img
                src="/engines.png"
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