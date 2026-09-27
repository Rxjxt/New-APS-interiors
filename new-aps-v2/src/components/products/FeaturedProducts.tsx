"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const featuredProducts = [
  {
    title: "Executive Workspace Collection",
    description:
      "Premium office furniture designed for executive cabins with elegant aesthetics, functional storage, and superior craftsmanship.",
    image: "/images/products/executive-cabin.jpg",
    features: [
      "Executive Office Desk",
      "Side Storage Cabinet",
      "Visitor Seating",
      "Premium Finish",
    ],
  },
  {
    title: "Modern Office Furniture",
    
      description:
  "Versatile office furniture designed for productive and collaborative workspaces.",
    image: "/images/products/office-furniture.jpg",
    features: [
      "Modular Layout",
      "Modern Design",
      "Cable Management",
      "Custom Configurations",
    ],
  },
  {
    title: "Conference Collection",
    description:
      "Elegant conference furniture crafted to create impressive meeting spaces for discussions and presentations.",
    image: "/images/products/conference-table.jpg",
    features: [
      "Conference Tables",
      "Premium Finishes",
      "Integrated Cable Solutions",
      "Custom Sizes",
    ],
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wide text-[#B6945F]">
            FEATURED COLLECTIONS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Crafted for
            <span className="block text-[#B6945F]">
              Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Explore our signature furniture collections engineered for
            productivity, comfort and long-lasting performance.
          </p>
        </motion.div>

        <div className="space-y-28">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[32px] border border-[#E6DED2] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </motion.div>

              <div>
                <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold text-[#B6945F]">
                  Featured Collection
                </span>

                <h3 className="mt-6 text-4xl font-bold text-[#0D1117]">
                  {product.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-10 space-y-5">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B6945F]/10">
                        <CheckCircle2 className="h-5 w-5 text-[#B6945F]" />
                      </div>

                      <span className="text-lg font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A6844E] hover:shadow-xl">
                  Request Quote
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