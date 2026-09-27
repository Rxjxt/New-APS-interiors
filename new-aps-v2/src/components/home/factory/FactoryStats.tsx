"use client";

const stats = [
  {
    value: "26+",
    label: "Years Experience",
  },
  {
    value: "2000+",
    label: "Monthly Capacity",
  },
  {
    value: "OEM",
    label: "Manufacturing",
  },
  {
    value: "100%",
    label: "Quality Focus",
  },
];

export default function FactoryStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.value}
          className="rounded-2xl border border-[#E6DED2] bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-4xl font-bold text-[#111111]">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-[#666666]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}