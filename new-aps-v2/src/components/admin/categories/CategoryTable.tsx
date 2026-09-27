"use client";

import Link from "next/link";

interface CategoryTableProps {
  categories: any[];
  onDelete: (id: string) => void;
}

export default function CategoryTable({
  categories,
  onDelete,
}: CategoryTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <tr
                key={category._id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={
                      category.image ||
                      "https://dummyimage.com/100x100"
                    }
                    alt={category.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-semibold">
                  {category.name}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      category.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {category.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/categories/edit/${category._id}`}
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        onDelete(category._id)
                      }
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="py-10 text-center text-gray-500"
              >
                No Categories Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}