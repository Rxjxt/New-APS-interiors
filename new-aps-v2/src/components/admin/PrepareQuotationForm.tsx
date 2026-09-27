"use client";

import { useState } from "react";

import CustomerCard from "./quotation/CustomerCard";
import QuotationCard from "./quotation/QuotationCard";
import ProductTable from "./quotation/ProductTable";
import NotesCard from "./quotation/NotesCard";
import ActionButtons from "./quotation/ActionButtons";

import {
  QuotationData,
  QuotationProduct,
} from "@/types/quotation";

interface PrepareQuotationFormProps {
  quotation: any;
}

export default function PrepareQuotationForm({
  quotation,
}: PrepareQuotationFormProps) {
  const [quotationData, setQuotationData] =
    useState<QuotationData>({
      quotationItems: [],
      subtotal: 0,
      discount: 0,
      gst: 0,
      grandTotal: 0,

      validity: "30 Days",
      deliveryTime: "15 Working Days",
      paymentTerms: "50% Advance",
      notes: "",
    });

  const handleProductsChange = (data: {
    quotationItems: QuotationProduct[];
    subtotal: number;
    discount: number;
    gst: number;
    grandTotal: number;
  }) => {
    setQuotationData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const handleQuotationChange = (
    field: keyof QuotationData,
    value: string
  ) => {
    setQuotationData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          Prepare Quotation
        </h1>

        <p className="mt-2 text-slate-500">
          Create a professional quotation for the
          customer.
        </p>
      </div>

      {/* Customer + Quotation */}

      <div className="grid gap-6 lg:grid-cols-2">
        <CustomerCard quotation={quotation} />

        <QuotationCard
          quotationData={quotationData}
          onChange={handleQuotationChange}
        />
      </div>

      {/* Products */}

      <ProductTable
        onQuotationChange={handleProductsChange}
      />

      {/* Notes */}

      <NotesCard
        quotationData={quotationData}
        onChange={handleQuotationChange}
      />

      {/* Buttons */}

      <ActionButtons
        quotation={quotation}
        quotationData={quotationData}
      />
    </div>
  );
}