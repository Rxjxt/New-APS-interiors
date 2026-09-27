"use client";

import { motion } from "framer-motion";
import {
  PencilRuler,
  Boxes,
  Scissors,
  Hammer,
  ShieldCheck,
  Truck,
} from "lucide-react";

const process = [
  {
    icon: PencilRuler,
    step: "01",
    title: "Design & Planning",
    description:
      "Understanding client requirements and preparing detailed furniture layouts with precision.",
  },
  {
    icon: Boxes,
    step: "02",
    title: "Material Selection",
    description:
      "Selecting premium boards, laminates, hardware, and accessories for long-lasting quality.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Precision Cutting",
    description:
      "Computer-assisted cutting ensures accurate dimensions and minimal material wastage.",
  },
  {
    icon: Hammer,
    step: "04",
    title: "Assembly & Finishing",
    description:
      "Experienced craftsmen assemble every product with flawless finishing and detailing.",
  },
  {
    icon: ShieldCheck,
    step: "05",
    title: "Quality Inspection",
    description:
      "Every product undergoes rigorous quality checks before dispatch.",
  },
  {
    icon: Truck,
    step: "06",
    title: "Packaging & Delivery",
    description:
      "Secure packaging and reliable logistics ensure safe delivery across India.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-white py-28">
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
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            From Concept
            <span className="block text-[#B6945F]">
              To Completion
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every furniture solution is manufactured through a structured
            process ensuring precision, consistency, and premium quality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#E6DED2] lg:block" />

          <div className="space-y-14">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:text-right" : ""
                    }`}
                  >
                    <div className="inline-flex items-center gap-4 rounded-3xl border border-[#E6DED2] bg-[#FAF8F5] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                        <Icon className="h-8 w-8 text-[#B6945F]" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold tracking-wider text-[#B6945F]">
                          STEP {item.step}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-[#0D1117]">
                          {item.title}
                        </h3>

                        <p className="mt-3 max-w-md text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative hidden lg:block">
                    <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#B6945F] shadow-lg" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}