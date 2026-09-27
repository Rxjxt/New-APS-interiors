"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Advanced Manufacturing Facility",
  "OEM & Bulk Production",
  "Precision Quality Control",
];

export default function ManufacturingHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-36 pb-24">
      {/* Background Glow */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#B6945F]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
              ADVANCED MANUFACTURING
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-[#0D1117] md:text-6xl">
              Precision
              <br />
              Manufacturing
              <br />
              <span className="text-[#B6945F]">Built for Excellence</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              At NEW APS INTERIORS, we combine modern manufacturing technology,
              skilled craftsmanship, and rigorous quality control to produce
              premium office furniture that meets international standards for
              durability and design.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6945F]/10">
                    <CheckCircle2 className="h-5 w-5 text-[#B6945F]" />
                  </div>

                  <span className="text-lg font-medium text-slate-700">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button className="group inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A6844E] hover:shadow-xl">
                Explore Process

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-[#B6945F] px-8 py-4 font-semibold text-[#B6945F] transition-all duration-300 hover:bg-[#B6945F] hover:text-white">
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-[#E6DED2] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/manufacturing/factory-hero.png"
                  alt="Manufacturing Facility"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -bottom-8 -left-8 rounded-3xl border border-[#E6DED2] bg-white px-8 py-6 shadow-2xl"
            >
              <p className="text-4xl font-bold text-[#B6945F]">26+</p>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Years of
                <br />
                Manufacturing
              </p>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-8 top-10 rounded-3xl border border-[#E6DED2] bg-white px-8 py-6 shadow-2xl"
            >
              <p className="text-3xl font-bold text-[#0D1117]">100%</p>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Quality
                <br />
                Inspected
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}