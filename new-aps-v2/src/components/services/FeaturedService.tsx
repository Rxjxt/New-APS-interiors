"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Built with premium-grade materials",
  "Custom dimensions and configurations",
  "Designed for durability and functionality",
  "Suitable for modern office environments",
];

export default function FeaturedService() {
  return (
    <section className="bg-[#FDFBF8] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative h-[600px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/services/featured-printer-cabinet.png"
              alt="Premium Printer Cabinet"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-6 shadow-xl">
            <h3 className="text-4xl font-bold text-[#B6945F]">25+</h3>
            <p className="mt-2 text-sm text-slate-600">
              Years of Manufacturing Excellence
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B6945F]">
            Featured Product
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Premium Printer Cabinets
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Printer cabinets are our core specialization. Every unit is
            manufactured with precision engineering, ensuring durability,
            efficient space utilization, and a clean professional appearance
            suitable for modern workplaces.
          </p>

          <div className="mt-10 space-y-5">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-1 text-[#B6945F]"
                  size={22}
                />
                <p className="text-slate-700">{feature}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Request a Quote
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}