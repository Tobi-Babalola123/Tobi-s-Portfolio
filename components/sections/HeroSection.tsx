"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MobileMenu from "./Mobile-menu";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

const WHATSAPP_URL =
  "https://wa.me/2348105333852?text=Hi%20I%20am%20interested%20in%20getting%20a%20premium%20website%20for%20my%20business";

// Edit these to match your real routes. The Menu button still opens your full navigation.
const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "#skills" },
];

const strengths = [
  {
    title: "Thoughtful design",
    description: "Interfaces built around your brand and your audience.",
  },
  {
    title: "Performance focused",
    description: "Fast, responsive and technically refined.",
  },
  {
    title: "Conversion minded",
    description: "Clear experiences designed to drive action.",
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#070A12] text-white">
      {/* Background: one quiet wash, no grid or orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_10%,rgba(163,230,53,0.07),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(59,130,246,0.07),transparent_40%)]"
      />

      {/* Header */}
      <header className="relative z-30 mx-auto flex max-w-[1360px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className={`group flex items-center gap-3 rounded-lg ${focusRing}`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-sm font-bold text-slate-950">
            TB.
          </span>
          <span className="text-sm font-semibold leading-tight text-white">
            Tobi Babalola
            <span className="mt-0.5 block text-xs font-normal text-slate-400">
              Digital designer & developer
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-8">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded text-sm text-slate-300 transition-colors hover:text-white ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            className={`group flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.08] ${focusRing}`}
          >
            Menu
            <span aria-hidden="true" className="flex flex-col gap-[5px]">
              <span className="h-px w-4 bg-current transition-transform duration-300 group-hover:translate-y-[3px]" />
              <span className="h-px w-4 bg-current transition-transform duration-300 group-hover:-translate-y-[3px]" />
            </span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative z-10 mx-auto max-w-[1360px] px-6 pb-16 pt-10 sm:px-10 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left: one orchestrated entrance */}
          <motion.div
            variants={container}
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            className="max-w-2xl"
          >
            <motion.h1
              variants={item}
              className={`${display.className} text-balance text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-white`}
            >
              Websites that turn visitors into customers.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-[34rem] text-base leading-8 text-slate-300 sm:text-lg"
            >
              I design and build fast, polished websites for businesses that
              want more enquiries, more bookings and more sales from the people
              who already visit.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-lime-400 px-7 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300 hover:shadow-[0_12px_36px_rgba(163,230,53,0.22)] ${focusRing}`}
              >
                Chat me on WhatsApp
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/work"
                className={`inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.06] ${focusRing}`}
              >
                View my work
              </Link>
            </motion.div>

            {/* Strengths: plain text, hairline-separated */}
            <motion.dl
              variants={item}
              className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-0"
            >
              {strengths.map((s, i) => (
                <div
                  key={s.title}
                  className={`sm:px-6 ${
                    i === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/10"
                  } ${i === strengths.length - 1 ? "sm:pr-0" : ""}`}
                >
                  <dt className="text-sm font-semibold text-white">
                    {s.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-400">
                    {s.description}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Right: portrait */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[490px] lg:ml-auto"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#111827]">
                <Image
                  src="/images/Tobi.jpeg"
                  alt="Tobi Babalola, web designer and developer"
                  width={780}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 90vw, 490px"
                  className="h-[440px] w-full object-cover object-center sm:h-[560px] lg:h-[620px]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#070A12]/70 via-transparent to-transparent"
                />

                {/* Availability lives on the portrait */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#070A12]/70 px-3.5 py-2 backdrop-blur-md sm:left-5 sm:top-5">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                  </span>
                  <span className="text-xs font-medium text-white">
                    Available for select projects
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#070A12]/60 px-5 py-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <p
                    className={`${display.className} text-lg font-semibold tracking-tight text-white`}
                  >
                    Tobi Babalola
                  </p>
                  <p className="mt-0.5 text-sm text-slate-300">
                    Independent designer & developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex justify-start sm:mt-20">
          <a
            href="#skills"
            className={`group inline-flex items-center gap-3 rounded-full text-sm font-medium text-slate-300 transition-colors hover:text-white ${focusRing}`}
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-lime-400/60 group-hover:text-lime-300"
            >
              <ArrowDown size={15} />
            </span>
            See what I do
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
