"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Factory,
  Truck,
  Award,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description:
      "We source high-quality materials to ensure durability, aesthetics and long-term performance.",
  },
  {
    icon: Factory,
    title: "100% Custom Manufacturing",
    description:
      "Every product is manufactured according to your workspace requirements and specifications.",
  },
  {
    icon: Wrench,
    title: "Precision Craftsmanship",
    description:
      "Experienced professionals ensure flawless finishing and exceptional build quality.",
  },
  {
    icon: BadgeCheck,
    title: "OEM Expertise",
    description:
      "Trusted manufacturing partner for businesses, architects and interior designers.",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description:
      "Reliable logistics network ensuring safe delivery across India.",
  },
  {
    icon: Award,
    title: "26+ Years Experience",
    description:
      "Delivering premium office furniture solutions with decades of manufacturing excellence.",
  },
];

export default function WhyProducts() {
  return (
    <section className="bg-[#FAF8F5] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
            WHY OUR PRODUCTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Built for Quality.
            <span className="block text-[#B6945F]">
              Designed for Performance.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every product is thoughtfully engineered to deliver exceptional
            durability, functionality and aesthetics for modern workplaces.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[30px] border border-[#E6DED2] bg-white p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                  <Icon className="h-8 w-8 text-[#B6945F]" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0D1117]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}