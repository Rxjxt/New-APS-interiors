import React from "react";

export default function FormCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 mb-8">
      <h2 className="text-xl font-bold mb-6">
        {title}
      </h2>

      {children}
    </div>
  );
}