"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "100% Custom Manufacturing",
  "Bulk Commercial Projects",
  "Pan India Delivery",
];

interface CTAProps {
  overlap?: boolean;
  badge?: string;
  title?: string;
  description?: string;
  primaryButton?: string;
  secondaryButton?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function CTA({
  overlap = false,
  badge = "LET'S BUILD SOMETHING EXCEPTIONAL",
  title = "Premium Furniture Solutions\nFor Modern Workspaces",
  description = "...",
  primaryButton = "Request a Quote",
  secondaryButton = "Contact Us",
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: CTAProps) {
  return (
    <section
      className={`relative bg-[#FAF8F5] ${
        overlap
          ? "-mt-12 pt-28 pb-16 sm:-mt-16 sm:pt-36 sm:pb-20 lg:-mt-20 lg:pt-44 lg:pb-24"
          : "py-12 sm:py-14 lg:py-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[24px] border border-[#E6DED2] bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.10)] sm:rounded-[30px] sm:p-8 md:p-10 lg:rounded-[36px] lg:p-12 lg:shadow-[0_40px_120px_rgba(0,0,0,0.12)]"
        >
          {/* Background */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B6945F]/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[#B6945F]/5 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-[#B6945F]/10 px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[#B6945F] sm:px-4 sm:text-sm sm:tracking-wide">
                {badge}
              </span>

              <h2 className="mt-5 whitespace-pre-line text-3xl font-bold leading-tight text-[#1E293B] sm:text-4xl lg:mt-6 lg:text-5xl">
                {title}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg sm:leading-8 lg:mt-6">
                {description}
              </p>

              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B6945F]/10">
                      <CheckCircle2 className="h-5 w-5 text-[#B6945F]" />
                    </div>

                    <span className="text-sm font-medium text-[#475569] sm:text-base lg:text-[17px]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right */}
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-[24px] border border-[#E6DED2] bg-white p-6 shadow-lg sm:rounded-[30px] sm:p-8 lg:p-10"
            >
              <h3 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Let's Discuss Your Project
              </h3>

              <p className="mt-4 text-center text-sm leading-7 text-[#64748B] sm:mt-5 sm:text-base sm:leading-8">
                Tell us about your requirements and our experts will recommend
                the ideal furniture and interior solution for your business.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:mt-10">
                <Link
                  href={primaryHref}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#B6945F] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#A6844E]"
                >
                  {primaryButton}

                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={secondaryHref}
                  className="w-full rounded-full border border-[#B6945F] px-8 py-4 text-center font-semibold text-[#B6945F] transition hover:bg-[#B6945F] hover:text-white"
                >
                  {secondaryButton}
                </Link>
              </div>

              <div className="mt-8 border-t border-[#E6DED2] pt-6 sm:mt-10 sm:pt-8">
                <div className="grid grid-cols-3 gap-3 text-center sm:gap-4">
                  <div>
                    <p className="text-base font-bold text-[#1E293B] sm:text-lg">
                      OEM
                    </p>
                    <p className="text-xs text-[#64748B] sm:text-sm">
                      Manufacturing
                    </p>
                  </div>

                  <div>
                    <p className="text-base font-bold text-[#1E293B] sm:text-lg">
                      Bulk
                    </p>
                    <p className="text-xs text-[#64748B] sm:text-sm">
                      Commercial Orders
                    </p>
                  </div>

                  <div>
                    <p className="text-base font-bold text-[#1E293B] sm:text-lg">
                      India
                    </p>
                    <p className="text-xs text-[#64748B] sm:text-sm">
                      Nationwide Delivery
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}