import React from "react";

interface Props
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export default function AdminTextarea({
  label,
  error,
  className = "",
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <textarea
        {...props}
        className={`
          w-full
          rounded-xl
          border
          border-gray-300
          px-4
          py-3
          outline-none
          resize-none
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