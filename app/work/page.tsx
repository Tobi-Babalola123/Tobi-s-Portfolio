"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import Footer from "@/components/layout/Footer";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import MobileMenu from "@/components/sections/Mobile-menu";
import GraphicDesignModal from "@/components/graphic-design-modal";
import { projects } from "@/data/projects";

const categories = [
  "All",
  "Featured",
  "Website Redesigns",
  "Business Websites",
  "SaaS",
];

const ease = [0.16, 1, 0.3, 1] as const;

type Project = (typeof projects)[number];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedGraphicDesign, setSelectedGraphicDesign] =
    useState<Project | null>(null);
  const [isGraphicDesignModalOpen, setIsGraphicDesignModalOpen] =
    useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleGraphicDesignClick = (project: Project) => {
    setSelectedGraphicDesign(project);
    setIsGraphicDesignModalOpen(true);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <>
      <div
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#F6F7F2] text-[#17212B]"
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(23,33,43,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(23,33,43,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

          <motion.div
            animate={{
              x: [0, 35, -15, 0],
              y: [0, -30, 15, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-48 top-40 h-[450px] w-[450px] rounded-full bg-lime-300/25 blur-[130px]"
          />

          <motion.div
            animate={{
              x: [0, -30, 15, 0],
              y: [0, 25, -20, 0],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 top-[35%] h-[500px] w-[500px] rounded-full bg-sky-200/30 blur-[140px]"
          />
        </div>

        {/* Header */}
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#17212B] text-xs font-bold tracking-tight text-lime-400 transition-transform duration-300 group-hover:rotate-6">
              TB
            </span>

            <span className="text-sm font-semibold tracking-tight text-[#17212B]">
              TOBI BABALOLA
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E1E6DD] bg-white/80 text-[#17212B] transition-all duration-300 hover:border-lime-500 hover:bg-lime-50"
          >
            <Menu size={20} />
          </button>
        </header>

        <main className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Hero */}
          <section className="relative pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-4 py-2">
                <Sparkles size={13} className="text-lime-700" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-800">
                  Selected work & case studies
                </span>
              </div>

              <h1 className="max-w-5xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[1.02] tracking-[-0.065em] text-[#17212B]">
                Digital experiences
                <br />
                built to make a{" "}
                <span className="text-lime-700">difference.</span>
              </h1>

              <div className="mt-9 grid gap-8 border-t border-[#DDE3D8] pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-2xl text-[15px] leading-8 text-[#68736B] sm:text-base">
                  A collection of websites, redesigns and digital products
                  focused on more than appearance. Each project brings together
                  thoughtful design, purposeful development and better user
                  experiences to help businesses build trust and turn visitors
                  into customers.
                </p>

                <a
                  href="#projects"
                  className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#17212B] transition hover:text-lime-700"
                >
                  Explore selected work
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDE3D8] bg-white transition-all duration-300 group-hover:border-lime-300 group-hover:bg-lime-50">
                    <ArrowDown
                      size={16}
                      className="transition-transform group-hover:translate-y-1"
                    />
                  </span>
                </a>
              </div>
            </motion.div>

            {/* Small editorial details */}
            <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#929B91]">
              <span>01 — Strategy</span>
              <span>02 — Design</span>
              <span>03 — Development</span>
              <span>04 — Optimization</span>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="pb-24 lg:pb-32">
            {/* Section heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
              className="mb-9 flex flex-col justify-between gap-5 border-t border-[#DDE3D8] pt-8 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-700">
                  The portfolio
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#17212B] sm:text-4xl">
                  Selected projects
                </h2>
              </div>

              <p className="text-sm text-[#899289]">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-10 flex flex-wrap gap-2.5">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "border-[#17212B] bg-[#17212B] text-white shadow-[0_6px_18px_rgba(23,33,43,0.12)]"
                        : "border-[#E0E5DC] bg-white/75 text-[#69746B] hover:border-lime-400 hover:bg-lime-50 hover:text-lime-800"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Project grid */}
            {displayedProjects.length > 0 ? (
              <motion.div
                layout
                className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
              >
                {displayedProjects.map((project, index) => {
                  const isGraphicDesign =
                    project.category.toLowerCase() === "graphic design";

                  const projectContent = (
                    <>
                      {/* Image */}
                      <div className="relative aspect-[1.48/1] overflow-hidden bg-[#E9EDE5]">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/30 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                        <div className="absolute left-4 top-4">
                          <span className="rounded-full border border-white/30 bg-[#111923]/65 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      {/* Project details */}
                      <div className="p-6 sm:p-7">
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9AA39A]">
                          <span>{project.year}</span>
                          <span className="h-1 w-1 rounded-full bg-[#B6BEB3]" />
                          <span>{project.category}</span>
                        </div>

                        <h3 className="text-xl font-semibold tracking-[-0.035em] text-[#17212B] transition-colors duration-300 group-hover:text-lime-800">
                          {project.title}
                        </h3>

                        {project.outcome && (
                          <p className="mt-2 text-xs font-semibold text-lime-700">
                            {project.outcome}
                          </p>
                        )}

                        <p className="mt-3 text-sm leading-7 text-[#788278]">
                          {project.description}
                        </p>

                        <div className="mt-6 flex items-center justify-between border-t border-[#EDF0EA] pt-5">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A0A89F]">
                            {isGraphicDesign ? "View artwork" : "View project"}
                          </span>

                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F4ED] text-[#68736B] transition-all duration-300 group-hover:bg-lime-100 group-hover:text-lime-800">
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                      </div>
                    </>
                  );

                  return (
                    <motion.article
                      layout
                      key={`${project.title}-${project.year}-${index}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.65,
                        delay: (index % 3) * 0.08,
                        ease,
                      }}
                      className="group overflow-hidden rounded-[1.4rem] border border-[#E4E9E0] bg-white shadow-[0_8px_30px_rgba(23,33,43,0.035)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D5E3CB] hover:shadow-[0_24px_55px_rgba(23,33,43,0.09)]"
                    >
                      {isGraphicDesign ? (
                        <button
                          type="button"
                          onClick={() => handleGraphicDesignClick(project)}
                          className="block w-full text-left"
                          aria-label={`View ${project.title} artwork`}
                        >
                          {projectContent}
                        </button>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                          aria-label={`View ${project.title} project`}
                        >
                          {projectContent}
                        </a>
                      )}
                    </motion.article>
                  );
                })}
              </motion.div>
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-[#D8E0D4] bg-white/60 px-6 py-20 text-center">
                <p className="text-lg font-semibold text-[#17212B]">
                  No projects in this category yet.
                </p>
                <p className="mt-2 text-sm text-[#899289]">
                  Try another category to explore more work.
                </p>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("All")}
                  className="mt-6 text-sm font-semibold text-lime-800 underline underline-offset-4"
                >
                  View all projects
                </button>
              </div>
            )}

            {/* View more */}
            {visibleCount < filteredProjects.length && (
              <div className="mt-14 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount(filteredProjects.length)}
                  className="group inline-flex items-center gap-3 rounded-full border border-[#DCE3D7] bg-white px-7 py-4 text-sm font-semibold text-[#17212B] shadow-sm transition-all duration-300 hover:border-lime-400 hover:bg-lime-50"
                >
                  View all projects
                  <ArrowDown
                    size={16}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </button>
              </div>
            )}
          </section>

          {/* Project CTA */}
          <section className="relative mb-24 overflow-hidden rounded-[2rem] bg-[#14202B] lg:mb-32">
            {/* CTA background */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-32 -top-40 h-[400px] w-[400px] rounded-full bg-lime-400/15 blur-[110px]"
              />
            </div>

            <div className="relative z-10 grid gap-12 px-7 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-16 lg:py-20">
              {/* CTA introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
              >
                <div className="mb-7 inline-flex items-center gap-3">
                  <span className="h-px w-8 bg-lime-400" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-300">
                    Have a project in mind?
                  </span>
                </div>

                <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.5rem]">
                  Your next website should do more than just look good.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
                  Let's create a digital experience that communicates your
                  value, builds confidence and gives your visitors a reason to
                  take action.
                </p>

                <Link
                  href="/#contact"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 text-sm font-semibold text-[#14202B] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
                >
                  Let's work together
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* What clients can expect */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: 0.1,
                  ease,
                }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl sm:p-9"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  The approach
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                  Built around what matters.
                </h3>

                <div className="mt-8 space-y-6">
                  {[
                    "Design that builds credibility and trust",
                    "Responsive experiences across devices",
                    "Clear user journeys and conversion-focused layouts",
                    "Modern, maintainable frontend development",
                    "Performance and SEO-conscious implementation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400/10 text-lime-400">
                        <Check size={12} strokeWidth={2.5} />
                      </span>

                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>

      {/* Shared site components */}
      {/* <Footer /> */}

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* <MouseFollower /> */}

      <GraphicDesignModal
        isOpen={isGraphicDesignModalOpen}
        onClose={() => setIsGraphicDesignModalOpen(false)}
        project={selectedGraphicDesign}
      />
    </>
  );
}
