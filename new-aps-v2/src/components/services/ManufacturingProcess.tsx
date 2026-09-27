"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  PencilRuler,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

const process = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description:
      "We understand your workspace, dimensions, functionality, and customization requirements.",
  },
  {
    icon: PencilRuler,
    title: "Design & Planning",
    description:
      "Our team prepares detailed layouts and manufacturing plans to ensure precision and efficiency.",
  },
  {
    icon: Factory,
    title: "Precision Manufacturing",
    description:
      "Products are manufactured using quality materials and modern machinery under skilled supervision.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Every product undergoes thorough quality checks to ensure durability, finish, and reliability.",
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    description:
      "We ensure timely delivery and professional installation for a hassle-free customer experience.",
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B6945F]">
            Our Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            From Concept to Completion
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every project follows a structured process focused on quality,
            precision, and customer satisfaction.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-[#B6945F]/20 lg:block" />

          <div className="space-y-12">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="mb-6 inline-flex rounded-2xl bg-[#B6945F]/10 p-4">
                        <Icon className="h-8 w-8 text-[#B6945F]" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 hidden h-16 w-16 items-center justify-center rounded-full bg-[#B6945F] text-xl font-bold text-white shadow-xl lg:flex">
                    {index + 1}
                  </div>

                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}