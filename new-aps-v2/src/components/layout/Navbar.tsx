"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`${
            isHome
              ? "w-full px-8 lg:px-16 pt-4"
              : "mx-auto mt-4 max-w-7xl px-5 lg:px-8"
          }`}
        >
          <nav
            className={`transition-all duration-300 ${
              isHome
                ? isScrolled
                  ? "rounded-2xl border border-white/15 bg-black/35 backdrop-blur-xl"
                  : "rounded-2xl border border-white/10 bg-black/15 backdrop-blur-xl"
                : isScrolled
                ? "rounded-2xl border border-[#E8E0D5] bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                : "rounded-2xl border border-white/20 bg-white/70 backdrop-blur-lg"
            }`}
          >
            <div className="flex h-24 items-center justify-between px-8 xl:px-10">
              {/* Logo */}

              <Link href="/" className="group">
                <div className="flex flex-col leading-none">
                  <span
                    className={`text-2xl font-bold tracking-[0.32em] transition-colors ${
                      isHome
                        ? "text-white"
                        : "text-[#0F172A] group-hover:text-[#B6945F]"
                    }`}
                  >
                    NEW APS
                  </span>

                  <span
                    className={`mt-2 text-xs uppercase tracking-[0.55em] ${
                      isHome ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    INTERIORS
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}

              <ul className="hidden items-center gap-8 lg:flex">
                {navItems.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`relative py-2 text-[15px] font-medium transition-all duration-300 ${
                          active
                            ? "text-[#D2C0A6]"
                            : isHome
                            ? "text-white hover:text-[#D2C0A6]"
                            : "text-slate-700 hover:text-[#B6945F]"
                        }`}
                      >
                        {item.name}

                        <span
                          className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#D2C0A6] transition-all duration-300 ${
                            active ? "w-full" : "w-0"
                          }`}
                        />

                        {active && (
                          <motion.span
                            layoutId="navbar-indicator"
                            className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#D2C0A6]"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Right Side */}

              <div className="flex items-center gap-3">
                <Link
                  href="/contact"
                  className="hidden rounded-full bg-[#B6945F] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A9854F] hover:shadow-[0_15px_35px_rgba(182,148,95,0.35)] lg:inline-flex"
                >
                  Get a Quote
                </Link>

                <button
                  onClick={() => setMobileOpen(true)}
                  className={`rounded-xl p-3 transition lg:hidden ${
                    isHome
                      ? "border border-white/30 text-white hover:bg-white/10"
                      : "border border-[#E8E0D5] hover:bg-[#F8F6F2]"
                  }`}
                  aria-label="Open menu"
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}