"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureItemProps {
  title: string;
  description: string;
}

export default function FeatureItem({
  title,
  description,
}: FeatureItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="flex gap-4 sm:gap-5"
    >
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B6945F]/10 sm:h-12 sm:w-12">
        <Check className="h-5 w-5 text-[#B6945F] sm:h-6 sm:w-6" />
      </div>

      {/* Content */}
      <div>
        <h4 className="text-base font-semibold text-[#111111] sm:text-lg">
          {title}
        </h4>

        <p className="mt-2 text-sm leading-6 text-[#666666] sm:text-[15px] sm:leading-7">
          {description}
        </p>
      </div>
    </motion.div>
  );
}