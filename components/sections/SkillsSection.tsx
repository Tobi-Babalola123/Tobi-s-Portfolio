"use client";

import { useRef } from "react";
import {
  ArrowUpRight,
  Palette,
  Globe,
  Code2,
  Zap,
  Layers3,
  Search,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "UI/UX & Web Design",
    description:
      "Beautiful, intuitive interfaces that communicate your brand's value, build trust, and make every interaction feel effortless.",
    tags: ["Figma", "User Experience", "Visual Design"],
  },
  {
    number: "02",
    icon: Globe,
    title: "Business Websites",
    description:
      "Strategic, conversion-focused websites that turn your online presence into a powerful tool for attracting customers and generating leads.",
    tags: ["Landing Pages", "Business Sites", "CRO"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, scalable web experiences built with clean code, thoughtful architecture, and seamless interactions across devices.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "04",
    icon: Search,
    title: "Performance & SEO",
    description:
      "Technical refinement focused on loading speed, accessibility, search visibility, and delivering a smoother user experience.",
    tags: ["Core Web Vitals", "Technical SEO", "Optimization"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F5F5F0] py-24 sm:py-28 lg:py-32"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[450px] w-[450px] rounded-full bg-lime-300/10 blur-[130px]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-slate-300/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid items-end gap-8 lg:mb-20 lg:grid-cols-[1fr_0.65fr]"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-lime-600" />
              <span className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                What I bring to the table
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-[#111827] sm:text-5xl lg:text-[4.25rem]">
              More than just
              <br />
              <span className="text-slate-400">good-looking websites.</span>
            </h2>
          </div>

          <div className="max-w-lg lg:ml-auto">
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              I bring design, strategy, and development together to create
              digital experiences that look exceptional, work seamlessly, and
              help businesses move forward.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-slate-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400/20 text-lime-800">
                <Layers3 size={15} />
              </span>
              From concept to a fully realized product.
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[370px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-7 transition-colors duration-300 hover:border-lime-500/40 hover:shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-8"
              >
                {/* Card top */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.15em] text-slate-400">
                    / {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-[#F5F5F0] text-slate-700 transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400 group-hover:text-slate-950">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Card content */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111827] sm:text-[1.35rem]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Card bottom */}
                <div className="mt-auto pt-10">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs font-semibold tracking-wide text-slate-500 transition-colors group-hover:text-slate-900">
                      My expertise
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-700"
                    />
                  </div>
                </div>

                {/* Subtle decorative accent */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full bg-lime-300/0 blur-3xl transition-colors duration-500 group-hover:bg-lime-300/20" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-col justify-between gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Every project gets a thoughtful blend of design, technology, and
            business strategy.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-700">
            <span className="h-2 w-2 rounded-full bg-lime-500" />
            Built with purpose. Designed for impact.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
