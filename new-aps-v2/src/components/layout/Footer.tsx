"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const products = [
  "Printer Cabinets",
  "Office Furniture",
  "Storage Solutions",
  "Custom Manufacturing",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">

      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#B6945F]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B6945F]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-[0.28em]">
              NEW APS
            </h2>

            <p className="mt-2 text-xs uppercase tracking-[0.45em] text-slate-400">
              INTERIORS
            </p>

            <p className="mt-8 leading-8 text-slate-300">
              Delivering premium printer cabinets and customized office
              furniture with precision manufacturing, quality craftsmanship,
              and trusted service since 2000.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-[#B6945F]/30 bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold text-[#D9BC89]">
              Established in 2000
            </div>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-8 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-slate-300 transition hover:text-[#D9BC89]"
                  >
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">
              Products
            </h3>

            <ul className="mt-8 space-y-4">
              {products.map((product) => (
                <li
                  key={product}
                  className="flex items-center gap-2 text-slate-300"
                >
                  <ArrowRight
                    size={16}
                    className="text-[#B6945F]"
                  />
                  {product}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <Phone
                  className="mt-1 text-[#B6945F]"
                  size={18}
                />

                <div>
                  <p className="font-medium">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-300">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail
                  className="mt-1 text-[#B6945F]"
                  size={18}
                />

                <div>
                  <p className="font-medium">
                    Email
                  </p>

                  <p className="mt-1 text-slate-300">
                    info@newapsinteriors.com
                  </p>
                </div>
              </div>
                            <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 text-[#B6945F]"
                  size={18}
                />

                <div>
                  <p className="font-medium">
                    Address
                  </p>

                  <p className="mt-1 text-slate-300 leading-7">
                    Delhi NCR, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock
                  className="mt-1 text-[#B6945F]"
                  size={18}
                />

                <div>
                  <p className="font-medium">
                    Working Hours
                  </p>

                  <p className="mt-1 text-slate-300">
                    Mon – Sat
                  </p>

                  <p className="text-slate-300">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-sm text-slate-400 md:text-left">
              © {new Date().getFullYear()} NEW APS INTERIORS. All rights
              reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="rounded-full border border-[#B6945F]/30 bg-[#B6945F]/10 px-5 py-3 text-sm font-semibold text-[#D9BC89] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B6945F] hover:text-white"
            >
              Back to Top ↑
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}