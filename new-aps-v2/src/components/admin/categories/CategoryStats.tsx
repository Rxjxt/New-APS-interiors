"use client";

interface CategoryStatsProps {
  categories: any[];
}

export default function CategoryStats({
  categories,
}: CategoryStatsProps) {
  const total = categories.length;

  const active = categories.filter(
    (c) => c.isActive
  ).length;

  const inactive = total - active;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">
          Total Categories
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          {total}
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">
          Active Categories
        </p>

        <h2 className="mt-2 text-4xl font-bold text-green-600">
          {active}
        </h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-gray-500">
          Inactive Categories
        </p>

        <h2 className="mt-2 text-4xl font-bold text-red-600">
          {inactive}
        </h2>
      </div>

    </div>
  );
}