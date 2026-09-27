"use client";

interface DeleteQuotationDialogProps {
  open: boolean;
  loading: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteQuotationDialog({
  open,
  loading,
  onClose,
  onDelete,
}: DeleteQuotationDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Delete Quotation
        </h2>

        <p className="mt-4 text-gray-600">
          Are you sure you want to delete this quotation?
          <br />
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            disabled={loading}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}