"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  "25+ Years of Manufacturing Experience",
  "Own In-House Manufacturing Facility",
  "Specialists in Premium Printer Cabinets",
  "Customized Office Furniture Solutions",
  "Strict Quality Control at Every Stage",
  "Timely Delivery & Reliable Support",
];

export default function WhyChoose() {
  return (
    <section className="bg-[#FDFBF8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Trusted Manufacturing
              <span className="block text-[#B6945F]">
                Built Around Quality
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              At NEW APS INTERIORS, quality isn't just a promise—it's part of
              every step of our manufacturing process. From premium materials
              to precision workmanship, we ensure every product delivers
              durability, functionality, and long-term value.
            </p>

            <div className="mt-10 space-y-5">

              {reasons.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#B6945F]/10">

                    <CheckCircle2
                      size={18}
                      className="text-[#B6945F]"
                    />

                  </div>

                  <p className="text-lg font-medium text-slate-700">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <Link
              href="/contact"
              className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#0F172A] px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B6945F]"
            >
              Start Your Project

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px]">

              <Image
                src="/images/about/work.png"
                alt="Factory"
                width={900}
                height={1100}
                className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-8 shadow-2xl">

              <p className="text-sm uppercase tracking-[0.2em] text-[#B6945F]">
                Excellence Since
              </p>

              <h3 className="mt-2 text-5xl font-bold text-slate-900">
                2000
              </h3>

              <p className="mt-3 max-w-[220px] leading-7 text-slate-600">
                Delivering reliable manufacturing solutions with quality,
                precision and trust.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}