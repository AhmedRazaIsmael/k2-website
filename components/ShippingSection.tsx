export default function ShippingSection() {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

        {/* LEFT IMAGE */}
        <div className="rounded-[10px] overflow-hidden">
          <img
            src="/shipping.png" // 👈 replace with your image
            alt="Shipping"
            className="w-full h-[300px] md:h-[750px] lg:h-[785px] object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-4">

          {/* SHIPPING INFO */}
          <div className="bg-[#111111] text-white rounded-[8px] p-5 md:p-6">
            <h3 className="text-[24px] font-semibold mb-3">
              SHIPPING INFORMATION
            </h3>

            <ul className="text-[16px] text-gray-300 space-y-2 list-disc pl-4 leading-relaxed">
              <li>We only ship in bulk, requiring either a 20F or 40F container.</li>
              <li>We do not sell parts locally, all are for export purposes only.</li>
              <li>Shipping of airbags and batteries is prohibited by the Japanese government.</li>
              <li>We provide customers with 30–40 photos of container packing.</li>
              <li>Shipping line is chosen based on the customer's preferences.</li>
              <li>Once shipped, we send container number, tracking link and documents.</li>
            </ul>
          </div>

          {/* PAYMENT TERMS */}
          <div className="bg-[#d1e2cb] rounded-[8px] p-5 md:p-6">
            <h3 className="text-[24px] font-semibold text-[#333] mb-2">
              PAYMENT TERMS
            </h3>

            <p className="text-[16px] text-gray-700 leading-relaxed">
              In order to start, the customer has to transfer the security deposit to our account.{" "}
              <strong>
                The amount of the security deposit is 1,000,000 JPY or 10,000 USD.
              </strong>
            </p>

            <p className="text-[16px] text-gray-700 mt-2 leading-relaxed">
              Once all cars for containers are collected in our yard, we will request for clearing the outstanding balance.
            </p>
          </div>

          {/* ADDITIONAL INFO */}
          <div className="bg-[#d1e2cb] rounded-[8px] p-5 md:p-6">
            <h3 className="text-[24px] font-semibold text-[#333] mb-2">
              ADDITIONAL INFORMATION
            </h3>

            <p className="text-[16px] text-gray-700 leading-relaxed">
              If you require further details such as mileage, photos, or videos of the engine working and charges,
              please contact us for a quotation based on your specific requirements.
            </p>

            <p className="text-[16px] text-gray-700 mt-2 leading-relaxed">
              Please note that all prices are in JPY, and conversions to USD will be based on the current exchange rate.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}