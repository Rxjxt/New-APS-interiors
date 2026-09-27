"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contactInfo";

export default function ContactInfoCards() {
  return (
    <section className="relative z-20 -mt-20 lg:-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-[28px] border border-[#E7DFD1] bg-[#FFFEFC] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-[#B6945F]/40 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
                >
                  {/* Icon */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF2F8] text-slate-900 transition-all duration-300 group-hover:bg-[#B6945F] group-hover:text-white">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Main Value */}

                  <p className="mt-3 text-lg font-semibold text-[#B6945F] break-words">
                    {item.value}
                  </p>

                  {/* Subtitle */}

                  <p className="mt-2 leading-7 text-slate-600">
                    {item.subtitle}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}