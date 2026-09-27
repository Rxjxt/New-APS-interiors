"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export default function ProcessStep({
  number,
  title,
  description,
  image,
}: ProcessStepProps) {
  return (
    <motion.article
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative flex h-full w-full flex-col pt-7"
    >
      <div className="absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 xl:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E6DED2] bg-white shadow-lg">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#B6945F]">
            {number}
          </span>
        </div>
      </div>

      <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]">
        <div className="relative h-44 overflow-hidden sm:h-48 lg:h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width:768px)100vw,(max-width:1536px)33vw,20vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>

        <div className="relative flex flex-1 flex-col p-5">
          <span className="pointer-events-none absolute right-4 top-2 select-none text-[56px] font-bold leading-none text-[#F8F5F1]">
            {number}
          </span>

          <div className="relative z-10">
            <div className="mb-3 h-1 w-16 rounded-full bg-[#B6945F]" />

            <h3 className="text-xl font-semibold leading-tight text-[#111111]">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#666666]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}