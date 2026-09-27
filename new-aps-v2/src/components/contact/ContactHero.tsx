"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/contact/contact-hero.png"
        alt="Contact NEW APS INTERIORS"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-3 text-sm text-white/80">
            <Link
              href="/"
              className="transition-colors hover:text-[#D8BE8A]"
            >
              Home
            </Link>

            <ArrowRight size={14} />

            <span className="text-[#D8BE8A]">
              Contact
            </span>
          </div>

          {/* Badge */}

          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#D8BE8A] backdrop-blur-md">
            Let's Connect
          </span>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Let's Build Your
            <span className="block text-[#D8BE8A]">
              Dream Workspace
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Whether you're planning a new office,
            renovating an existing workspace,
            or looking for customized furniture,
            our experts are ready to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}