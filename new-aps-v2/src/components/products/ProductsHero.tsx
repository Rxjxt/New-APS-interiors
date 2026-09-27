"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <Image
        src="/images/products/hero.png"
        alt="Premium Office Furniture"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center text-sm text-white/80">
            <Link href="/" className="hover:text-[#B6945F]">
              Home
            </Link>

            <ChevronRight className="mx-2 h-4 w-4" />

            <span className="text-[#B6945F]">Products</span>
          </div>

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F] backdrop-blur-md">
            Premium Collection
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Premium Office
            <span className="block text-[#B6945F]">
              Furniture Collection
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Explore our range of premium office furniture including executive
            desks, ergonomic chairs, modular workstations, conference tables,
            storage solutions, reception furniture and custom-made interiors.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition hover:bg-[#A6844E]"
            >
              Request Catalogue
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#0D1117]"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}