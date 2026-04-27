"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ meta }: any) {
  const router = useRouter();
  const params = useSearchParams();

  const currentPage = meta?.current_page || 1;
  const totalPages = meta?.last_page || 1;

  const goToPage = (page: number) => {
    const query = new URLSearchParams(params.toString());
    query.set("page", page.toString());
    router.push(`?${query.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 text-sm">

      {/* Prev */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-2 ${
            currentPage === 1
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        >
        {"<"}
      </button>

      {/* Pages */}
      {[...Array(totalPages)].slice(0, 10).map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-[#5a9444] text-white"
                : "bg-gray-100 cursor-pointer"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-2 ${
            currentPage === totalPages
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
      >
        {">"}
      </button>

    </div>
  );
}