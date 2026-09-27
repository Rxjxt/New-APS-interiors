"use client";

import { Trash2 } from "lucide-react";

import ProductSearch from "./ProductSearch";

import { Product } from "@/types/product";
import { QuotationProduct } from "@/types/quotation";

interface Props {
  row: QuotationProduct;
  onChange: (row: QuotationProduct) => void;
  onDelete: () => void;
  canDelete: boolean;
}

export default function ProductRow({
  row,
  onChange,
  onDelete,
  canDelete,
}: Props) {
  const calculateTotal = (
    quantity: number,
    price: number,
    gst: number,
    discount: number
  ) => {
    const subtotal = quantity * price;

    const discountAmount =
      (subtotal * discount) / 100;

    const taxable =
      subtotal - discountAmount;

    const gstAmount =
      (taxable * gst) / 100;

    return taxable + gstAmount;
  };

  const handleProduct = (product: Product | null) => {
    if (!product) return;

    const total = calculateTotal(
      row.quantity,
      Number(product.price) || 0,
      Number(product.gst) || 18,
      row.discount
    );

    onChange({
      ...row,
      product,
      description: product.name,
      price: Number(product.price) || 0,
      gst: Number(product.gst) || 18,
      total,
    });
  };

  return (
    <tr>
      {/* Product */}

      <td className="pr-3 w-[320px]">
        <ProductSearch
          value={row.product}
          onChange={handleProduct}
        />
      </td>

      {/* Quantity */}

      <td className="pr-3">
        <input
          type="number"
          min={1}
          value={row.quantity}
          onChange={(e) => {
            const quantity =
              Number(e.target.value) || 1;

            onChange({
              ...row,
              quantity,
              total: calculateTotal(
                quantity,
                row.price,
                row.gst,
                row.discount
              ),
            });
          }}
          className="w-20 rounded-xl border border-slate-200 p-3"
        />
      </td>

      {/* Price */}

      <td className="pr-3">
        <input
          type="text"
          inputMode="numeric"
          value={
            row.price === 0
              ? ""
              : row.price
          }
          onChange={(e) => {
            const price =
              Number(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              ) || 0;

            onChange({
              ...row,
              price,
              total: calculateTotal(
                row.quantity,
                price,
                row.gst,
                row.discount
              ),
            });
          }}
          className="w-28 rounded-xl border border-slate-200 p-3"
        />
      </td>

      {/* GST */}

      <td className="pr-3">
        <input
          type="text"
          inputMode="numeric"
          value={
            row.gst === 0 ? "" : row.gst
          }
          onChange={(e) => {
            const gst =
              Number(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              ) || 0;

            onChange({
              ...row,
              gst,
              total: calculateTotal(
                row.quantity,
                row.price,
                gst,
                row.discount
              ),
            });
          }}
          className="w-20 rounded-xl border border-slate-200 p-3"
        />
      </td>

      {/* Discount */}

      <td className="pr-3">
        <input
          type="text"
          inputMode="numeric"
          value={
            row.discount === 0
              ? ""
              : row.discount
          }
          onChange={(e) => {
            const discount =
              Number(
                e.target.value.replace(
                  /\D/g,
                  ""
                )
              ) || 0;

            onChange({
              ...row,
              discount,
              total: calculateTotal(
                row.quantity,
                row.price,
                row.gst,
                discount
              ),
            });
          }}
          className="w-24 rounded-xl border border-slate-200 p-3"
        />
      </td>

      {/* Total */}

      <td className="font-semibold whitespace-nowrap text-[#B6945F]">
        ₹{" "}
        {row.total.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>

      {/* Delete */}

      <td>
        {canDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="rounded-xl bg-red-50 p-3 text-red-600 transition hover:bg-red-100"
          >
            <Trash2 size={18} />
          </button>
        )}
      </td>
    </tr>
  );
}