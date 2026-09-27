"use client";

import { motion } from "framer-motion";
import {
  Factory,
  CheckCircle2,
  ArrowRight,
  Boxes,
  Building2,
  Truck,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
  },
  {
    icon: Boxes,
    title: "Bulk Commercial Orders",
  },
  {
    icon: Building2,
    title: "OEM & Corporate Projects",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
  },
];

export default function OEMSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] border border-[#E6DED2] bg-[#0D1117] text-white"
        >
          <div className="grid items-center gap-16 p-10 lg:grid-cols-2 lg:p-16">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-[#B6945F]/20 px-4 py-2 text-sm font-semibold tracking-wide text-[#E8C99B]">
                OEM MANUFACTURING
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                Your Trusted
                <br />
                Manufacturing Partner
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                From concept to completion, NEW APS INTERIORS partners with
                businesses, architects, designers and organizations to
                manufacture premium office furniture at scale with consistent
                quality and timely delivery.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#B6945F]" />
                  <span>Custom Design & Manufacturing</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#B6945F]" />
                  <span>OEM & Institutional Projects</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#B6945F]" />
                  <span>Quality Assurance at Every Stage</span>
                </div>

                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#B6945F]" />
                  <span>Nationwide Logistics Support</span>
                </div>
              </div>

              <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A6844E] hover:shadow-xl">
                Become an OEM Partner

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right */}
            <div className="grid gap-6 sm:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/20">
                      <Icon className="h-8 w-8 text-[#E8C99B]" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}