"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Executive Cabins",
    description: "Premium office furniture crafted for leadership spaces.",
    image: "/images/products/executive-cabin.jpg",
  },
  {
    title: "Office Furniture",
    description: "Modern office furniture designed for productive workplaces.",
    image: "/images/products/office-furniture.jpg",
  },
  {
    title: "Conference Tables",
    description: "Elegant meeting tables built for collaboration.",
    image: "/images/products/conference-table.jpg",
  },
  {
    title: "Storage Solutions",
    description: "Smart storage systems for organized office environments.",
    image: "/images/products/storage.jpg",
  },
  {
    title: "Reception Furniture",
    description: "Create a lasting first impression with stylish reception areas.",
    image: "/images/products/reception.jpg",
  },
  {
    title: "Office Seating",
    description: "Comfortable ergonomic seating for every workspace.",
    image: "/images/products/office-seating.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-[#FAF8F5] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
            PRODUCT CATEGORIES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Explore Our
            <span className="block text-[#B6945F]">
              Office Furniture Range
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover thoughtfully designed office furniture collections crafted
            to elevate productivity, comfort and workplace aesthetics.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[30px] border border-[#E6DED2] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#0D1117]">
                  {category.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {category.description}
                </p>

                <button className="group mt-8 inline-flex items-center gap-2 font-semibold text-[#B6945F] transition-all">
                  Explore

                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}