import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <GlassCard
      className={cn(
        "group h-full p-8 transition-all duration-300 hover:-translate-y-2",
        className
      )}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D2C0A6]/20 bg-[#D2C0A6]/10 text-[#D2C0A6] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-[#AEB6C2]">
        {description}
      </p>
    </GlassCard>
  );
}