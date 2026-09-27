"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Printer Cabinets",
    description:
      "Premium-quality printer cabinets engineered for durability, functionality, and seamless office integration.",
    image: "/images/services/printer-cabinet.png",
  },
  {
    title: "Custom Office Furniture",
    description:
      "Tailor-made office furniture designed to maximize productivity while complementing modern workspaces.",
    image: "/images/services/office-furniture.png",
  },
  {
    title: "Office Storage Solutions",
    description:
      "Smart storage systems that combine efficient space utilization with premium craftsmanship.",
    image: "/images/services/storage.png",
  },
  {
    title: "Custom Manufacturing",
    description:
      "Precision manufacturing services built around your unique specifications and business requirements.",
    image: "/images/services/custom-manufacturing.png",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B6945F]">
            What We Offer
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Manufacturing Services Built Around Your Needs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We manufacture durable office solutions that combine quality,
            precision, and functionality for businesses across industries.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#B6945F] transition hover:gap-3"
                >
                  Enquire Now
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}