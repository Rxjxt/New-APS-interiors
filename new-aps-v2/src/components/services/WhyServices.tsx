"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Factory,
  Wrench,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "25+ Years of Experience",
    description:
      "Delivering quality office furniture and printer cabinet solutions since 2000.",
  },
  {
    icon: Factory,
    title: "Own Manufacturing Unit",
    description:
      "Complete in-house production ensures quality control and timely delivery.",
  },
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description:
      "Every project is tailored to your exact dimensions and business requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product undergoes strict quality inspection before dispatch.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Efficient manufacturing and planning help us deliver projects on schedule.",
  },
  {
    icon: CheckCircle2,
    title: "Trusted by Businesses",
    description:
      "Reliable solutions designed for long-term performance and customer satisfaction.",
  },
];

export default function WhyServices() {
  return (
    <section className="bg-[#0F172A] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#B6945F]/40 bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8C58A]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Manufacturing Excellence You Can Trust
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            We combine experience, precision engineering, premium materials,
            and customer-focused manufacturing to deliver products that last.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-[#B6945F]/40 hover:bg-white/10"
              >
                <div className="inline-flex rounded-2xl bg-[#B6945F]/15 p-4 transition group-hover:bg-[#B6945F]">
                  <Icon className="h-8 w-8 text-[#B6945F] group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-10 text-center md:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold text-[#B6945F]">25+</h3>
            <p className="mt-2 text-slate-300">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#B6945F]">500+</h3>
            <p className="mt-2 text-slate-300">Projects Completed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#B6945F]">100%</h3>
            <p className="mt-2 text-slate-300">Custom Solutions</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#B6945F]">100%</h3>
            <p className="mt-2 text-slate-300">Quality Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}