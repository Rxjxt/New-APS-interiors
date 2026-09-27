"use client";

import { motion } from "framer-motion";
import { GalleryItem } from "./data";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`group relative overflow-hidden rounded-2xl border border-[#D2C0A6]/15 ${
        item.size === "large"
  ? "h-[340px] md:h-[420px]"
  : "h-[200px] md:h-[220px]"
      }`}
    >
      {/* Temporary: Use normal HTML img instead of Next Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D2C0A6]">
          MANUFACTURING
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-white/70">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  );
}