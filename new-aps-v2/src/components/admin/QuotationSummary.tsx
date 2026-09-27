"use client";

interface QuotationSummaryProps {
  items: any[];
  gst: number;
  setGst: React.Dispatch<React.SetStateAction<number>>;
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  validity: string;
  setValidity: React.Dispatch<React.SetStateAction<string>>;
  deliveryTime: string;
  setDeliveryTime: React.Dispatch<React.SetStateAction<string>>;
  notes: string;
  setNotes: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  onSave: () => void;
}

export default function QuotationSummary({
  items,
  gst,
  setGst,
  discount,
  setDiscount,
  validity,
  setValidity,
  deliveryTime,
  setDeliveryTime,
  notes,
  setNotes,
  loading,
  onSave,
}: QuotationSummaryProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.total,
    0
  );

  const discountedAmount = subtotal - discount;

  const gstAmount =
    (discountedAmount * gst) / 100;

  const grandTotal =
    discountedAmount + gstAmount;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Quotation Summary
      </h2>

      <div className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            GST (%)
          </label>

          <input
            type="number"
            value={gst}
            onChange={(e) =>
              setGst(Number(e.target.value))
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Discount (₹)
          </label>

          <input
            type="number"
            value={discount}
            onChange={(e) =>
              setDiscount(
                Number(e.target.value)
              )
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Delivery Time
          </label>

          <input
            value={deliveryTime}
            onChange={(e) =>
              setDeliveryTime(
                e.target.value
              )
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Validity
          </label>

          <input
            value={validity}
            onChange={(e) =>
              setValidity(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            className="w-full rounded-lg border p-3"
          />
        </div>

        <hr />

        <div className="space-y-2 text-lg">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <strong>
              ₹ {subtotal.toLocaleString()}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <strong>
              ₹ {discount.toLocaleString()}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>GST</span>
            <strong>
              ₹ {gstAmount.toLocaleString()}
            </strong>
          </div>

          <div className="flex justify-between border-t pt-3 text-2xl font-bold text-green-700">

            <span>Grand Total</span>

            <span>
              ₹ {grandTotal.toLocaleString()}
            </span>

          </div>

        </div>

        <button
          onClick={onSave}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-4 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading
            ? "Saving..."
            : "Save Quotation"}
        </button>

      </div>

    </div>
  );
}