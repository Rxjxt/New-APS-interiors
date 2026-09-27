"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProductCard({
  title,
  description,
  image,
  tags,
}: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[28px] border border-[#E6DED2] bg-white shadow-[0_16px_45px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]"
    >
      {/* Product Image */}
      <div className="relative h-[300px] overflow-hidden lg:h-[320px]">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B6945F] backdrop-blur-md">
            PRODUCT
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-[#111111] transition-colors duration-300 group-hover:text-[#B6945F]">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-[#666666]">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#E6DED2] bg-[#FAF8F5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#B6945F]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {["Office", "Premium", "Modular"].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm text-[#666666]"
            >
              <div className="h-2 w-2 rounded-full bg-[#B6945F]" />
              {feature}
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="group/btn inline-flex items-center gap-2 pt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111] transition-colors duration-300 hover:text-[#B6945F]"
        >
          View Product

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}