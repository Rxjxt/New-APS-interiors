"use client";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: ProductPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Previous
      </button>

      <div className="flex gap-2">
        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`h-10 w-10 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
}