"use client";

interface ViewQuotationDialogProps {
  open: boolean;
  quotation: any;
  onClose: () => void;
}

export default function ViewQuotationDialog({
  open,
  quotation,
  onClose,
}: ViewQuotationDialogProps) {
  if (!open || !quotation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-2xl font-bold">
            Quotation Details
          </h2>

          <button
            onClick={onClose}
            className="text-3xl leading-none text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Body */}

        <div className="grid grid-cols-2 gap-6 p-6">

          <Info
            label="Company"
            value={quotation.companyName}
          />

          <Info
            label="Contact Person"
            value={quotation.contactPerson}
          />

          <Info
            label="Email"
            value={quotation.email}
          />

          <Info
            label="Phone"
            value={quotation.phone}
          />

          <Info
            label="Project Location"
            value={
              quotation.projectLocation || "-"
            }
          />

          <Info
            label="Project Type"
            value={
              quotation.projectType || "-"
            }
          />

          <Info
            label="Quantity"
            value={
              quotation.quantity || "-"
            }
          />

          <Info
            label="Status"
            value={quotation.status}
          />

        </div>

        <div className="px-6 pb-6">

          <h4 className="mb-2 font-semibold">
            Requirements
          </h4>

          <div className="rounded-xl border bg-gray-50 p-4">
            {quotation.requirements || "-"}
          </div>

        </div>

        <div className="border-t p-6">

          <h4 className="mb-3 font-semibold">
            Products
          </h4>

          {quotation.products?.length > 0 ? (

            <ul className="list-disc space-y-2 pl-5">

              {quotation.products.map(
                (product: any) => (
                  <li key={product._id}>
                    {product.name}
                  </li>
                )
              )}

            </ul>

          ) : (

            <p className="text-gray-500">
              General enquiry (No product selected)
            </p>

          )}

        </div>

      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <div>
      <p className="mb-1 text-sm text-gray-500">
        {label}
      </p>

      <p className="font-semibold">
        {value || "-"}
      </p>
    </div>
  );
}