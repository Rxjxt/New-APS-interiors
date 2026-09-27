"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">
      <Image
        src="/images/gallery/hero.png"
        alt="Gallery"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-8 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="transition hover:text-[#B6945F]">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#B6945F]">Gallery</span>
          </div>

          <span className="inline-flex rounded-full border border-[#B6945F]/40 bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8C58A] backdrop-blur">
            Our Work
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Explore Our
            <span className="block text-[#B6945F]">
              Manufacturing Gallery
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            Browse our collection of premium printer cabinets, office furniture,
            manufacturing facilities, and completed projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}