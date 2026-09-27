"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Factory,
  Printer,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Printer,
    title: "Core Expertise",
    description:
      "Premium printer cabinets engineered for durability, functionality, and modern workplaces.",
  },
  {
    icon: Factory,
    title: "Own Manufacturing",
    description:
      "Every product is manufactured in our in-house production facility with strict quality control.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "We focus on precision craftsmanship, reliable materials, and long-lasting performance.",
  },
  {
    icon: Award,
    title: "25+ Years",
    description:
      "Delivering trusted manufacturing solutions since 2000.",
  },
];

export default function OurStory() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src="/images/about/machinery.png"
                alt="Manufacturing Unit"
                width={700}
                height={850}
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Badge */}

            <div className="absolute -bottom-8 -right-6 rounded-3xl bg-white p-6 shadow-2xl">
              <h3 className="text-4xl font-bold text-[#B6945F]">
                25+
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600">
                Years of Manufacturing Excellence
              </p>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F]">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Manufacturing Excellence
              <span className="block text-[#B6945F]">
                Built Over Two Decades
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Established in 2000, NEW APS INTERIORS has built a reputation
              for manufacturing high-quality printer cabinets and customized
              office furniture. Our commitment to precision, durability, and
              customer satisfaction has helped us become a trusted manufacturing
              partner for businesses across India.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              With our own manufacturing facility, experienced craftsmen, and
              modern production techniques, we maintain complete control over
              quality from raw materials to the finished product. This allows
              us to deliver reliable, functional, and long-lasting solutions
              tailored to our clients' requirements.
            </p>

            {/* Highlight Cards */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#B6945F]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6945F]/10">
                    <item.icon
                      className="text-[#B6945F]"
                      size={26}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}