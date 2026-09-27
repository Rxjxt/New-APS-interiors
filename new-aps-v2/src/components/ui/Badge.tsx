import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
          inline-flex
          w-fit
          items-center
          justify-center
          rounded-full
          border
          border-[#D2C0A6]/30
          bg-[#F7F3ED]
          px-3
          py-1.5
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.22em]
          text-[#B6945F]
          transition-all
          duration-300
          sm:px-4
          sm:py-2
          sm:text-[11px]
          sm:tracking-[0.28em]
          md:px-5
          md:text-xs
          md:tracking-[0.35em]
        `,
        className
      )}
    >
      {children}
    </span>
  );
}