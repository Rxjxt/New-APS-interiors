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
      <div className="relative w-full max-w-[500px]">
        {/* Background Glow */}
        <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-[#D2C0A6]/20 blur-3xl sm:-left-8 sm:-top-8 sm:h-48 sm:w-48 lg:-left-10 lg:-top-10 lg:h-56 lg:w-56" />

        {/* Image */}
        <div className="overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white shadow-[0_20px_55px_rgba(0,0,0,0.08)] lg:rounded-[28px]">
          <div className="relative h-[280px] sm:h-[340px] lg:h-[400px] w-full">
            <Image
              src="/images/about/manufacturing-bw.png"
              alt="Manufacturing Facility"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Floating Stats Card */}
        <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#E6DED2] bg-white px-5 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.08)] sm:-bottom-5 sm:left-5 lg:-bottom-6 lg:left-6">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-[#111111]">
              26+
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B6945F]">
              YEARS
            </p>

            <p className="text-sm text-[#666666]">
              Manufacturing Excellence
            </p>

            <p className="text-xs text-[#999999]">
              Since 2000
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}