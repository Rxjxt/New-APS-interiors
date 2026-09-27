"use client";

interface ProductSearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function ProductSearch({
  search,
  setSearch,
}: ProductSearchProps) {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
      />
    </div>
  );
}