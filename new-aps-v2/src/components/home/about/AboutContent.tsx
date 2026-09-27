"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "OEM Furniture Manufacturing",
  "Modern Production Facility",
  "Precision Engineering & Finishing",
  "Reliable Quality Assurance",
];

export default function AboutContent() {
  return (
    <motion.div
      className="flex-1 text-center lg:text-left"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-[#D2C0A6] bg-[#F8F5F1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B6945F] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em] md:px-5 md:text-xs md:tracking-[0.30em]">
        ABOUT NEW APS INTERIORS
      </span>

      {/* Heading */}
      <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl md:mt-6 md:text-5xl lg:mt-7">
        Manufacturing Excellence
        <br />
        Built Over{" "}
        <span className="text-[#B6945F]">
          26+ Years
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#666666] sm:text-[17px] md:mx-0 md:mt-6 md:text-lg md:leading-8">
        Since 2000, NEW APS Interiors has been delivering
        premium-quality furniture manufacturing solutions
        for OEM partners, educational institutions,
        commercial projects, and corporate workspaces.
        Every product reflects precision engineering,
        durability, and exceptional craftsmanship.
      </p>

      {/* Features */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-2xl border border-[#E6DED2] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
          >
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#B6945F]" />

            <span className="text-sm font-medium text-[#111111] sm:text-base">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#222222] sm:mt-10 sm:w-auto sm:px-8 sm:py-4">
        Explore Our Factory

        <ArrowRight className="h-5 w-5" />
      </button>
    </motion.div>
  );
}