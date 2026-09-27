"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

import { getQuotationById } from "@/services/quotation.service";
import PrepareQuotationForm from "@/components/admin/PrepareQuotationForm";

export default function PrepareQuotationPage() {
  const params = useParams();

  const id = params.id as string;

  const [quotation, setQuotation] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotation = async () => {
      try {
        const data = await getQuotationById(id);

        setQuotation(data.quotation);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load quotation.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchQuotation();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Quotation...
        </h2>
      </div>
    );
  }

  if (!quotation) {
    return (
      <div className="flex h-96 items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Quotation not found.
        </h2>
      </div>
    );
  }

  return (
    <PrepareQuotationForm quotation={quotation} />
  );
}