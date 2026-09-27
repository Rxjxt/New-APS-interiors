"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  Users,
  Settings,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    icon: Factory,
    value: "26+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Projects Delivered",
  },
  {
    icon: Settings,
    value: "100%",
    label: "Custom Manufacturing",
  },
  {
    icon: BadgeCheck,
    value: "PAN India",
    label: "Project Delivery",
  },
];

export default function FacilitySection() {
  return (
    <section className="bg-[#FAF8F5] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-[#E6DED2] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.10)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/manufacturing/facility.jpeg"
                  alt="Manufacturing Facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -bottom-8 left-8 rounded-3xl border border-[#E6DED2] bg-white px-8 py-6 shadow-xl"
            >
              <p className="text-4xl font-bold text-[#B6945F]">
                26+
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
              OUR FACILITY
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
              Modern Infrastructure
              <span className="block text-[#B6945F]">
                Built for Precision
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our manufacturing facility combines skilled craftsmanship
              with advanced production techniques to deliver premium
              office furniture for corporate, institutional and
              commercial projects across India.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -6 }}
                    className="rounded-[28px] border border-[#E6DED2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                      <Icon className="h-7 w-7 text-[#B6945F]" />
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-[#0D1117]">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}