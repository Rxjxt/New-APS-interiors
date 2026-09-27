"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ProductsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-28">
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#B6945F]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#5F6F52]/15 blur-3xl" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#D8BE8A] backdrop-blur-md">
            Let's Build Together
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Ready to Transform
            <span className="text-[#D8BE8A]"> Your Workspace?</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're furnishing a startup office, a corporate
            headquarters, or a commercial workspace, our team is ready to
            deliver premium furniture solutions tailored to your needs.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#A68452]"
            >
              <PhoneCall size={20} />
              Get Free Consultation
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#B6945F] hover:bg-white/10"
            >
              View Our Projects

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}