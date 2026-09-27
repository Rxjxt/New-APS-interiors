"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/processSteps";

export default function ManufacturingProcess() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
            How We Work
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            From Concept to Completion
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Every project follows a structured workflow to ensure precision,
            quality, and a seamless experience from consultation to
            installation.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Connector Line */}

          <div className="absolute left-0 right-0 top-16 hidden h-[2px] bg-gradient-to-r from-[#DDD6C8] via-[#B6945F] to-[#DDD6C8] lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative"
                >
                  {/* Icon Circle */}

                  <div className="relative z-20 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-slate-900 shadow-[0_15px_40px_rgba(15,23,42,0.15)] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#B6945F]">
                    <Icon
                      size={34}
                      className="text-white transition-transform duration-500 group-hover:rotate-6"
                    />
                  </div>

                  {/* Card */}

                  <div className="mt-[-24px] rounded-[28px] border border-[#E8E2D7] bg-white px-7 pb-8 pt-12 shadow-[0_15px_45px_rgba(15,23,42,0.06)] transition-all duration-500 group-hover:border-[#B6945F]/40 group-hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
                    {/* Number */}

                    <span className="inline-flex rounded-full bg-[#F8F6F2] px-3 py-1 text-xs font-bold tracking-[0.18em] text-[#B6945F]">
                      STEP {step.number}
                    </span>

                    {/* Title */}

                    <h3 className="mt-5 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#B6945F]">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {step.description}
                    </p>
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