export default function QuotationInfoSection() {
  return (
    <section className="py-8 md:py-10 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">

        {/* TOP INFO */}
        <p className="text-[16px] text-gray-600 mb-6">
          Following information is required from customer to provide the{" "}
          <span className="font-bold">Quotation:</span>
        </p>

        {/* ICON BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: "/icons/container.png", label: "Container type (20F/40F)" },
            { icon: "/icons/map.png", label: "Country and the port of the destination" },
            { icon: "/icons/payment.png", label: "Freight payment terms (collect or prepaid)" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e5e5] rounded-md p-5 text-center"
            >
              <img src={item.icon} className="mx-auto mb-3" />
              <p className="text-[16px] font-medium text-gray-600 mt-5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* EXCLUSIONS */}
        <h3 className="text-[#5a9444] font-semibold text-[24px] mb-2">
          EXCLUSIONS
        </h3>
        <p className="text-[16px] text-gray-600 mb-8">
          Please note that the parts set does not include{" "}
          <span className="font-bold">
            car interior parts, catalytic converters, tires, or other miscellaneous parts.
          </span>
        </p>

        {/* CALCULATION */}
        <h3 className="text-[#5a9444] font-semibold text-[24px] mb-2">
          CALCULATION
        </h3>
        <p className="text-[16px] text-gray-600 mb-4">
          C&F to your Destination Country includes
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border border-[#dcdcdc] border-[2px] text-[16px]">
            <thead>
              <tr className="bg-[#5a9444] text-white text-left border border-[#dcdcdc] border-[2px]">
                <th className="p-3 border border-[#dcdcdc] border-[2px]">EXPENSES FOR CAR INCLUDES</th>
                <th className="p-3 border border-[#dcdcdc] border-[2px]">EXPENSES FOR CONTAINER</th>
                <th className="p-3 border border-[#dcdcdc] border-[2px]">FREIGHT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white align-top">
                <td className="p-4 border border-[#e5e5e5] border-[2px]">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>AUCTION CAR PRICE</strong> is the price by which a car was purchased from auction.</li>
                    <li><strong>AUCTION FEE</strong> is the fee paid by our company to auction for each purchased unit.</li>
                    <li><strong>TRANSPORTATION TO OUR YARD FEE</strong> is the transportation fee to our yard.</li>
                    <li><strong>RECYCLE FEE</strong></li>
                    <li><strong>OUR AGENT FEE</strong></li>
                    <li><strong>DISMANTLE COST</strong></li>
                  </ul>
                </td>
                <td className="p-4 border border-[#e5e5e5]">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Drayage (container transportation from shipping company to yard)</li>
                    <li>Custom broker's fee</li>
                    <li>Export tax</li>
                    <li>Container scale</li>
                    <li>Container seal</li>
                    <li>Origin THC</li>
                  </ul>
                </td>
                <td className="p-4 border border-[#e5e5e5]">
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Amount to be paid to Shipping Company</li>
                    <li>Freight charges vary based on destination country and port.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PACKAGING */}
        <h3 className="text-[#5a9444] font-semibold text-[24px] mb-2">
          PARTS PACKAGING FEE
        </h3>
        <p className="text-[16px] text-gray-600 mb-8">
          While we do not charge for labor involved in packaging, there is a materials fee.
          The customer can choose the packaging material, which affects the price.
          On average, <strong>the packaging fee is 50,000 JPY per container.</strong>
        </p>

        {/* NUMBER OF CARS */}
        <h3 className="text-[#5a9444] font-semibold text-[24px] mb-2">
          NUMBER OF CARS IN CONTAINER
        </h3>

        <p className="text-[16px] text-gray-600 mb-4">
          <strong>Dismantled cars could be shipped by 20F or 40F containers.</strong>{" "}
          Numbers of the cars that we can load into the container will vary depending
          on the way you dismantle the car.
        </p>

        {/* SMALL TABLE */}
        <div className="overflow-x-auto border border-[#dcdcdc]">
          <table className="text-[16px] border border-[#dcdcdc]">
            <thead>
              <tr>
                <th className="p-2 border border-[#dcdcdc]"></th>
                <th className="p-2 bg-[#5a9444] text-white border border-[#dcdcdc]">40F CONTAINER</th>
                <th className="p-2 bg-[#5a9444] text-white border border-[#dcdcdc]">20F CONTAINER</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-2 border border-[#dcdcdc] font-bold text-[#5a9444]">FULL CAR DISMANTLE</td>
                <td className="p-2 border border-[#dcdcdc] font-bold">12–15 Cars</td>
                <td className="p-2 border border-[#dcdcdc] font-bold">9 Cars</td>
              </tr>
              <tr className="bg-[#fafafa]">
                <td className="p-2 border border-[#dcdcdc] font-bold text-[#5a9444]">HALF CUT</td>
                <td className="p-2 border border-[#dcdcdc] font-bold">25–33 Cars</td>
                <td className="p-2 border border-[#dcdcdc] font-bold">18 Cars</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}