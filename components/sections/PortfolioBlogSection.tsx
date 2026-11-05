"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";
import { useScrollAnimation } from "./use-scroll-animation";

const projects = [
  {
    number: "01",
    category: "WEB DESIGN & DEVELOPMENT",
    title: "Digital experiences built to stand out.",
    description:
      "Purposeful website experiences combining refined visual design, responsive development, and thoughtful user journeys.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    href: "/work",
    featured: true,
  },
  {
    number: "02",
    category: "UI ENGINEERING",
    title: "Interfaces with purpose.",
    description:
      "Clean component systems and polished interactions designed to make digital products feel intuitive.",
    technologies: ["React", "Framer Motion"],
    href: "/work",
    featured: false,
  },
  {
    number: "03",
    category: "PERFORMANCE & CRO",
    title: "Every interaction matters.",
    description:
      "Improving website structure, performance, and user journeys to create more effective digital experiences.",
    technologies: ["CRO", "SEO", "Optimization"],
    href: "/work",
    featured: false,
  },
];

const capabilities = [
  { icon: Code2, label: "Modern development" },
  { icon: Layers3, label: "Thoughtful interfaces" },
  { icon: Zap, label: "Performance focused" },
];

export default function PortfolioBlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#080B12] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/[0.045] blur-[150px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:72px_72px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]"
        >
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-400" />

              <span className="text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase">
                Selected work / 01—03
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-[4.5rem]">
              Good design deserves
              <br />
              <span className="text-lime-400">great execution.</span>
            </h2>
          </div>

          <div className="max-w-md lg:ml-auto">
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              A closer look at how design thinking, modern technology, and
              attention to detail come together to create meaningful digital
              experiences.
            </p>

            <Link
              href="/work"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-lime-300"
            >
              Explore all projects
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400 group-hover:text-slate-950">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#10151F] lg:mt-24 lg:rounded-[2rem]"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Featured visual */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#111827] p-8 sm:min-h-[430px] lg:min-h-[540px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.12),transparent_65%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:40px_40px]" />

              <div className="relative w-full max-w-[520px]">
                {/* Browser frame */}
                <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0B0F17] shadow-[0_30px_100px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:-translate-y-2">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-green-400/70" />

                    <div className="mx-auto rounded-md bg-white/[0.05] px-8 py-1 text-[9px] text-slate-500">
                      your-next-project.com
                    </div>
                  </div>

                  <div className="p-5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold tracking-widest text-lime-400">
                        STUDIO / 01
                      </div>

                      <div className="flex gap-3">
                        <span className="h-1 w-5 rounded-full bg-white/50" />
                        <span className="h-1 w-5 rounded-full bg-white/20" />
                        <span className="h-1 w-5 rounded-full bg-white/20" />
                      </div>
                    </div>

                    <div className="mt-10 sm:mt-14">
                      <div className="text-[10px] font-medium tracking-[0.25em] text-lime-400 uppercase">
                        Digital experiences
                      </div>

                      <div className="mt-4 max-w-sm text-3xl font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl">
                        Design with
                        <br />
                        <span className="text-lime-400">intention.</span>
                      </div>

                      <div className="mt-5 max-w-[230px] text-[10px] leading-5 text-slate-400 sm:text-xs sm:leading-6">
                        Thoughtful digital experiences built for modern brands
                        and ambitious businesses.
                      </div>

                      <div className="mt-7 flex items-center gap-2">
                        <div className="rounded-full bg-lime-400 px-4 py-2 text-[9px] font-bold text-slate-950">
                          Explore experience
                        </div>

                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white">
                          <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 grid grid-cols-3 gap-2 sm:mt-16">
                      <div className="h-14 rounded-lg border border-white/10 bg-white/[0.04] sm:h-20" />
                      <div className="h-14 rounded-lg border border-lime-400/20 bg-lime-400/[0.07] sm:h-20" />
                      <div className="h-14 rounded-lg border border-white/10 bg-white/[0.04] sm:h-20" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-3 rounded-xl border border-white/10 bg-[#151C28] px-4 py-3 shadow-xl sm:-right-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400/10 text-lime-400">
                      <Sparkles size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-white">
                        Designed with purpose
                      </p>
                      <p className="mt-1 text-[9px] text-slate-500">
                        Detail in every interaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured description */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-lime-400 uppercase">
                  Featured project
                </span>

                <span className="text-xs text-slate-500">01 / 03</span>
              </div>

              <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-[1.1] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Turning ideas into
                <span className="text-lime-400"> digital experiences.</span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
                I approach every project with a balance of creative direction,
                technical precision, and business thinking. The goal is simple:
                build digital experiences that communicate clearly and work
                beautifully.
              </p>

              <div className="mt-9">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  Core technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind CSS", "Framer Motion"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <Link
                href="/work"
                className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
              >
                Explore my projects
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Capabilities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 grid gap-4 border-y border-white/10 py-8 sm:grid-cols-3 sm:gap-8"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-lime-400">
                  <Icon size={16} />
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Recent work links */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                More than aesthetics
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What goes into every build.
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.1,
                }}
                className="group"
              >
                <Link
                  href={project.href}
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.045]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-lime-400">
                      / {project.number}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-400"
                    />
                  </div>

                  <span className="mt-8 text-[9px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    {project.category}
                  </span>

                  <h4 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-lime-300">
                    {project.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-7">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-slate-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Have a project in mind? Let's create something meaningful together.
          </p>

          <a
            href="https://wa.me/2348105333852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-lime-300"
          >
            Start a conversation
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-lime-400/40 group-hover:bg-lime-400 group-hover:text-slate-950">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
