import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        group
        relative
        overflow-hidden
        rounded-[30px]

        border
        border-[#D2C0A6]/15

        bg-gradient-to-br
        from-white/10
        via-white/5
        to-transparent

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#D2C0A6]/30

        hover:shadow-[0_25px_70px_rgba(210,192,166,0.15)]
        `,
        className
      )}
    >
      {/* Glass Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70" />

      {/* Beige Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D2C0A6]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D2C0A6]/15" />

      {children}
    </div>
  );
}