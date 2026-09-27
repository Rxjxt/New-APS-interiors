"use client";

import { QuotationData } from "@/types/quotation";

interface Props {
  quotationData: QuotationData;
  onChange: (
    field: keyof QuotationData,
    value: string
  ) => void;
}

export default function NotesCard({
  quotationData,
  onChange,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Notes & Terms
      </h2>

      <div className="space-y-6">
        {/* Notes */}

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Additional Notes
          </label>

          <textarea
            rows={6}
            value={quotationData.notes}
            onChange={(e) =>
              onChange("notes", e.target.value)
            }
            placeholder="Enter quotation notes..."
            className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#B6945F]"
          />
        </div>

        {/* Preview */}

        <div className="rounded-xl bg-slate-50 p-5">
          <h3 className="mb-3 font-semibold text-slate-900">
            Quotation Summary
          </h3>

          <div className="space-y-2 text-sm text-slate-600">
            <p>
              <strong>Validity:</strong>{" "}
              {quotationData.validity}
            </p>

            <p>
              <strong>Delivery:</strong>{" "}
              {quotationData.deliveryTime}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {quotationData.paymentTerms}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}