"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const filters = [
  "All",
  "Printer Cabinets",
  "Office Furniture",
  "Storage",
  "Manufacturing",
];

const images = [
  {
    src: "/images/services/printer-cabinet.png",
    category: "Printer Cabinets",
  },
  {
    src: "/images/services/featured-printer-cabinet.png",
    category: "Printer Cabinets",
  },
  {
    src: "/images/services/office-furniture.png",
    category: "Office Furniture",
  },
  {
    src: "/images/services/storage.png",
    category: "Storage",
  },
  {
    src: "/images/services/custom-manufacturing.png",
    category: "Manufacturing",
  },
  {
    src: "/images/about/factory.png",
    category: "Manufacturing",
  },
  {
    src: "/images/about/machinery.png",
    category: "Manufacturing",
  },
  {
    src: "/images/about/storage.png",
    category: "Storage",
  },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredImages = useMemo(() => {
    if (active === "All") return images;
    return images.filter((image) => image.category === active);
  }, [active]);

  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filters */}

        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                active === filter
                  ? "bg-[#B6945F] text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-[#B6945F]/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery */}

        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl"
                onClick={() => setSelected(image.src)}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.category}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <button
                className="absolute right-6 top-6 rounded-full bg-white p-2"
                onClick={() => setSelected(null)}
              >
                <X />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative h-[80vh] w-full max-w-6xl"
              >
                <Image
                  src={selected}
                  alt="Gallery"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}