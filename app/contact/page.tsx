"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-white text-neutral-950">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-neutral-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=85"
          alt="Live music production"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-36">
          <p className="text-[11px] uppercase tracking-[.3em] text-white/70">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-light uppercase sm:text-6xl">
            Let's make something happen.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
            Have a production idea, collaboration or project in mind? We'd love
            to hear about it.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28">
        {/* Contact information */}
        <div>
          <p className="text-[11px] uppercase tracking-[.25em] text-neutral-500">
            Contact Information
          </p>

          <h2 className="mt-4 text-3xl font-light uppercase">
            Start a conversation.
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-600">
            Tell us a little about what you're looking to create. Whether it's a
            video production, live recording or creative collaboration, we're
            ready to talk.
          </p>

          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <Mail size={20} strokeWidth={1.4} />

              <div>
                <p className="text-xs uppercase tracking-wider">Email</p>
                <a
                  href="mailto:hello@framehousestudios.com"
                  className="mt-2 block text-sm text-neutral-500 hover:text-black"
                >
                  elizafilmsproduction@tvstar.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin size={20} strokeWidth={1.4} />

              <div>
                <p className="text-xs uppercase tracking-wider">Studio</p>
                <p className="mt-2 text-sm text-neutral-500">
                  2023 Crinella Drive Petaluma California 94954
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry form */}
        <div className="bg-neutral-50 p-6 sm:p-10">
          <p className="text-[11px] uppercase tracking-[.25em] text-neutral-500">
            Production Enquiry
          </p>

          <h2 className="mt-3 text-2xl font-light uppercase">
            Tell us about your project.
          </h2>

          {submitted ? (
            <div className="mt-10 border border-neutral-200 bg-white p-7">
              <h3 className="text-lg font-medium">
                Thank you for reaching out.
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Your enquiry has been submitted.
              </p>
            </div>
          ) : (
            <form
              action="https://formsubmit.co/hello@framehousestudios.com"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Framehouse Studios Enquiry"
              />
              <input type="hidden" name="_captcha" value="true" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                    placeholder="Full name"
                  />
                </div>

                <div>
                  <label className="text-xs" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs" htmlFor="service">
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Video Production</option>
                  <option>Live Music Recording</option>
                  <option>Commercial Production</option>
                  <option>Creative Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs" htmlFor="message">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border-b border-neutral-300 bg-transparent px-0 py-3 text-sm outline-none focus:border-black"
                  placeholder="Describe your project, timeline and what you have in mind..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-neutral-950 px-7 py-4 text-xs tracking-widest text-white transition hover:bg-neutral-700"
              >
                SEND ENQUIRY
                <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
