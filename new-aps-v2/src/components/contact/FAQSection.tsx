"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "../../data/faqs";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#EAF2F8] py-28">
      {/* Background Decoration */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#B6945F]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#B6945F]/20 bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#B6945F] backdrop-blur">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Everything You Need
            <span className="block text-[#B6945F]">To Know</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you're planning a new office, upgrading your workspace,
            or looking for customized furniture solutions, we've answered the
            questions our clients ask most often.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mx-auto mt-20 max-w-5xl space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-[30px] border transition-all duration-500 ${
                  isOpen
                    ? "border-[#B6945F]/40 bg-white shadow-2xl"
                    : "border-white bg-[#FFFEFC] shadow-lg hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-7 text-left"
                >
                  <h3 className="pr-8 text-xl font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#B6945F] text-white rotate-180"
                        : "bg-[#F5EFE6] text-[#B6945F]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-200 bg-[#FAF8F4] px-8 py-8">
                        <p className="leading-8 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-slate-500">
            Still have questions?
            <span className="font-semibold text-[#B6945F]">
              {" "}
              We'd love to help.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}