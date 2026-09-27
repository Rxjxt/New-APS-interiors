"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  PackageCheck,
  Handshake,
  Boxes,
  BadgeCheck,
  Truck,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "OEM Manufacturing",
    description:
      "End-to-end manufacturing solutions for brands, dealers, and corporate partners with complete confidentiality.",
  },
  {
    icon: PackageCheck,
    title: "Private Label Production",
    description:
      "Manufacturing under your brand identity with premium quality standards and consistent product finishing.",
  },
  {
    icon: Boxes,
    title: "Bulk Production",
    description:
      "High-capacity manufacturing infrastructure capable of handling large-scale commercial and institutional projects.",
  },
  {
    icon: BadgeCheck,
    title: "Custom Solutions",
    description:
      "Furniture designed and manufactured according to your dimensions, finishes, and functional requirements.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "Reliable OEM support for architects, interior designers, distributors, and furniture brands across India.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Efficient logistics and secure packaging ensuring timely delivery across India for projects of every size.",
  },
];

export default function OEMCapabilities() {
  return (
    <section className="bg-[#F5F2ED] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px] border border-[#E6DED2] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/manufacturing/production-floor.png"
                  alt="OEM Manufacturing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-8 -right-8 rounded-3xl border border-[#E6DED2] bg-white px-8 py-6 shadow-xl"
            >
              <p className="text-4xl font-bold text-[#B6945F]">OEM</p>
              <p className="mt-2 text-sm text-slate-600">
                Trusted
                <br />
                Manufacturing
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
              OEM CAPABILITIES
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
              Reliable OEM
              <span className="block text-[#B6945F]">
                Manufacturing Partner
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              NEW APS INTERIORS provides comprehensive OEM manufacturing
              solutions for furniture brands, dealers, architects, interior
              designers, and corporate organizations. From custom development
              to large-scale production, we deliver consistent quality with
              complete confidentiality.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="rounded-2xl border border-[#E6DED2] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B6945F]/10">
                      <Icon className="h-6 w-6 text-[#B6945F]" />
                    </div>

                    <h3 className="text-lg font-semibold text-[#0D1117]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
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