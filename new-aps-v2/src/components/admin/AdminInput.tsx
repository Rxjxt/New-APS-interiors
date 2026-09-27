import React from "react";

interface AdminInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function AdminInput({
  label,
  error,
  className = "",
  ...props
}: AdminInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${className}
        `}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}