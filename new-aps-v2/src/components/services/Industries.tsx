"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  Landmark,
  BriefcaseBusiness,
  Hospital,
  Store,
} from "lucide-react";

const industries = [
  {
    title: "Corporate Offices",
    description:
      "Modern furniture and printer cabinet solutions for productive office environments.",
    icon: Building2,
  },
  {
    title: "Educational Institutions",
    description:
      "Durable and functional furniture for schools, colleges, and universities.",
    icon: GraduationCap,
  },
  {
    title: "Government Organizations",
    description:
      "Reliable furniture solutions designed for public sector offices and institutions.",
    icon: Landmark,
  },
  {
    title: "Commercial Spaces",
    description:
      "Customized office furniture for businesses, workspaces, and commercial interiors.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Healthcare Facilities",
    description:
      "Practical storage and office furniture for hospitals, clinics, and healthcare centers.",
    icon: Hospital,
  },
  {
    title: "Retail & Business Centers",
    description:
      "Furniture solutions built for customer-facing spaces with functionality and style.",
    icon: Store,
  },
];

export default function Industries() {
  return (
    <section className="bg-[#FDFBF8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B6945F]">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Trusted Across Multiple Industries
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our manufacturing expertise enables us to deliver customized office
            furniture and printer cabinet solutions for organizations of every
            size.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B6945F]/40 hover:shadow-xl"
              >
                <div className="inline-flex rounded-2xl bg-[#B6945F]/10 p-4 transition group-hover:bg-[#B6945F]">
                  <Icon className="h-8 w-8 text-[#B6945F] group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}