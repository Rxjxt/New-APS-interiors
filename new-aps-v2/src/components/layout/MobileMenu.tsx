"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-[#FFFEFC] shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b border-[#ECE5DA] px-6 py-5">
              <div>
                <h2 className="text-lg font-bold tracking-[0.18em] text-[#0F172A]">
                  NEW APS
                </h2>

                <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#64748B]">
                  INTERIORS
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-[#F5F5F5]"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation */}

            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium text-slate-700 transition-all duration-300 hover:bg-[#F8F6F2] hover:text-[#B6945F]"
                    >
                      {item.name}

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}

            <div className="border-t border-[#ECE5DA] p-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center rounded-full bg-[#B6945F] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get a Quote
              </Link>

              <p className="mt-6 text-center text-xs text-slate-500">
                © {new Date().getFullYear()} NEW APS INTERIORS
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}