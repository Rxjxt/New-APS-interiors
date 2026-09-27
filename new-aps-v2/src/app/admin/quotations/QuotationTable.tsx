"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import ViewQuotationDialog from "./ViewQuotationDialog";

import {
  updateQuotationStatus,
  downloadQuotationPDF,
} from "@/services/quotation.service";

interface QuotationTableProps {
  quotations: any[];
  onDelete: (id: string) => void;
}

export default function QuotationTable({
  quotations,
  onDelete,
}: QuotationTableProps) {
  const [selectedQuotation, setSelectedQuotation] =
    useState<any>(null);

  const [items, setItems] = useState(quotations);
  const router = useRouter();

  const handleStatusChange = async (
    id: string,
    status: string
  ) => {
    try {
      await updateQuotationStatus(id, status);

      setItems((prev) =>
        prev.map((quotation) =>
          quotation._id === id
            ? {
                ...quotation,
                status,
              }
            : quotation
        )
      );

      toast.success(
        "Quotation status updated."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update quotation status."
      );
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
            <th className="p-4 text-left">
  Quotation No.
</th>
              <th className="p-4 text-left">
                Company
              </th>

              <th className="p-4 text-left">
                Contact
              </th>

              <th className="p-4 text-left">
                Phone
              </th>

              <th className="p-4 text-left">
                Products
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>

              <th className="p-4 text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {items.length > 0 ? (

              items.map((quotation) => (

                <tr
                  key={quotation._id}
                  className="border-t hover:bg-gray-50"
                >
                   <td className="p-4 font-medium text-blue-600">
                     {quotation.quotationNumber}
                   </td>                 
                  <td className="p-4 font-semibold">
                    {quotation.companyName}
                  </td>

                  <td className="p-4">
                    {quotation.contactPerson}
                  </td>

                  <td className="p-4">
                    {quotation.phone}
                  </td>

                  <td className="p-4">
                    {quotation.products?.length}
                  </td>

                  <td className="p-4">

                    <select
                      value={quotation.status}
                      onChange={(e) =>
                        handleStatusChange(
                          quotation._id,
                          e.target.value
                        )
                      }
                      className="rounded-lg border px-3 py-2"
                    >
                      <option>
                        New
                      </option>

                      <option>
                        Contacted
                      </option>

                      <option>
                        Quoted
                      </option>

                      <option>
                        Won
                      </option>

                      <option>
                        Lost
                      </option>

                    </select>

                  </td>

                  <td className="p-4">
                    {new Date(
                      quotation.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">

  <div className="flex flex-wrap gap-2">

    <button
      onClick={() =>
        setSelectedQuotation(
          quotation
        )
      }
      className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      View
    </button>

    {/* ⭐ Paste Here */}
    <button
      onClick={() =>
        router.push(
          `/admin/quotations/${quotation._id}`
        )
      }
      className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
    >
      Prepare
    </button>

    <button
      onClick={() =>
        downloadQuotationPDF(
          quotation._id
        )
      }
      className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
    >
      PDF
    </button>

    <button
      onClick={() =>
        onDelete(
          quotation._id
        )
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
                  colSpan={8}
                  className="py-10 text-center text-gray-500"
                >
                  No Quotations Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      <ViewQuotationDialog
        open={!!selectedQuotation}
        quotation={selectedQuotation}
        onClose={() =>
          setSelectedQuotation(null)
        }
      />

    </>
  );
}