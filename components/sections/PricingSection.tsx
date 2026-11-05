"use client";

import React from "react";
import {
  ArrowUpRight,
  Code2,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Custom websites designed to make a strong first impression, communicate your value clearly, and turn visitors into customers.",
    deliverables: [
      "Custom responsive design",
      "Next.js & React development",
      "Animations and interactions",
      "SEO-ready structure",
    ],
    ideal: "Businesses, startups, and service providers",
    icon: MonitorSmartphone,
    featured: true,
  },
  {
    number: "02",
    title: "Website Redesign & CRO",
    description:
      "Strategic redesigns for websites that look outdated, lack direction, or aren't generating enough enquiries. Every section has a purpose.",
    deliverables: [
      "Website and UX audit",
      "Conversion-focused layouts",
      "Clear calls to action",
      "Improved user journeys",
    ],
    ideal: "Established businesses looking for better results",
    icon: Search,
  },
  {
    number: "03",
    title: "Custom Web Applications",
    description:
      "Functional digital products that help businesses manage operations, organize information, and deliver better experiences to their users.",
    deliverables: [
      "Dashboards and admin panels",
      "CRM and business tools",
      "Database integration",
      "Responsive application interfaces",
    ],
    ideal: "Growing businesses, SaaS founders, and teams",
    icon: LayoutDashboard,
  },
  {
    number: "04",
    title: "UI/UX & Frontend Engineering",
    description:
      "Thoughtful interface design translated into clean, responsive, and reusable code. Bridging the gap between design concepts and production-ready experiences.",
    deliverables: [
      "Figma to code implementation",
      "Reusable component systems",
      "Interactive UI development",
      "Frontend performance optimization",
    ],
    ideal: "Agencies, founders, and product teams",
    icon: Code2,
  },
];

const PricingSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#070B12] py-24 sm:py-28 lg:py-32"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
        <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-lime-400/[0.06] blur-[140px]" />
        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-lime-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50">
                What I do
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-white sm:text-5xl lg:text-[4.4rem]">
              More than good design.
              <br />
              <span className="text-lime-400">
                Digital experiences that work.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-lg text-[15px] leading-8 text-white/55 sm:text-base">
              I combine strategy, thoughtful design, and modern development to
              build websites and digital products that look exceptional, work
              seamlessly, and help businesses move forward.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className={`group relative overflow-hidden rounded-[1.6rem] border p-7 transition-all duration-500 sm:p-9 ${
                  service.featured
                    ? "border-lime-400/25 bg-lime-400/[0.055] hover:border-lime-400/45"
                    : "border-white/[0.09] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]"
                }`}
              >
                {/* Subtle hover highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lime-400/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        service.featured
                          ? "border-lime-400/20 bg-lime-400/10 text-lime-300"
                          : "border-white/10 bg-white/[0.05] text-white/70"
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-medium tracking-[0.2em] text-white/30">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/55 sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                      What&apos;s included
                    </p>

                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-white/70"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal clients */}
                  <div className="mt-8 border-t border-white/[0.09] pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
                      Best suited for
                    </p>

                    <p className="mt-2 text-sm text-white/65">
                      {service.ideal}
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-lime-300"
                  >
                    Discuss a project
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Sparkles size={16} className="text-lime-400" />
            <p className="text-sm text-white/50">
              Every project is scoped around its goals and requirements.
            </p>
          </div>

          <a
            href="https://wa.me/2348105333852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
          >
            Let&apos;s work together
            <Workflow size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
