"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutVisual() {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative w-full max-w-[520px]">
        {/* Background Glow */}
        <div className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-[#D2C0A6]/20 blur-3xl sm:-left-8 sm:-top-8 sm:h-52 sm:w-52 lg:-left-10 lg:-top-10 lg:h-60 lg:w-60" />

        {/* Image */}
        <div className="overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)] lg:rounded-[30px]">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[460px] w-full">
            <Image
              src="/images/about/manufacturing-bw.png"
              alt="Manufacturing Facility"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#E6DED2] bg-white px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:-bottom-6 sm:left-6 sm:px-6 sm:py-5 lg:-bottom-8 lg:left-8 lg:rounded-3xl lg:px-7 lg:py-5">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-[#111111] sm:text-4xl">
              26+
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B6945F] sm:text-xs">
              YEARS
            </p>

            <p className="text-xs text-[#666666] sm:text-sm">
              Manufacturing Excellence
            </p>

            <p className="text-[11px] text-[#999999] sm:text-xs">
              Since 2000
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}