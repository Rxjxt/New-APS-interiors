"use client";

import { motion } from "framer-motion";
import ProductCategoryCard from "./ProductCategoryCard";
import { productCategories } from "@/data/productCategories";

export default function FeaturedCategories() {
  return (
    <section className="bg-[#F8F6F2] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#B6945F]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
            Our Collection
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Premium Office Furniture
            <span className="block text-[#B6945F]">
              Crafted for Modern Workspaces
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#B6945F]" />

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Discover our thoughtfully designed office furniture collection,
            combining exceptional craftsmanship, premium materials, and modern
            aesthetics to create productive and inspiring work environments.
          </p>
        </motion.div>

        {/* Categories */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category, index) => (
            <ProductCategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}