"use client";

interface LogoutModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({
  open,
  onClose,
  onConfirm,
}: LogoutModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[400px] rounded-2xl bg-white p-6 shadow-2xl">

        <h2 className="text-2xl font-bold">
          Logout
        </h2>

        <p className="mt-3 text-gray-600">
          Are you sure you want to logout from the admin panel?
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}