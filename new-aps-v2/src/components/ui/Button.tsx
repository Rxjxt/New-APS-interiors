import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#D2C0A6]/40",
  {
    variants: {
      variant: {
        primary:
          "rounded-full border border-transparent bg-[#D2C0A6] text-[#111111] shadow-[0_8px_30px_rgba(210,192,166,0.20)] hover:-translate-y-1 hover:bg-[#DFCDB5] hover:shadow-[0_16px_40px_rgba(210,192,166,0.35)]",

        secondary:
          "rounded-full border border-[#D8CCBC] bg-white text-[#111111] shadow-sm hover:border-[#D2C0A6] hover:bg-[#FAF6F0] hover:-translate-y-0.5",

        outline:
          "rounded-full border border-[#E6DED2] bg-[#FFFFFF]/70 text-[#333333] backdrop-blur-xl hover:border-[#D2C0A6] hover:bg-white",

        ghost:
          "rounded-full text-[#7A6245] hover:bg-[#F5EFE6]",

        destructive:
          "rounded-full bg-red-600 text-white hover:bg-red-700",

        link:
          "text-[#B6945F] underline-offset-4 hover:underline",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-10 px-5 text-sm",

        default: "h-12 px-6 text-sm",

        lg: "h-14 px-8 text-base",

        hero: "h-14 px-9 text-base",

        icon: "size-12",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };