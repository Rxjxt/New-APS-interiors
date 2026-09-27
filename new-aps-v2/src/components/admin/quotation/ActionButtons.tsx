"use client";

import { useState } from "react";
import {
  prepareQuotation,
  downloadQuotationPDF,
  sendQuotation,
} from "@/services/quotation.service";
import { QuotationData } from "@/types/quotation";

interface Props {
  quotation: any;
  quotationData: QuotationData;
}

export default function ActionButtons({
  quotation,
  quotationData,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        quotationItems: quotationData.quotationItems.map(
          (item) => ({
            product: item.product?._id,
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.price,
          })
        ),

        discount: quotationData.discount,
        gst: 18,
        validity: quotationData.validity,
        deliveryTime: quotationData.deliveryTime,
        notes: quotationData.notes,
      };

      await prepareQuotation(quotation._id, payload);

      return true;
    } catch (err) {
      console.error(err);
      alert("Failed to save quotation.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePDF = async () => {
    try {
      const saved = await handleSave();

      if (!saved) return;

      await downloadQuotationPDF(quotation._id);
    } catch (err) {
      console.error(err);
      alert("Failed to generate PDF.");
    }
  };

  const handleSendQuotation = async () => {
    try {
      setLoading(true);

      const saved = await handleSave();

      if (!saved) return;

      await sendQuotation(quotation._id);

      alert("Quotation sent successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to send quotation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        onClick={handleSave}
        disabled={loading}
        className="rounded-xl bg-slate-900 px-6 py-3 text-white disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Quotation"}
      </button>

      <button
        type="button"
        onClick={handleGeneratePDF}
        disabled={loading}
        className="rounded-xl bg-[#B6945F] px-6 py-3 text-white disabled:opacity-50"
      >
        Generate PDF
      </button>

      <button
        type="button"
        onClick={handleSendQuotation}
        disabled={loading}
        className="rounded-xl bg-green-600 px-6 py-3 text-white disabled:opacity-50"
      >
        {loading
          ? "Sending..."
          : "Generate & Send Quote"}
      </button>
    </div>
  );
}