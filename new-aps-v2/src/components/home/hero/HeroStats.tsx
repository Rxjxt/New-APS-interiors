import { Award, Factory, PackageCheck } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "26+ Years",
    label: "Experience",
  },
  {
    icon: Factory,
    value: "OEM Ready",
    label: "Manufacturing",
  },
  {
    icon: PackageCheck,
    value: "2000+ Units",
    label: "Monthly Capacity",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.value}
            className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B6945F]/20">
              <Icon className="h-6 w-6 text-[#D2C0A6]" />
            </div>

            <div>
              <p className="text-lg font-semibold text-white">
                {item.value}
              </p>

              <p className="text-sm text-white/70">
                {item.label}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}