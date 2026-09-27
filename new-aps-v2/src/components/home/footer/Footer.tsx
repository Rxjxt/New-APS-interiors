"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Factory", href: "#factory" },
  { name: "Contact", href: "#contact" },
];

const products = [
  "OEM Manufacturing",
  "Modular Kitchens",
  "Wardrobes",
  "Office Furniture",
  "Educational Furniture",
  "Custom Furniture",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#0D1117] pt-12 sm:pt-14 lg:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 pt-4 pb-8 sm:px-6 sm:pt-8 sm:pb-14 lg:px-8 lg:pt-6 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {/* Company */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white">
              NEW APS
            </h3>

            <p className="mt-1 text-lg uppercase tracking-[0.35em] text-[#B6945F]">
              INTERIORS
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Precision-crafted furniture and interior manufacturing
              solutions for residential, commercial, institutional
              and OEM projects across India.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-[#B6945F]/30 bg-[#B6945F]/10 px-4 py-2 text-sm text-[#B6945F]">
              Established 2000 • Rajasthan, India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-[#B6945F]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Products
            </h4>

            <ul className="mt-5 space-y-3">
              {products.map((item) => (
                <li
                  key={item}
                  className="text-gray-400 transition hover:text-[#B6945F]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-5">
              <a
                href="https://www.google.com/maps/place/NEW+APS+INTERIORS/@27.8401669,76.2501032,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3"
              >
                <div className="rounded-lg bg-[#B6945F]/10 p-2">
                  <MapPin className="h-5 w-5 text-[#B6945F]" />
                </div>

                <span className="text-sm leading-6 text-gray-400">
                  D-8, Somnath City
                  <br />
                  Kotputli – 303108
                  <br />
                  Rajasthan, India
                </span>
              </a>

              <a
                href="tel:+919810408151"
                className="flex items-center gap-3"
              >
                <div className="rounded-lg bg-[#B6945F]/10 p-2">
                  <Phone className="h-5 w-5 text-[#B6945F]" />
                </div>

                <span className="text-sm text-gray-400">
                  +91 9810408151
                </span>
              </a>

              <a
                href="mailto:apsinteriors_utsav@yahoo.com"
                className="flex items-center gap-3"
              >
                <div className="rounded-lg bg-[#B6945F]/10 p-2">
                  <Mail className="h-5 w-5 text-[#B6945F]" />
                </div>

                <span className="break-all text-sm text-gray-400">
                  apsinteriors_utsav@yahoo.com
                </span>
              </a>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/newapsinteriors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-3"
                >
                  <FaInstagram className="h-5 w-5 text-[#B6945F]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/prashant-kumar-633a8b221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-3"
                >
                  <FaLinkedin className="h-5 w-5 text-[#B6945F]" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © 2026 NEW APS INTERIORS. All rights reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 transition hover:border-[#B6945F]/50"
            >
              Back to Top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}