import Badge from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`mb-10 md:mb-12 lg:mb-16 flex flex-col ${
        isCenter
          ? "items-center text-center"
          : "items-center text-center lg:items-start lg:text-left"
      }`}
    >
      <Badge>{badge}</Badge>

      <h2
        className={`mt-5 max-w-5xl font-bold leading-[1.05] tracking-[-0.03em]
        text-4xl sm:text-5xl md:mt-6 md:text-6xl lg:mt-8 lg:text-7xl ${
          isDark ? "text-white" : "text-[#111111]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-3xl text-base leading-8 sm:text-lg md:text-xl ${
            isDark ? "text-white/80" : "text-[#666666]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}