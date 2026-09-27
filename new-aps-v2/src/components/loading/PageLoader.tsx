"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F6F2]">
      <div className="flex flex-col items-center">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative h-20 w-20"
        >
          <div className="absolute inset-0 rounded-full border-4 border-[#E7D8C4]" />

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#B6945F]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="mt-8 text-xl font-bold tracking-[0.25em] text-[#0F172A]"
        >
          NEW APS
        </motion.h2>

        <p className="mt-2 text-xs uppercase tracking-[0.45em] text-slate-500">
          INTERIORS
        </p>
      </div>
    </div>
  );
}