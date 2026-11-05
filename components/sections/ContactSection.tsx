"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Mail,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

type FormStatus = "idle" | "success" | "error";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      setStatusMessage(
        "Your message has been sent. I'll get back to you shortly.",
      );

      setFormData({
        name: "",
        email: "",
        message: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const trustPoints = [
    { label: "Replies within one business day", icon: Clock3 },
    { label: "Clear project direction", icon: BadgeCheck },
    { label: "Thoughtful execution", icon: Sparkles },
  ];

  const fieldClass =
    "w-full rounded-xl border border-[#E5E9E1] bg-[#F9FAF7] px-4 py-3.5 text-sm text-[#17212B] outline-none transition-all duration-300 placeholder:text-[#9AA39A] focus:border-lime-600 focus:bg-white focus:ring-4 focus:ring-lime-600/10";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#F6F7F2] py-24 text-[#17212B] sm:py-28 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(23,33,43,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(23,33,43,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -35, 15, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-lime-300/30 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-sky-200/40 blur-[130px]"
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DCE4D5] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease }}
          className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-lime-700" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#788174]">
                Let's talk
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#17212B] sm:text-5xl lg:text-[4.4rem]">
              Have a project in mind?
              <br />
              <span className="text-lime-700">Let's make it happen.</span>
            </h2>
          </div>

          <p className="max-w-lg text-[15px] leading-8 text-[#68736B] sm:text-base lg:ml-auto">
            Whether you're building a new website, improving an existing one, or
            developing a custom digital product, I'd love to hear what you're
            working on.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Information panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease }}
            className="relative overflow-hidden rounded-[1.8rem] border border-[#E6EAE2] bg-white p-7 shadow-[0_20px_70px_rgba(23,33,43,0.045)] sm:p-9"
          >
            {/* Card glow */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lime-200/50 blur-[90px]"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-200 bg-lime-50 px-3.5 py-2 text-xs font-semibold text-lime-800">
                <Zap size={14} />
                Project enquiries welcome
              </div>

              <h3 className="mt-8 max-w-md text-2xl font-semibold leading-snug tracking-tight text-[#17212B] sm:text-3xl">
                Let's create something your customers will remember.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#758078] sm:text-[15px]">
                I work with businesses, founders and teams to create purposeful
                digital experiences — combining good design, thoughtful
                development and a focus on results.
              </p>

              {/* Trust points */}
              <div className="mt-9 space-y-4">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <motion.div
                      key={point.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.1,
                        ease,
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E8EDE3] bg-[#F7F9F4] text-lime-700">
                        <Icon size={17} />
                      </div>

                      <span className="text-sm font-medium text-[#59645C]">
                        {point.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* WhatsApp */}
              <div className="mt-10 border-t border-[#EDF0EA] pt-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#929B91]">
                  Prefer a direct conversation?
                </p>

                <a
                  href="https://wa.me/2348105333852?text=Hi%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-[#E9EDE5] bg-[#F9FAF7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-lime-300 hover:bg-lime-50/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-100 text-lime-800 transition-colors group-hover:bg-lime-200">
                      <MessageCircle size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#17212B]">
                        Chat on WhatsApp
                      </p>
                      <p className="mt-1 text-xs text-[#929B91]">
                        Let's discuss your project
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#9AA39A] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime-700"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease }}
            className="rounded-[1.8rem] border border-[#E6EAE2] bg-white p-7 shadow-[0_20px_70px_rgba(23,33,43,0.055)] sm:p-9"
          >
            <div className="mb-8">
              <div className="flex items-center gap-2 text-lime-700">
                <Mail size={17} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
                  Start a conversation
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#17212B]">
                Tell me what you have in mind.
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#879087]">
                Share a few details and I'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#465149]"
                >
                  Your name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should I call you?"
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#465149]"
                >
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={fieldClass}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-[#465149]"
                >
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="What are you looking to build? What challenges are you trying to solve?"
                  rows={6}
                  maxLength={5000}
                  required
                  className={`${fieldClass} resize-none leading-7`}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#17212B] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending your message..." : "Send project enquiry"}

                {!loading && (
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              {/* Form feedback */}
              {statusMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
                    status === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <p className="text-center text-xs leading-6 text-[#A0A89F]">
                Your project details are sent directly to my inbox.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
