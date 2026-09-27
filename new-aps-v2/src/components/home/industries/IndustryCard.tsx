"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface IndustryCardProps {
  title: string;
  description: string;
  image: string;
}

export default function IndustryCard({
  title,
  description,
  image,
}: IndustryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[240px] overflow-hidden rounded-[22px] shadow-lg sm:h-[280px] lg:h-[300px] lg:rounded-[28px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5 lg:p-6">
        <h3 className="text-lg font-semibold sm:text-xl lg:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/85 sm:leading-7">
          {description}
        </p>
      </div>
    </motion.div>
  );
}