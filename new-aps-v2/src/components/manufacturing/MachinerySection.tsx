"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Scissors,
  Hammer,
  Paintbrush,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const machines = [
  {
    icon: Cpu,
    title: "CNC Machinery",
    description:
      "High-precision CNC machines ensure accurate cutting and consistent production quality for every component.",
  },
  {
    icon: Scissors,
    title: "Precision Cutting",
    description:
      "Advanced cutting equipment minimizes material wastage while maintaining exceptional dimensional accuracy.",
  },
  {
    icon: Hammer,
    title: "Assembly Line",
    description:
      "Dedicated assembly stations enable efficient production with strict quality checks at every stage.",
  },
  {
    icon: Paintbrush,
    title: "Premium Finishing",
    description:
      "Modern finishing processes deliver smooth surfaces, premium textures and long-lasting durability.",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description:
      "Flexible manufacturing setup allows us to build customized furniture for every workspace requirement.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product undergoes detailed inspection before packaging to maintain our quality standards.",
  },
];

export default function MachinerySection() {
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
            MODERN MACHINERY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Technology That Drives
            <span className="block text-[#B6945F]">
              Manufacturing Excellence
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our manufacturing unit is equipped with modern machinery and
            precision tools that enable us to deliver premium-quality office
            furniture with consistency and efficiency.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {machines.map((machine, index) => {
            const Icon = machine.icon;

            return (
              <motion.div
                key={machine.title}
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
                className="group rounded-[30px] border border-[#E6DED2] bg-[#FAF8F5] p-8 shadow-sm transition-all duration-300 hover:border-[#B6945F]/40 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/10 transition-colors duration-300 group-hover:bg-[#B6945F]">
                  <Icon className="h-8 w-8 text-[#B6945F] transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0D1117]">
                  {machine.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {machine.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}