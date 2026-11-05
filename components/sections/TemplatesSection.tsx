"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Monitor,
  Sparkles,
  Zap,
} from "lucide-react";

const benefits = [
  "Responsive layouts",
  "Reusable components",
  "Modern UI systems",
  "Clean, maintainable code",
  "Easy customization",
  "Built with Next.js & React",
];

const templateTypes = [
  {
    number: "01",
    name: "Business Websites",
    description: "Professional website foundations for modern businesses.",
    icon: Monitor,
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    number: "02",
    name: "Landing Pages",
    description:
      "Conversion-focused layouts for products, services and launches.",
    icon: Zap,
    tags: ["React", "Framer Motion"],
  },
  {
    number: "03",
    name: "Digital Interfaces",
    description: "Flexible UI foundations for dashboards and web applications.",
    icon: Layers3,
    tags: ["React", "Reusable UI"],
  },
];

export default function TemplatesSection() {
  return (
    <section
      id="templates"
      className="relative overflow-hidden bg-[#18212C] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-lime-400/[0.08] blur-[140px]" />
        <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-blue-400/[0.09] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="mb-7 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-lime-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Template collection
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-5xl lg:text-[4.4rem]">
                Ready-made foundations.
                <br />
                <span className="text-lime-400">Built to launch faster.</span>
              </h2>
            </div>

            <p className="max-w-lg text-[15px] leading-8 text-white/55 sm:text-base lg:ml-auto">
              Carefully crafted website templates and frontend foundations
              designed to help developers, freelancers and businesses spend less
              time starting from scratch and more time building.
            </p>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/[0.07] px-3.5 py-2 text-xs font-medium text-lime-300">
              <Sparkles size={14} />
              Designed for developers
            </div>

            <h3 className="mt-7 max-w-xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              A better starting point for your next project.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Skip repetitive setup and start with thoughtfully designed
              interfaces, reusable components and a solid frontend foundation.
              Each template is built with attention to detail, responsiveness
              and real-world usability.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-lime-300">
                    <span className="text-xs">✓</span>
                  </span>
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="/templates"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-[#070B12] transition-colors hover:bg-lime-300"
              >
                Explore templates
                <ArrowRight size={16} />
              </motion.a>
            </div>

            <p className="mt-5 text-xs leading-6 text-white/35">
              Built with modern frontend technologies and practical development
              workflows.
            </p>
          </motion.div>

          {/* Right side: Template categories */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-10 rounded-full bg-lime-400/[0.06] blur-[100px]" />

            <div className="relative space-y-4">
              {templateTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={{ x: 5 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#202B38]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-[#253342] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lime-300 transition-colors group-hover:border-lime-400/20 group-hover:bg-lime-400/10">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {item.name}
                          </h4>

                          <p className="mt-2 max-w-sm text-sm leading-6 text-white/50">
                            {item.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium tracking-wide text-white/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <span className="text-xs tracking-widest text-white/25">
                        {item.number}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            {/* Technology footer */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.10] bg-[#202B38]/80 px-6 py-5">
              <div className="flex items-center gap-3">
                <Code2 size={17} className="text-lime-400" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Built for the modern web
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold text-white/65">
                <span>React</span>
                <span className="text-white/20">/</span>
                <span>Next.js</span>
                <span className="text-white/20">/</span>
                <span>Tailwind</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom link */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/45">
            Thoughtful design. Practical code. Faster development.
          </p>

          <a
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
          >
            View the collection
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
