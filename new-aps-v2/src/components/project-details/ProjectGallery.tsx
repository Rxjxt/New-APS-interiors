"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#B6945F]/10 px-4 py-2 text-sm font-semibold tracking-wider text-[#B6945F]">
            PROJECT GALLERY
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0D1117] md:text-5xl">
            Project
            <span className="block text-[#B6945F]">
              Showcase
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className={`relative overflow-hidden rounded-[30px] shadow-xl ${
                index === 0 ? "md:col-span-2 h-[520px]" : "h-[350px]"
              }`}
            >
              <Image
                src={image}
                alt={`${project.title} ${index + 1}`}
                fill
                sizes="(max-width:768px)100vw,(max-width:1280px)50vw,100vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}