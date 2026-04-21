"use client";

export default function RightSidebar({ brands = [] }: any) {
  return (
    <div className="hidden lg:block bg-white rounded-xl p-4">

      <h3 className="font-semibold mb-3 text-[20px]">
        Search By Brand
      </h3>

      <hr className="mb-4" />

      <h4 className="font-semibold mb-3 text-[16px]">
        Browse All Brand
      </h4>

      <div className="space-y-2 text-sm">
        {brands.map((b: any) => (
          <div
            key={b.id}
            className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition"
          >
            <a href={`/brands/${b.slug}`} className="flex gap-1 items-center">
            {/* Logo */}
            <img
              src={b.logo_url}
              alt={b.name}
              className="w-6 h-6 object-contain"
            />

            {/* Name */}
            <span className="font-medium">{b.name}</span>

            {/* Count (optional if exists) */}
              <span className="text-gray-400 text-xs">
                ({b.count ?? 0})
              </span>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}