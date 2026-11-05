"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Dribbble,
  Github,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Selected work", href: "/work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Twitter",
    href: "https://x.com/babalola_t4714",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/Tobi-Babalola123",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tobi-babalola/",
    icon: Linkedin,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/Tbabalola2024",
    icon: Dribbble,
  },
];

export default function FooterSection() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#111923] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 -top-48 h-[450px] w-[450px] rounded-full bg-lime-400/[0.09] blur-[140px]"
        />

        <div className="absolute -bottom-48 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-24">
        {/* Main footer content */}
        <div className="grid gap-16 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Brand introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="Tobi Babalola home"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-sm font-bold tracking-tight text-lime-300">
                TB
              </span>

              <span className="text-sm font-semibold tracking-wide text-white">
                TOBI BABALOLA
              </span>
            </Link>

            <h2 className="mt-8 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.4rem]">
              Thoughtful design.
              <br />
              <span className="text-lime-400">
                Meaningful digital experiences.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I design and develop modern websites and digital products that
              help businesses communicate clearly, build trust and turn more
              visitors into customers.
            </p>

            {/* Contact details */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <a
                href="mailto:babalolatobi308@gmail.com"
                className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-lime-300"
              >
                <Mail
                  size={16}
                  className="text-lime-400 transition-transform group-hover:-translate-y-0.5"
                />
                babalolatobi308@gmail.com
              </a>

              <a
                href="tel:+2348105333852"
                className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-lime-300"
              >
                <Phone
                  size={16}
                  className="text-lime-400 transition-transform group-hover:-translate-y-0.5"
                />
                +234 810 533 3852
              </a>
            </div>
          </motion.div>

          {/* Navigation and social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-2 gap-10 sm:gap-8"
          >
            {/* Navigation */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Explore
              </p>

              <div className="mt-7 space-y-4">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-lime-300"
                      >
                        {item.label}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-lime-300"
                      >
                        {item.label}
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
                Connect
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.label} profile`}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-lime-400/10 hover:text-lime-300"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>

              <p className="mt-6 max-w-[180px] text-xs leading-6 text-slate-500">
                Find me around the web. I'm always open to meaningful
                connections.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex flex-col gap-6 rounded-[1.6rem] border border-white/[0.09] bg-white/[0.035] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.65)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-lime-300">
                Available for select projects
              </span>
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Have something worth building?
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Let's turn your idea into something people love using.
            </p>
          </div>

          <a
            href="https://wa.me/2348105333852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-[#111923] transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300"
          >
            Start a project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tobi Babalola. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Designed & developed with</span>
            <span className="text-lime-400">intention.</span>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition hover:text-lime-300"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
