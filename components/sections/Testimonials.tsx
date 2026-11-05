"use client";

import { motion } from "framer-motion";
import { Quote, Star, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Furkan Kaya",
    company: "Upwork",
    role: "Backend Developer",
    quote:
      "He completed the job exactly as I wanted and on time; a very good employee.",
    tag: "Landing Page Redesign",
    initials: "FK",
  },
  {
    name: "Uma Rajpoot",
    company: "Uma IT Solution",
    role: "Founder",
    quote:
      "Thanks for your support and excellent work. You have done a good job, and I appreciate your continued efforts to improve it.",
    tag: "Product Experience",
    initials: "UR",
  },
  {
    name: "Maya Alvarez",
    company: "Lumen AI",
    role: "VP Product",
    quote:
      "Our dashboard feels incredibly fast and polished now. Highly recommended for any modern product team.",
    tag: "Dashboard UI",
    initials: "MA",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F6F7F2] py-24 text-[#111827] sm:py-28 lg:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-lime-300/30 blur-[130px]" />

        <div className="absolute right-[-120px] top-[10%] h-[480px] w-[480px] rounded-full bg-violet-300/25 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[35%] h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid items-end gap-8 lg:grid-cols-[1fr_0.55fr]"
        >
          <div>
            <motion.div
              variants={cardVariants}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-lime-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Client experiences
              </span>
            </motion.div>

            <motion.h2
              variants={cardVariants}
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#111827] sm:text-5xl lg:text-[4.5rem]"
            >
              Good relationships.
              <br />
              <span className="text-lime-700">Great results.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={cardVariants}
            className="max-w-md text-base leading-8 text-slate-600 lg:ml-auto"
          >
            Every successful project starts with understanding the people behind
            it. Here's what clients have shared about their experience working
            with me.
          </motion.p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_12px_50px_rgba(15,23,42,0.045)] backdrop-blur-xl transition-all duration-500 hover:border-lime-300 hover:shadow-[0_24px_65px_rgba(15,23,42,0.09)] sm:p-8"
            >
              {/* Card gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-lime-100/50 via-transparent to-violet-100/50 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <span className="text-xs font-medium tracking-widest text-slate-300">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-9 flex-1">
                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className="text-lime-600/60"
                />

                <p className="mt-5 text-[15px] leading-[1.9] text-slate-600">
                  “{testimonial.quote}”
                </p>
              </div>

              <div className="relative mt-9 border-t border-slate-200 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-lime-200 bg-gradient-to-br from-lime-100 to-violet-100 text-sm font-bold text-slate-700">
                    {testimonial.initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {testimonial.tag}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime-700"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-7 text-slate-500">
            Looking for a thoughtful approach to your next website project?
            Let's make it happen.
          </p>

          <a
            href="https://wa.me/2348105333852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-slate-900 transition-colors hover:text-lime-700"
          >
            Let's work together
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition-all duration-300 group-hover:border-lime-500 group-hover:bg-lime-400">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
