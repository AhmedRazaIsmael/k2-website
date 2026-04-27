export default function QuoteForm() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[900px] mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-[24px] md:text-[22px] font-semibold text-[#333] mb-6">
          GET FREE QUOTE
        </h2>

        {/* FORM */}
        <form className="space-y-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            className="w-full h-[44px] px-4 rounded-md border border-[#dcdcdc] bg-white text-[14px] focus:outline-none focus:border-green-600"
          />

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="input"
            />
            <input
              type="text"
              placeholder="Number"
              className="input"
            />
          </div>

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Country"
              className="input"
            />
            <input
              type="text"
              placeholder="Port"
              className="input"
            />
          </div>

          {/* TEXTAREA */}
          <textarea
            placeholder="Provide Your Requirement"
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-[#dcdcdc] bg-white text-[14px] resize-none focus:outline-none focus:border-green-600"
          />

        <div className="flex justify-center">
          {/* CHECKBOX */}
          <label className="inline-flex items-center gap-2 text-[13px] text-gray-500 cursor-pointer">

                {/* INPUT */}
                <input type="checkbox" className="peer sr-only" />

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

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full h-[44px] border border-[#5a9444] text-[#5a9444] rounded-md text-[20px] font-medium hover:bg-[#5a9444] hover:text-white transition cursor-pointer"
          >
            SUBMIT
          </button>

        </form>
      </div>
    </section>
  );
}