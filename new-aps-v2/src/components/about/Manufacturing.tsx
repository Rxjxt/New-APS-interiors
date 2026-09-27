"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Factory,
  ShieldCheck,
  Settings,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description:
      "Every product is manufactured in our own production facility with complete quality control.",
  },
  {
    icon: Settings,
    title: "Precision Engineering",
    description:
      "Modern machinery and skilled craftsmanship ensure consistent quality and accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Each product undergoes thorough inspection before delivery to maintain our quality standards.",
  },
  {
    icon: CheckCircle2,
    title: "Customized Solutions",
    description:
      "From printer cabinets to office furniture, every solution is tailored to client requirements.",
  },
];

export default function Manufacturing() {
  return (
    <section className="bg-[#F8F6F2] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#B6945F]/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#B6945F] sm:px-4 sm:text-sm sm:tracking-[0.18em]">
            Manufacturing Excellence
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:mt-6 lg:text-5xl">
            Where Precision
            <span className="block text-[#B6945F]">
              Meets Craftsmanship
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mt-6">
            Our modern manufacturing facility combines skilled craftsmanship,
            advanced machinery, and strict quality standards to deliver office
            furniture solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Images */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-3">
          {/* Large Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative lg:col-span-2"
          >
            <div className="overflow-hidden rounded-[24px] lg:rounded-[30px]">
              <Image
                src="/images/about/factory.png"
                alt="Factory"
                width={1200}
                height={800}
                sizes="(max-width:1024px) 100vw, 800px"
                className="h-[260px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[360px] lg:h-[500px]"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 p-4 shadow-2xl backdrop-blur sm:bottom-6 sm:left-6 sm:p-5 lg:bottom-8 lg:left-8 lg:rounded-3xl lg:p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B6945F] sm:text-sm sm:tracking-widest">
                Since
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                2000
              </h3>

              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Manufacturing Quality Furniture
              </p>
            </div>
          </motion.div>

          {/* Side Images */}

          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="overflow-hidden rounded-[24px] lg:rounded-[30px]"
            >
              <Image
                src="/images/about/machinery.png"
                alt="Machinery"
                width={600}
                height={400}
                sizes="(max-width:1024px) 100vw, 400px"
                className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[260px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="overflow-hidden rounded-[24px] lg:rounded-[30px]"
            >
              <Image
                src="/images/about/storage.png"
                alt="Storage"
                width={600}
                height={400}
                sizes="(max-width:1024px) 100vw, 400px"
                className="h-[200px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[220px]"
              />
            </motion.div>
          </div>
        </div>

        {/* Features */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="h-full rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6945F]/10 sm:h-16 sm:w-16">
                <feature.icon
                  size={28}
                  className="text-[#B6945F] sm:h-[30px] sm:w-[30px]"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}