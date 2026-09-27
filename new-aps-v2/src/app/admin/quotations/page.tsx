"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import {
  getQuotations,
  deleteQuotation,
  exportQuotations,
} from "@/services/quotation.service";

import QuotationTable from "./QuotationTable";
import DeleteQuotationDialog from "./DeleteQuotationDialog";

export default function QuotationsPage() {
  const [quotations, setQuotations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] =
    useState<string | null>(null);

  const [deleting, setDeleting] =
    useState(false);

  useEffect(() => {
    const fetchQuotations = async () => {
      try {
        const data = await getQuotations();

        setQuotations(data.quotations || []);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load quotations."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuotations();
  }, []);

  const filteredQuotations = useMemo(() => {
    return quotations.filter((quotation) =>
      quotation.companyName
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [quotations, search]);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setDeleting(true);

      await deleteQuotation(deleteId);

      setQuotations((prev) =>
        prev.filter(
          (quotation) =>
            quotation._id !== deleteId
        )
      );

      toast.success(
        "Quotation deleted successfully."
      );

      setDeleteId(null);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to delete quotation."
      );
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <h2 className="text-xl font-semibold">
        Loading Quotations...
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

  <div>
    <h1 className="text-3xl font-bold">
      Quotations
    </h1>

    <p className="mt-2 text-gray-500">
      Manage quotation requests.
    </p>
  </div>

  <button
    onClick={exportQuotations}
    className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
  >
    Export Excel
  </button>

</div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-6">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-gray-500">
            Total Quotations
          </h4>

          <h2 className="mt-3 text-4xl font-bold">
            {quotations.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-gray-500">
            New
          </h4>

          <h2 className="mt-3 text-4xl font-bold text-yellow-600">
            {
              quotations.filter(
                (q) => q.status === "New"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-gray-500">
            Contacted
          </h4>

          <h2 className="mt-3 text-4xl font-bold text-green-600">
            {
              quotations.filter(
                (q) =>
                  q.status ===
                  "Contacted"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h4 className="text-gray-500">
            Quoted
          </h4>

          <h2 className="mt-3 text-4xl font-bold text-blue-600">
            {
              quotations.filter(
                (q) =>
                  q.status ===
                  "Quoted"
              ).length
            }
          </h2>
        </div>

      </div>
      <div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">Won</p>

  <h2 className="mt-3 text-5xl font-bold text-green-600">
    {
      quotations.filter(
        (q) => q.status === "Won"
      ).length
    }
  </h2>
</div>

<div className="rounded-2xl bg-white p-6 shadow">
  <p className="text-gray-500">Lost</p>

  <h2 className="mt-3 text-5xl font-bold text-red-600">
    {
      quotations.filter(
        (q) => q.status === "Lost"
      ).length
    }
  </h2>
</div>

      {/* Search */}

      <input
        placeholder="Search company..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500"
      />

      {/* Table */}

      <QuotationTable
        quotations={filteredQuotations}
        onDelete={setDeleteId}
      />

      <DeleteQuotationDialog
        open={!!deleteId}
        loading={deleting}
        onDelete={handleDelete}
        onClose={() =>
          setDeleteId(null)
        }
      />

    </div>
  );
}