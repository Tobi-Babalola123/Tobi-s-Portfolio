"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Monitor,
  Sparkles,
  WandSparkles,
} from "lucide-react";

import { TemplateCard } from "@/components/template-card";

const templates = [
  {
    id: 1,
    name: "SaaS Dashboard Pro",
    description:
      "A complete dashboard experience with analytics, user management and billing integration.",
    image: "/modern-saas-dashboard-interface-dark-theme.jpg",
    tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    demoUrl: "https://ai-dashboard-template.vercel.app/",
    amount: 15000,
    category: "SaaS",
  },
  {
    id: 2,
    name: "Real Estate Landing Page",
    description:
      "A conversion-focused real estate experience designed to showcase property investment opportunities with clarity and credibility.",
    image: "/Haven real estate.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://haven-real-estate-landing-page.netlify.app/",
    amount: 15000,
    category: "Real Estate",
  },
  {
    id: 3,
    name: "Nexus Consulting",
    description:
      "A professional consulting website designed to communicate expertise, credibility and strategic value.",
    image: "/nexus.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://nexus-consulting-landingpage.netlify.app/",
    amount: 15000,
    category: "Business",
  },
  {
    id: 4,
    name: "Flowpay Fintech",
    description:
      "A modern fintech experience showcasing digital payments, financial transparency and a seamless user journey.",
    image: "/flowpay.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://flowpay-fintech.netlify.app/",
    amount: 15000,
    category: "Fintech",
  },
  {
    id: 5,
    name: "Medicore Healthcare",
    description:
      "A clean healthcare website designed to present medical services with clarity, trust and professionalism.",
    image: "/medicore.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://medicore-landing-page.netlify.app/",
    amount: 15000,
    category: "Healthcare",
  },
  {
    id: 6,
    name: "Sterling & Associates",
    description:
      "A professional legal services website focused on trust, expertise and clear communication.",
    image: "/sterling.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://sterlingandassociateslegal.netlify.app/",
    amount: 15000,
    category: "Business",
  },
  {
    id: 7,
    name: "HR Software",
    description:
      "A product-focused HR software website that communicates platform value through a structured, intuitive layout.",
    image: "/HR.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://hr-software-landing-page.netlify.app/",
    amount: 20000,
    category: "SaaS",
  },
  {
    id: 8,
    name: "ProductFlow AI",
    description:
      "An AI-powered product landing page highlighting roadmapping, customer insights and collaborative workflows.",
    image: "/productflow.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://productflow-landing-page.netlify.app/",
    amount: 20000,
    category: "AI",
  },
  {
    id: 9,
    name: "Aureum Restaurant",
    description:
      "A restaurant website showcasing signature dishes, menu highlights and a memorable dining experience.",
    image: "/restaurant.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://aureumrestaurantlandingpage.netlify.app/",
    amount: 15000,
    category: "Restaurant",
  },
  {
    id: 10,
    name: "Slice & Co.",
    description:
      "A modern pizza ordering experience designed to highlight menu options, promote deals and encourage online orders.",
    image: "/slice1.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://slicefoodx.vercel.app/",
    amount: 15000,
    category: "Restaurant",
  },
];

const filterPills = [
  "All",
  "Business",
  "SaaS",
  "Healthcare",
  "Real Estate",
  "Restaurant",
  "AI",
  "Fintech",
];

const highlights = [
  {
    icon: Monitor,
    value: "10",
    label: "Website concepts",
  },
  {
    icon: ExternalLink,
    value: "10",
    label: "Live previews",
  },
  {
    icon: Code2,
    value: "Modern",
    label: "Frontend stack",
  },
  {
    icon: Layers3,
    value: "₦15k–₦20k",
    label: "Starting prices",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") return templates;

    return templates.filter((template) => template.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#18212C] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-lime-400/[0.08] blur-[150px]" />
        <div className="absolute -right-40 top-[30rem] h-[500px] w-[500px] rounded-full bg-blue-400/[0.08] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Navigation */}
        <header className="flex items-center justify-between border-b border-white/[0.08] py-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white/65 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:border-lime-300/30 group-hover:bg-lime-300/10">
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-0.5"
              />
            </span>
            Back to portfolio
          </Link>

          <Link
            href="/"
            className="text-sm font-bold tracking-[0.15em] text-white"
          >
            TB<span className="text-lime-300">.</span>
          </Link>

          <a
            href="#collection"
            className="hidden items-center gap-2 text-sm font-medium text-white/60 transition hover:text-lime-300 sm:inline-flex"
          >
            Explore collection
            <ArrowUpRight size={15} />
          </a>
        </header>

        {/* Hero */}
        <section className="relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/[0.07] px-4 py-2">
                <Sparkles size={14} className="text-lime-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-200">
                  PointOne template collection
                </span>
              </div>

              <h1 className="mt-8 max-w-3xl text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.99] tracking-[-0.065em] text-white">
                Start with a
                <br />
                better foundation.
                <span className="block text-lime-300">
                  Build something great.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                Explore professionally designed website concepts for businesses,
                startups and digital products. Find a direction you like,
                preview it live and choose a foundation for your next project.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#collection"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold text-[#18212C] transition hover:bg-lime-200"
                >
                  Explore templates
                  <ArrowRight size={17} />
                </a>

                <a
                  href="https://wa.me/2348105333852?text=Hi%2C%20I%27m%20interested%20in%20your%20website%20templates."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Ask a question
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/40">
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-lime-300" />
                  Live website previews
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-lime-300" />
                  Multiple industries
                </span>
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-lime-300" />
                  Modern frontend tools
                </span>
              </div>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="relative mx-auto w-full max-w-[480px]"
            >
              <div className="absolute inset-10 rounded-full bg-lime-300/[0.08] blur-[90px]" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#202B38] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.3)] sm:p-5">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
                    <span className="text-xs font-semibold text-white/65">
                      PointOne / Templates
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Collection
                  </span>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#18212C]">
                  <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    <div className="ml-3 h-5 flex-1 rounded-full bg-white/[0.05]" />
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold tracking-widest text-white">
                        YOUR BRAND
                      </div>
                      <div className="flex gap-3">
                        <span className="h-1.5 w-6 rounded-full bg-white/15" />
                        <span className="h-1.5 w-6 rounded-full bg-white/15" />
                        <span className="h-1.5 w-6 rounded-full bg-white/15" />
                      </div>
                    </div>

                    <div className="mt-12 max-w-[260px]">
                      <div className="h-2 w-16 rounded-full bg-lime-300/70" />
                      <div className="mt-5 h-5 w-full rounded-md bg-white/85" />
                      <div className="mt-2 h-5 w-[78%] rounded-md bg-white/85" />
                      <div className="mt-4 h-2 w-[85%] rounded-full bg-white/15" />
                      <div className="mt-2 h-2 w-[65%] rounded-full bg-white/15" />
                      <div className="mt-6 flex gap-2">
                        <div className="h-8 w-24 rounded-full bg-lime-300" />
                        <div className="h-8 w-20 rounded-full border border-white/15" />
                      </div>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-2">
                      <div className="h-20 rounded-xl bg-white/[0.05]" />
                      <div className="h-20 rounded-xl bg-lime-300/[0.12]" />
                      <div className="h-20 rounded-xl bg-white/[0.05]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Built for your next idea
                    </p>
                    <p className="mt-1 text-[10px] text-white/40">
                      A better starting point.
                    </p>
                  </div>
                  <WandSparkles size={20} className="text-lime-300" />
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-[#253342] px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Modern frontend
                    </p>
                    <p className="mt-1 text-[10px] text-white/40">
                      Designed to customize
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Collection highlights */}
        <section className="border-y border-white/[0.08] py-7">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-lime-300/15 bg-lime-300/[0.07] text-lime-300">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white sm:text-lg">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/40 sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Template collection */}
        <section id="collection" className="scroll-mt-10 py-20 sm:py-24">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300">
                <span className="h-px w-7 bg-lime-300" />
                Explore the collection
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                Find your starting point.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                Browse the collection by industry, explore live previews and
                find a design direction for your next project.
              </p>
            </div>

            <p className="text-sm text-white/40">
              <span className="font-semibold text-white">
                {filteredTemplates.length.toString().padStart(2, "0")}
              </span>{" "}
              {filteredTemplates.length === 1 ? "template" : "templates"} shown
            </p>
          </div>

          {/* Filters */}
          <div className="mt-9 flex gap-2 overflow-x-auto pb-3">
            {filterPills.map((pill) => {
              const isActive = activeCategory === pill;

              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveCategory(pill)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "border-lime-300 bg-lime-300 text-[#18212C]"
                      : "border-white/10 bg-white/[0.035] text-white/55 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>

          {/* Cards */}
          <motion.div
            layout
            className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                layout
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease,
                }}
                className="h-full"
              >
                <TemplateCard template={template} />
              </motion.div>
            ))}
          </motion.div>

          {filteredTemplates.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-16 text-center">
              <p className="text-lg font-semibold text-white">
                No templates found
              </p>
              <p className="mt-2 text-sm text-white/45">
                Try selecting another category.
              </p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-[#18212C] transition hover:bg-lime-200"
              >
                View all templates
              </button>
            </div>
          )}
        </section>

        {/* Custom project CTA */}
        <section className="pb-20 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#202B38] p-8 sm:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-lime-300/[0.08] blur-[110px]" />

            <div className="relative flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-lime-300">
                  <Sparkles size={14} />
                  Need something different?
                </div>

                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  Your idea deserves
                  <span className="text-lime-300"> a custom approach.</span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                  If you need something beyond a ready-made template, let's
                  discuss a website designed around your brand, your audience
                  and your business goals.
                </p>
              </div>

              <a
                href="https://wa.me/2348105333852?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20custom%20website%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-lime-300 px-7 py-4 text-sm font-semibold text-[#18212C] transition hover:bg-lime-200"
              >
                Discuss a custom project
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col justify-between gap-4 border-t border-white/[0.08] py-7 text-xs text-white/35 sm:flex-row sm:items-center">
          <Link href="/" className="font-bold tracking-[0.15em] text-white/70">
            POINTONE<span className="text-lime-300">.</span>
          </Link>

          <p>
            © {new Date().getFullYear()} PointOne Designs. All rights reserved.
          </p>

          <Link href="/" className="transition hover:text-lime-300">
            Back to portfolio
          </Link>
        </footer>
      </div>
    </main>
  );
}
