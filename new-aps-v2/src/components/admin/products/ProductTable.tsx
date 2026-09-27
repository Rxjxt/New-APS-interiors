"use client";

import Link from "next/link";

interface ProductTableProps {
  products: any[];
  onDelete: (id: string) => void;
}

export default function ProductTable({
  products,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Product</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Featured</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((product: any) => (
              <tr
                key={product._id}
                className="border-t transition hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={
                      product.images?.[0] ||
                      "https://dummyimage.com/100x100"
                    }
                    alt={product.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                </td>

                <td className="p-4 font-semibold">
                  {product.name}
                </td>

                <td className="p-4">
                  {product.category?.name || "-"}
                </td>

                <td className="p-4">
                  {product.featured ? (
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                      ⭐ Featured
                    </span>
                  ) : (
                    <span className="text-gray-400">
                      No
                    </span>
                  )}
                </td>

                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      product.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/products/edit/${product._id}`}
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      onClick={() => onDelete(product._id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
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
                colSpan={6}
                className="py-10 text-center text-gray-500"
              >
                No Products Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}