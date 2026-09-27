"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/projects/hero.jpg"
        alt="Completed Office Furniture Projects"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center text-sm text-white/80">
            <Link
              href="/services"
  className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0D1117]"
            >
              Home
            </Link>

            <ChevronRight className="mx-2 h-4 w-4" />

            <span className="text-[#B6945F]">Projects</span>
          </div>

          {/* Badge */}
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B6945F] backdrop-blur-md">
            Our Portfolio
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Projects That
            <span className="block text-[#B6945F]">
              Define Workspaces
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Explore our portfolio of premium office furniture and interior
            projects delivered for corporate offices, institutions, commercial
            spaces, and businesses across India with exceptional craftsmanship
            and precision.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#a8844d]"
            >
              Start Your Project
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#0D1117]"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border-2 border-white/50">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
}