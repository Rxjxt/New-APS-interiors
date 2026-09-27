"use client";

interface DeleteProductDialogProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
  loading?: boolean;
}

export default function DeleteProductDialog({
  open,
  onClose,
  onDelete,
  loading = false,
}: DeleteProductDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold">
          Delete Product
        </h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to delete this product?
          <br />
          This action cannot be undone.
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
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