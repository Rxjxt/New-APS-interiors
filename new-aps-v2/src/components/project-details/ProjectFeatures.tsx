"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Briefcase,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectFeaturesProps {
  project: Project;
}

const icons = [
  <Lightbulb key="light" size={30} />,
  <Briefcase key="briefcase" size={30} />,
  <ShieldCheck key="shield" size={30} />,
  <Sparkles key="sparkles" size={30} />,
];

export default function ProjectFeatures({
  project,
}: ProjectFeaturesProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            PROJECT HIGHLIGHTS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Key Features &
            <span className="block text-[#B6945F]">
              Design Highlights
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {project.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B6945F]/40 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/10 text-[#B6945F]">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-xl font-semibold text-[#0D1117]">
                {feature}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Carefully planned and executed to deliver functionality,
                aesthetics, and long-term durability for modern workplaces.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}