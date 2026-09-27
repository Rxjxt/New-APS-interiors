"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F6F2] px-6">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0F172A]/5 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* 404 */}

        <h1 className="bg-gradient-to-r from-[#B6945F] to-[#D6B37B] bg-clip-text text-[120px] font-black leading-none text-transparent md:text-[180px]">
          404
        </h1>

        {/* Icon */}

        <div className="mx-auto mt-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#B6945F]/10">
          <Search className="h-10 w-10 text-[#B6945F]" />
        </div>

        {/* Heading */}

        <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
          Oops! Page Not Found
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          The page you are looking for might have been moved, deleted, or the
          URL may be incorrect. Let's help you find your way back.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(182,148,95,0.35)]"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#B6945F] hover:bg-[#B6945F]/5"
          >
            <ArrowLeft
              size={18}
              className="transition group-hover:-translate-x-1"
            />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}

        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick Navigation
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Products", "/products"],
              ["Services", "/services"],
              ["Gallery", "/gallery"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-[#B6945F] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}