"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Zap,
  Layers3,
} from "lucide-react";
import MobileMenu from "./Mobile-menu";

const MotionLink = motion.create(Link);

const highlights = [
  {
    icon: Layers3,
    title: "Thoughtful design",
    description: "Interfaces built around your brand and audience.",
  },
  {
    icon: Zap,
    title: "Performance focused",
    description: "Fast, responsive and technically refined.",
  },
  {
    icon: Sparkles,
    title: "Conversion minded",
    description: "Clear experiences designed to drive action.",
  },
];

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#070A12] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(163,230,53,0.09),transparent_38%),radial-gradient(ellipse_at_85%_55%,rgba(59,130,246,0.09),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px] opacity-40" />

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-lime-400/[0.07] blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.08] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-sm font-bold text-lime-300 transition-colors group-hover:bg-lime-400 group-hover:text-slate-950">
            TB.
          </span>

          <span className="text-sm font-semibold tracking-wide text-white">
            Tobi Babalola
            <span className="mt-0.5 block text-[10px] font-medium tracking-[0.22em] text-slate-500 uppercase">
              Digital Designer & Developer
            </span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-lime-400/30 hover:bg-white/[0.08] hover:text-white"
        >
          Menu
          <span className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
            <span className="h-px w-4 bg-current transition-transform duration-300 group-hover:translate-y-[3px]" />
            <span className="h-px w-4 bg-current transition-transform duration-300 group-hover:-translate-y-[3px]" />
          </span>
        </button>
      </header>

      {/* Main Hero */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-12 sm:px-10 sm:pb-24 sm:pt-16 lg:px-16 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl"
          >
            {/* Availability */}
            <div className="mb-9 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
              </span>

              <span className="text-xs font-medium tracking-wide text-slate-300 sm:text-sm">
                Available for select projects
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-3xl text-[clamp(3.25rem,6.5vw,6rem)] font-semibold leading-[1.05] tracking-[-0.065em] text-white">
              Websites that
              <br />
              turn visitors
              <br />
              into <span className="text-lime-400">customers.</span>
            </h1>

            {/* Description */}
            <p className="mt-9 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              I design and build high-performing websites that combine
              thoughtful design, seamless experiences and conversion-focused
              strategy to help businesses grow.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.a
                href="https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_8px_35px_rgba(163,230,53,0.12)] transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_12px_40px_rgba(163,230,53,0.2)]"
              >
                Let's work together
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <MotionLink
                href="/work"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Explore my work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </MotionLink>
            </div>

            {/* Capabilities */}
            <div className="mt-16 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.12,
                    }}
                    className="group"
                  >
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-lime-400/15 bg-lime-400/[0.07] text-lime-300 transition-all duration-300 group-hover:border-lime-400/40 group-hover:bg-lime-400/15">
                      <Icon size={17} />
                    </div>

                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[510px] lg:ml-auto"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-lime-400/[0.07] blur-[70px]" />

            {/* Image frame */}
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-tr-[2rem] border-r border-t border-lime-400/30" />

              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-bl-[2rem] border-b border-l border-lime-400/30" />

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#111827] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:rounded-[2.2rem]">
                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#111827]">
                  <Image
                    src="/images/Tobi.jpeg"
                    alt="Tobi Babalola, web designer and developer"
                    width={780}
                    height={1000}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 510px"
                    className="h-[420px] w-full object-cover object-center sm:h-[560px] lg:h-[610px]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-transparent" />

                  {/* Image identity */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                      <span className="text-[10px] font-semibold tracking-[0.25em] text-lime-300 uppercase">
                        Design. Develop. Deliver.
                      </span>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Building digital
                      <br />
                      experiences that matter.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Floating label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -left-5 top-16 hidden rounded-2xl border border-white/10 bg-[#111827]/90 p-4 shadow-2xl backdrop-blur-xl sm:block lg:-left-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300">
                    <Sparkles size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Digital craftsmanship
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Strategy meets execution
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-[10px] font-medium tracking-[0.25em] text-slate-500 uppercase sm:text-xs">
            Independent designer & developer
          </p>

          <a
            href="#skills"
            className="group flex items-center gap-3 text-xs font-medium text-slate-400 transition-colors hover:text-lime-300"
          >
            Discover more
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-lime-400/40 group-hover:text-lime-300">
              <ArrowDown size={14} />
            </span>
          </a>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </section>
  );
}
