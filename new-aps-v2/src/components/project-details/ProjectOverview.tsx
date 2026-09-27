"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  Ruler,
  CheckCircle2,
} from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            PROJECT OVERVIEW
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117]">
            Designed for
            <span className="block text-[#B6945F]">
              Modern Workspaces
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-10 space-y-5">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[#B6945F]"
                />

                <span className="text-slate-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Cards */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          <InfoCard
            icon={<Building2 size={28} />}
            title="Client"
            value={project.client}
          />

          <InfoCard
            icon={<MapPin size={28} />}
            title="Location"
            value={project.location}
          />

          <InfoCard
            icon={<Calendar size={28} />}
            title="Completion"
            value={project.completion}
          />

          <InfoCard
            icon={<Ruler size={28} />}
            title="Project Area"
            value={project.area}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({
  icon,
  title,
  value,
}: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B6945F]/30 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B6945F]/10 text-[#B6945F]">
        {icon}
      </div>

      <p className="text-sm uppercase tracking-widest text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-xl font-semibold text-[#0D1117]">
        {value}
      </h3>
    </div>
  );
}