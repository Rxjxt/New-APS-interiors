"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/about/hero.png"
        alt="NEW APS INTERIORS Factory"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-900/30" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#B6945F]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-2 text-sm text-white/80"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#B6945F]"
            >
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-[#B6945F]">About Us</span>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-flex items-center rounded-full border border-[#B6945F]/40 bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E8C58A] backdrop-blur-md">
              Since 2000
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Crafting Quality
            <span className="mt-2 block text-[#B6945F]">
              Since 2000
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"
          >
            NEW APS INTERIORS has been manufacturing premium printer cabinets
            and customized office furniture solutions for more than two
            decades. Combining modern manufacturing with skilled craftsmanship,
            we deliver products that are built for durability, functionality,
            and long-term performance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B6945F] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(182,148,95,0.45)]"
            >
              Get In Touch

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/products"
              className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#B6945F] hover:bg-white/15"
            >
              Explore Products
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/15 pt-8"
          >
            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">25+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">500+</h3>
              <p className="mt-2 text-sm text-slate-300">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B6945F]">100%</h3>
              <p className="mt-2 text-sm text-slate-300">
                Quality Commitment
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/40">
          <motion.div
            animate={{ y: [4, 18, 4] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-[#B6945F]"
          />
        </div>
      </motion.div>
    </section>
  );
}