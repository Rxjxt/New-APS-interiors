"use client";

interface CustomerCardProps {
  quotation: any;
}

export default function CustomerCard({
  quotation,
}: CustomerCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Customer Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Information submitted by the customer.
        </p>
      </div>

      <div className="space-y-5">

        <div>
          <label className="text-sm font-medium text-gray-500">
            Quotation No.
          </label>

          <p className="mt-1 text-lg font-semibold text-blue-600">
            {quotation.quotationNumber}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Company
          </label>

          <p className="mt-1 font-semibold">
            {quotation.companyName}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Contact Person
          </label>

          <p className="mt-1">
            {quotation.contactPerson}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Email
          </label>

          <p className="mt-1 break-all">
            {quotation.email}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Phone
          </label>

          <p className="mt-1">
            {quotation.phone}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Project Type
          </label>

          <p className="mt-1">
            {quotation.projectType || "-"}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Project Location
          </label>

          <p className="mt-1">
            {quotation.projectLocation || "-"}
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-500">
            Requirements
          </label>

          <div className="mt-2 rounded-xl bg-gray-50 p-4 text-sm leading-7">
            {quotation.requirements ||
              "No requirements provided."}
          </div>
        </div>

      </div>
    </div>
  );
}