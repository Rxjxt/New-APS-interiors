"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function ServiceHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/services/hero.png"
        alt="Manufacturing Services"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      {/* Glow */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="transition hover:text-[#B6945F]"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#B6945F]">
              Services
            </span>
          </div>

          {/* Badge */}

          <span className="inline-flex rounded-full border border-[#B6945F]/40 bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8C58A] backdrop-blur">
            Manufacturing Solutions
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Complete Office
            <span className="block text-[#B6945F]">
              Manufacturing Services
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            From premium printer cabinets to customized office furniture,
            NEW APS INTERIORS delivers complete manufacturing solutions
            designed for durability, precision, and modern workplaces.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B6945F] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(182,148,95,0.45)]"
            >
              Request Quote

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:border-[#B6945F]"
            >
              View Products
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-8 border-t border-white/15 pt-8">
            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">
                25+
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Years
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">
                100%
              </h3>

              <p className="mt-2 text-sm text-slate-300">
                Custom
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}