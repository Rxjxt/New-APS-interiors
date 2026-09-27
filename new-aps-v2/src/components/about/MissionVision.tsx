"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    description:
      "To manufacture premium-quality printer cabinets and customized office furniture that combine durability, functionality, and modern design. We strive to exceed customer expectations through precision manufacturing, timely delivery, and continuous innovation.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To become one of India's most trusted office furniture manufacturers by delivering reliable, innovative, and sustainable workspace solutions while maintaining the highest standards of quality and craftsmanship.",
    icon: Eye,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF8] py-24">
      {/* Decorative Background */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#B6945F]/10 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[#EAF2F8] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
            Mission & Vision
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Driven by Quality,
            <span className="block text-[#B6945F]">
              Inspired by Innovation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every product we manufacture reflects our commitment to
            craftsmanship, customer satisfaction, and continuous improvement.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-[#B6945F]/10 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Accent */}
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#B6945F]/5 blur-3xl transition-all duration-500 group-hover:scale-125" />

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                <card.icon
                  size={30}
                  className="text-[#B6945F]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-6 leading-8 text-slate-600">
                {card.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-10 h-1 w-20 rounded-full bg-[#B6945F] transition-all duration-500 group-hover:w-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}