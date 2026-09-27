"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductCategory } from "@/data/productCategories";

interface ProductCategoryCardProps {
  category: ProductCategory;
  index: number;
}

export default function ProductCategoryCard({
  category,
  index,
}: ProductCategoryCardProps) {
  return (
    <Link href="/contact" className="block">
      <motion.article
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
        }}
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-[28px] border border-transparent bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-500 hover:border-[#B6945F]/40 hover:shadow-[0_25px_70px_rgba(15,23,42,0.18)]"
      >
        {/* Image */}

        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/50 group-hover:via-black/5" />

          {/* Gold Accent Line */}

          <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#B6945F] transition-transform duration-500 group-hover:scale-x-100" />
        </div>

        {/* Content */}

        <div className="flex h-[270px] flex-col p-7">
          <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#B6945F]">
            {category.title}
          </h3>

          <p className="mt-4 flex-1 text-[15px] leading-7 text-slate-600">
            {category.description}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#B6945F] transition-all duration-300 group-hover:gap-4">
            <span>Explore Collection</span>

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}