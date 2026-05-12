"use client";

import { useEffect, useState } from "react";
import { getCountries, getPorts, submitInquiry } from "@/lib/api";

interface QuoteFormProps {
  vehicleId?: number;
}

export default function QuoteForm({
  vehicleId,
}: QuoteFormProps) {
  const [countries, setCountries] = useState<any[]>([]);
  const [ports, setPorts] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

 // 🔥 FETCH COUNTRIES
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data.data || []);

      } catch (error) {
        console.error("Countries fetch error:", error);
      }
    };

    fetchCountries();
  }, []);

  // 🔥 FETCH PORTS BASED ON COUNTRY
  const handleCountryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryId = e.target.value;

    setSelectedCountry(countryId);

    if (!countryId) {
      setPorts([]);
      return;
    }

    try {
      const data = await getPorts(countryId);
      setPorts(data.data || []);

    } catch (error) {
      console.error("Ports fetch error:", error);
    }
  };

  const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
      vehicle_id: vehicleId, // 🔥 dynamic later
      country_id: "",
      port_id: "",

      name: "",
      email: "",
      phone: "",

      message: "",

      receive_promotions: false,
    });

    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, type } = e.target;

      setForm((prev) => ({
        ...prev,
        [name]:
          type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : value,
      }));
    };

    const handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      try {
        setLoading(true);

        setSuccessMessage("");
        setErrorMessage("");

        // console.log("Form", form);
        await submitInquiry({
          vehicle_id: Number(form.vehicle_id) ?? "",
          country_id: form.country_id
            ? Number(form.country_id)
            : null,

          port_id: form.port_id
            ? Number(form.port_id)
            : null,

          name: form.name,
          email: form.email,
          phone: form.phone,

          message: form.message,

          receive_promotions: form.receive_promotions,
        });

        setSuccessMessage("Inquiry has been submitted successfully.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);

        // 🔥 RESET FORM
        setForm({
          vehicle_id: vehicleId,
          country_id: "",
          port_id: "",

          name: "",
          email: "",
          phone: "",

          message: "",

          receive_promotions: false,
        });

        setPorts([]);

      } catch (error: any) {
        setErrorMessage(
          error.message || "Something went wrong. Please try again."
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } finally {
        setLoading(false);
      }
    };


  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[900px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-[24px] md:text-[22px] font-semibold text-[#333] mb-6">
          GET FREE QUOTE
        </h2>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full h-[44px] px-4 rounded-md border border-[#dcdcdc] bg-white text-[14px] focus:outline-none focus:border-green-600"
          />

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Number"
              className="input"
            />
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="country_id"
              value={form.country_id}
              onChange={(e) => {
                handleChange(e);
                handleCountryChange(e);
              }}
              className="input cursor-pointer"
            >
              <option value="">Select Country</option>

              {countries.map((country) => (
                <option
                  key={country.id}
                  value={country.id}
                >
                  {country.name}
                </option>
              ))}
            </select>

            <select
              className="input cursor-pointer"
              name="port_id"
              value={form.port_id}
              onChange={handleChange}
              disabled={!selectedCountry}
            >
              <option value="">
                {selectedCountry
                  ? "Select Port"
                  : "Select Country First"}
              </option>

              {ports.map((port) => (
                <option
                  key={port.id}
                  value={port.id}
                >
                  {port.name}
                </option>
              ))}
            </select>

          </div>

          {/* TEXTAREA */}
          <textarea
            placeholder="Provide Your Requirement"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-[#dcdcdc] bg-white text-[14px] resize-none focus:outline-none focus:border-green-600"
          />

        <div className="flex justify-center">
          {/* CHECKBOX */}
          <label className="inline-flex items-center gap-2 text-[13px] text-gray-500 cursor-pointer">

                {/* INPUT */}
                <input type="checkbox" name="receive_promotions"
                checked={form.receive_promotions}
                onChange={handleChange} className="peer sr-only" />

                {/* BOX */}
                <div className="w-5 h-5 border-2 border-[#5a9444] rounded-sm
                                flex items-center justify-center
                                peer-checked:bg-[#5a9444]">

                    {/* CHECK ICON */}
                    <svg
                    className="w-4 h-4 text-white opacity-100 transition duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    >
                    <path d="M5 13l4 4L19 7" />
                    </svg>

                </div>

                {/* TEXT */}
                <span>
                    I want to receive special promotions by emails.
                </span>

                </label>
            </div>

            {successMessage && (
              <div
                className="bg-[#e8f7e8] border border-[#5a9444]
                text-[#2f7d32] text-[14px] md:text-[15px]
                rounded-md px-4 py-3"
              >
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div
                className="bg-[#fdeaea] border border-[#d93025]
                text-[#d93025] text-[14px] md:text-[15px]
                rounded-md px-4 py-3"
              >
                {errorMessage}
              </div>
            )}
          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[44px] border border-[#5a9444] text-[#5a9444] rounded-md text-[20px] font-medium hover:bg-[#5a9444] hover:text-white transition cursor-pointer"
          >
            {loading ? "Submitting..." : "SUBMIT"}
          </button>

        </form>
      </div>
    </section>
  );
}