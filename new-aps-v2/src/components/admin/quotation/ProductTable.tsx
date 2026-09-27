"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import ProductRow from "./ProductRow";
import { QuotationProduct } from "@/types/quotation";

interface ProductTableProps {
  onQuotationChange?: (data: {
    quotationItems: QuotationProduct[];
    subtotal: number;
    discount: number;
    gst: number;
    grandTotal: number;
  }) => void;
}

export default function ProductTable({
  onQuotationChange,
}: ProductTableProps) {
  const [rows, setRows] = useState<QuotationProduct[]>([
    {
      id: Date.now(),
      product: null,
      description: "",
      quantity: 1,
      price: 0,
      gst: 18,
      discount: 0,
      total: 0,
    },
  ]);

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: null,
        description: "",
        quantity: 1,
        price: 0,
        gst: 18,
        discount: 0,
        total: 0,
      },
    ]);
  };

  const updateRow = (
    id: number,
    updatedRow: QuotationProduct
  ) => {
    const subtotal =
      updatedRow.quantity * updatedRow.price;

    const discountAmount =
      (subtotal * updatedRow.discount) / 100;

    const taxable = subtotal - discountAmount;

    const gstAmount =
      (taxable * updatedRow.gst) / 100;

    updatedRow.total = taxable + gstAmount;

    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? updatedRow : row
      )
    );
  };

  const removeRow = (id: number) => {
    setRows((prev) =>
      prev.filter((row) => row.id !== id)
    );
  };

  const subtotal = rows.reduce(
    (sum, row) =>
      sum + row.quantity * row.price,
    0
  );

  const discountTotal = rows.reduce(
    (sum, row) => {
      const sub =
        row.quantity * row.price;

      return (
        sum +
        (sub * row.discount) / 100
      );
    },
    0
  );

  const gstTotal = rows.reduce(
    (sum, row) => {
      const sub =
        row.quantity * row.price;

      const taxable =
        sub - (sub * row.discount) / 100;

      return (
        sum +
        (taxable * row.gst) / 100
      );
    },
    0
  );

  const grandTotal =
    subtotal - discountTotal + gstTotal;

  useEffect(() => {
    onQuotationChange?.({
      quotationItems: rows,
      subtotal,
      discount: discountTotal,
      gst: gstTotal,
      grandTotal,
    });
  }, [
    rows,
    subtotal,
    discountTotal,
    gstTotal,
    grandTotal,
    onQuotationChange,
  ]);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">
          Products
        </h2>

        <button
          type="button"
          onClick={addRow}
          className="inline-flex items-center rounded-xl bg-[#B6945F] px-5 py-3 font-medium text-white transition hover:bg-[#a17e4d]"
        >
          <Plus
            size={18}
            className="mr-2"
          />
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm font-semibold text-slate-500">
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>GST %</th>
              <th>Discount %</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <ProductRow
                key={row.id}
                row={row}
                onChange={(updatedRow) =>
                  updateRow(
                    row.id,
                    updatedRow
                  )
                }
                onDelete={() =>
                  removeRow(row.id)
                }
                canDelete={
                  rows.length > 1
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex justify-end">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="mb-6 text-xl font-bold text-slate-900">
            Quotation Summary
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Sub Total
              </span>

              <span className="font-semibold">
                ₹{" "}
                {subtotal.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Discount
              </span>

              <span className="font-semibold text-red-600">
                ₹{" "}
                {discountTotal.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                GST
              </span>

              <span className="font-semibold">
                ₹{" "}
                {gstTotal.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </span>
            </div>

            <hr className="my-2" />

            <div className="flex items-center justify-between text-2xl font-bold text-[#B6945F]">
              <span>
                Grand Total
              </span>

              <span>
                ₹{" "}
                {grandTotal.toLocaleString(
                  "en-IN",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}