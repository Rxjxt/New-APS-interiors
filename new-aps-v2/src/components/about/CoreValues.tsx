"use client";

import { motion } from "framer-motion";
import {
  Award,
  Gem,
  Handshake,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    title: "Quality",
    icon: Award,
    description:
      "We never compromise on quality. Every product is manufactured with precision and carefully inspected before delivery.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    description:
      "We continuously improve our manufacturing techniques to deliver practical and modern workspace solutions.",
  },
  {
    title: "Integrity",
    icon: Handshake,
    description:
      "Honesty, transparency, and long-term relationships are at the heart of everything we do.",
  },
  {
    title: "Craftsmanship",
    icon: Gem,
    description:
      "Every printer cabinet and furniture solution reflects our attention to detail and manufacturing expertise.",
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-[#B6945F]/30 bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8C58A]">
            Core Values
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            The Principles That
            <span className="block text-[#B6945F]">
              Drive Everything We Do
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            For more than two decades, our success has been built on
            craftsmanship, integrity, innovation, and an unwavering commitment
            to delivering quality manufacturing solutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Line */}

          <div className="absolute left-0 right-0 top-9 hidden h-[2px] bg-gradient-to-r from-[#B6945F]/20 via-[#B6945F] to-[#B6945F]/20 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">

            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15,
                }}
                className="relative text-center"
              >

                {/* Circle */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#0F172A] bg-[#B6945F] shadow-[0_0_30px_rgba(182,148,95,0.4)]">

                  <value.icon
                    size={34}
                    className="text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {value.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}