"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cog,
  Hammer,
  Truck,
  BadgeCheck,
  Building2,
  Trophy,
  BriefcaseBusiness,
} from "lucide-react";

import { whyChooseItems } from "@/data/whyChooseUs";

const icons = [
  ShieldCheck,
  Cog,
  Hammer,
  Truck,
  BadgeCheck,
  Building2,
];

const stats = [
  {
    icon: Trophy,
    value: "15+",
    label: "Years Experience",
    sub: "Delivering excellence",
  },
  {
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Projects Delivered",
    sub: "Across corporate spaces",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Quality Commitment",
    sub: "Every product inspected",
  },
  {
    icon: Truck,
    value: "Pan India",
    label: "Service Network",
    sub: "Delivery & Installation",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F6F2] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Manufacturing Excellence
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine premium materials, precision manufacturing, skilled
            craftsmanship, and modern techniques to create office furniture
            built to perform and designed to impress.
          </p>
        </motion.div>

        {/* Main */}

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[720px] overflow-hidden rounded-[36px]"
          >
            <Image
              src="/images/products/manufacturing-excellence.png"
              alt="Manufacturing Excellence"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-flex rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Precision Manufacturing
                </span>
              </div>

              <h3 className="mt-5 text-4xl font-bold leading-tight text-white">
                Crafted with Quality.
                <br />
                Built for Modern Workspaces.
              </h3>

              <p className="mt-4 max-w-md leading-7 text-white/90">
                Every product is manufactured with precision, premium
                materials, and attention to detail to create workspaces that
                last for years.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseItems.map((item, index) => {
              const Icon = icons[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[24px] border border-[#EAE5DC] bg-white p-5 transition-all duration-500 hover:border-[#5F6F52]/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5F6F52]/10 text-[#5F6F52] transition-all duration-300 group-hover:bg-[#5F6F52] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#5F6F52]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}

        <div className="mt-16 grid overflow-hidden rounded-[36px] border border-[#E7DFD1] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group p-10 text-center transition-all duration-300 hover:bg-[#FAF9F6] ${
                  index !== stats.length - 1
                    ? "border-b border-[#ECE6DA] md:border-r xl:border-b-0"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F6F2] text-[#B6945F] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#5F6F52] group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-3 text-base font-semibold uppercase tracking-wide text-slate-800">
                  {stat.label}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}