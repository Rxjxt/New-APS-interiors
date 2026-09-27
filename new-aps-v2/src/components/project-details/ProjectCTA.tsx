"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  "Custom Manufacturing",
  "Turnkey Office Interiors",
  "Pan India Delivery",
];

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0D1117] py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#B6945F]/15 blur-[120px]" />

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#B6945F]/10 blur-[120px]" />

      <div className="absolute -right-20 top-20 h-60 w-60 rounded-full bg-white/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          {/* Decorative Border */}
          <div className="absolute inset-0 rounded-[40px] ring-1 ring-white/5" />

          {/* Gold Top Line */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#B6945F] to-transparent" />

          <div className="relative px-8 py-20 md:px-14 lg:px-24">
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B6945F]/30 bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-[#D5B17A] uppercase">
                <Sparkles size={16} />

                Ready To Build
              </div>
            </motion.div>

            {/* Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mx-auto mt-8 max-w-4xl text-center text-4xl font-bold leading-tight text-white md:text-6xl"
            >
              Ready to Transform
              <span className="block bg-gradient-to-r from-[#F6D39A] via-[#B6945F] to-[#F6D39A] bg-clip-text text-transparent">
                Your Workspace?
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mx-auto mt-8 max-w-3xl text-center text-lg leading-9 text-slate-300"
            >
              Whether you're planning a new office, renovating an existing
              workspace, or furnishing an entire corporate floor, NEW APS
              INTERIORS delivers premium furniture and interior solutions
              designed around your business.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A6844E] hover:shadow-[0_20px_60px_rgba(182,148,95,0.45)]"
              >
                Start Your Project

                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-9 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-[#B6945F] hover:bg-white/10"
              >
                <Phone size={20} />

                Contact Us
              </Link>
            </motion.div>

            {/* Divider */}

            <div className="mx-auto mt-16 h-px max-w-4xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Features */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="mt-12 grid gap-6 text-center md:grid-cols-3"
            >
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B6945F]/15">
                    <CheckCircle2
                      className="text-[#D6B37A]"
                      size={18}
                    />
                  </div>

                  <span className="text-base font-medium text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}