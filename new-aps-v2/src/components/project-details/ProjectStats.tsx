"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Ruler, MapPin } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectStatsProps {
  project: Project;
}

const stats = (project: Project) => [
  {
    icon: <Building2 size={34} />,
    title: "Client",
    value: project.client,
  },
  {
    icon: <Calendar size={34} />,
    title: "Completion",
    value: project.completion,
  },
  {
    icon: <Ruler size={34} />,
    title: "Project Area",
    value: project.area,
  },
  {
    icon: <MapPin size={34} />,
    title: "Location",
    value: project.location,
  },
];

export default function ProjectStats({ project }: ProjectStatsProps) {
  return (
    <section className="bg-[#0D1117] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/20 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            PROJECT INFORMATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Project
            <span className="block text-[#B6945F]">
              Statistics
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats(project).map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B6945F]/20 text-[#B6945F]">
                {item.icon}
              </div>

              <p className="text-sm uppercase tracking-wider text-gray-400">
                {item.title}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}