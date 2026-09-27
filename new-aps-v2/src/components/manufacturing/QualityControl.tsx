"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  SearchCheck,
  PackageCheck,
} from "lucide-react";

const qualityPoints = [
  {
    icon: SearchCheck,
    title: "Material Inspection",
    description:
      "Every raw material is inspected before entering production to ensure consistency and durability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Multiple quality checkpoints are maintained throughout manufacturing for flawless execution.",
  },
  {
    icon: PackageCheck,
    title: "Safe Packaging",
    description:
      "Furniture is securely packed using premium materials to ensure damage-free delivery.",
  },
];

export default function QualityControl() {
  return (
    <section className="bg-[#FAF8F5] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
              QUALITY CONTROL
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
              Quality Checked
              <span className="block text-[#B6945F]">
                At Every Stage
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Quality is built into every step of our manufacturing process.
              From raw material inspection to final packaging, every product is
              carefully evaluated to ensure exceptional craftsmanship and
              long-term performance.
            </p>

            <div className="mt-10 space-y-6">
              {qualityPoints.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.4,
                    }}
                    className="flex gap-5 rounded-3xl border border-[#E6DED2] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                      <Icon className="h-7 w-7 text-[#B6945F]" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#0D1117]">
                        {point.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#B6945F]" />
              <span className="font-semibold text-slate-700">
                Every product undergoes a final inspection before dispatch.
              </span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-[#E6DED2] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
              <div className="relative aspect-[4/5]">
                <Image
  src="/images/manufacturing/quality.jpg"
  alt="Quality Inspection"
  width={800}
  height={1000}
  className="h-full w-full object-cover"
  unoptimized
/>
                
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -bottom-8 -left-8 rounded-3xl border border-[#E6DED2] bg-white px-8 py-6 shadow-xl"
            >
              <p className="text-4xl font-bold text-[#B6945F]">
                100%
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Quality
                <br />
                Verified
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}