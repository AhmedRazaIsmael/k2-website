"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { submitInquiry } from "@/lib/api";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
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

      await submitInquiry({
        vehicle_id: null,
        country_id: null,
        port_id: null,

        name: form.name,
        email: form.email,
        phone: form.phone,

        message: form.message,

        receive_promotions: false,
      });

      setSuccessMessage(
        "Inquiry has been submitted successfully."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

    } catch (error: any) {
      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again."
      );

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-16 px-6 md:px-12">

      <div className="w-full mx-auto px-6">

        {/* 🔹 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[22px] md:text-[36px] font-bold text-[#2c2c2c]">
            GET IN TOUCH
          </h2>

          <p className="mt-3 text-[16px] md:text-[18px] text-[#7a7a7a] mx-auto">
            Please provide the details of your request, and a member of our support team will get back to you promptly.
          </p>
        </div>

        {/* 🔹 Content Grid */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10">

          {/* 🟢 LEFT FORM */}
          <div>

            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* Name */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full h-[46px] px-4 rounded-md border border-[#ddd] text-[14px] outline-none focus:ring-1 focus:ring-green-500"
              />

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full h-[46px] px-4 rounded-md border border-[#ddd] text-[14px] outline-none focus:ring-1 focus:ring-green-500"
                />

                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Number"
                  className="w-full h-[46px] px-4 rounded-md border border-[#ddd] text-[14px] outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Type Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-[#ddd] text-[14px] outline-none focus:ring-1 focus:ring-green-500 resize-none"
              />

              {successMessage && (
                <div
                  className="bg-[#e8f7e8] border border-[#5a9444]
                  text-[#2f7d32] text-[14px]
                  rounded-md px-4 py-3"
                >
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div
                  className="bg-[#fdeaea] border border-[#d93025]
                  text-[#d93025] text-[14px]
                  rounded-md px-4 py-3"
                >
                  {errorMessage}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[46px] bg-[#4f8f46] hover:bg-[#3f7738] text-white text-[14px] rounded-md transition cursor-pointer"
              >
                {loading ? "Submitting..." : "SUBMIT"}
              </button>

            </form>
          </div>

          {/* 🔵 RIGHT INFO */}
          <div className="space-y-6">

            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#4f8f46] rounded-md flex items-center justify-center text-white">
                <MapPin size={18} />
              </div>

              <div>
                <p className="text-[16px] font-bold text-[#2c2c2c]">
                  USA Address:
                </p>
                <p className="text-[16px] text-[#7a7a7a]">
                  3979 Bisley hills bend, fulshear TX 77441
                </p>

                <p className="mt-2 text-[16px] font-bold text-[#2c2c2c]">
                  Japan Address:
                </p>
                <p className="text-[16px] text-[#7a7a7a]">
                  Postal code 658-0025 Hyogo ken Kobe Shi Higashi nada ku Uozaki Minami machi 1-4-17-510
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#4f8f46] rounded-md flex items-center justify-center text-white">
                <Phone size={18} />
              </div>

              <div>
                <p className="text-[16px] font-bold text-[#2c2c2c]">
                  Phone:
                </p>
                <p className="text-[16px] text-[#7a7a7a]">
                  +818049875470
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[#4f8f46] rounded-md flex items-center justify-center text-white">
                <Mail size={18} />
              </div>

              <div>
                <p className="text-[16px] font-bold text-[#2c2c2c]">
                  Email:
                </p>
                <p className="text-[16px] text-[#7a7a7a]">
                  cs@html.com
                </p>
                <p className="text-[16px] text-[#7a7a7a]">
                  talkto@html.com
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <p className="text-[20px] font-bold text-[#212529]">
                Opening Hours:
              </p>
              <p className="text-[16px] text-[#7a7a7a]">
                We are available 24x7. Our team is at your service and just a call away!
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-black mt-10">
              <i className="fab fa-facebook-f text-2xl"></i>
              <i className="fab fa-instagram text-2xl"></i>
              <i className="fab fa-linkedin-in text-2xl"></i>
              <i className="fab fa-youtube text-2xl"></i>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}