import Link from "next/link";
import { ArrowUpRight, Camera, Clapperboard, Music2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-950">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden bg-neutral-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=90"
          alt="Film production camera setup"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36">
          <p className="text-[11px] uppercase tracking-[.3em] text-white/70">
            About Framehouse Studios
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-light uppercase leading-tight tracking-wide sm:text-6xl">
            Creating stories that move people.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">
            We bring creative ideas to life through thoughtful production,
            powerful visuals and exceptional sound.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="text-[11px] uppercase tracking-[.25em] text-neutral-500">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-light uppercase leading-tight sm:text-4xl">
            More than a production studio.
          </h2>

          <p className="mt-6 text-sm leading-7 text-neutral-600">
            Framehouse Studios is a creative production space built around
            ideas, collaboration and the power of visual storytelling. We work
            across video production, live music recording and creative content
            to help artists, brands and businesses communicate with impact.
          </p>

          <p className="mt-4 text-sm leading-7 text-neutral-600">
            From the first conversation to the final edit, we bring creativity,
            technical expertise and attention to detail into every production.
          </p>
        </div>

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85"
            alt="Professional recording studio"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] uppercase tracking-[.25em] text-white/50">
            What We Do
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-light uppercase sm:text-4xl">
            Creative thinking. Technical precision. Powerful results.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Camera,
                title: "Video Production",
                text: "Visual storytelling, branded content, promotional films and creative video production.",
              },
              {
                icon: Music2,
                title: "Live Music Recording",
                text: "Professional music recording and live performance production that captures every moment.",
              },
              {
                icon: Clapperboard,
                title: "Creative Production",
                text: "From concept development to execution, we turn ambitious creative ideas into finished work.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-white/20 pt-7">
                  <Icon size={26} strokeWidth={1.3} />

                  <h3 className="mt-6 text-lg font-medium uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio image */}
      <section className="grid md:grid-cols-2">
        <div className="min-h-[350px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85"
            alt="Live music production"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex items-center bg-neutral-100 px-8 py-16 sm:px-16">
          <div className="max-w-md">
            <p className="text-[11px] uppercase tracking-[.25em] text-neutral-500">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-light uppercase leading-tight">
              Every great production starts with a great idea.
            </h2>

            <p className="mt-6 text-sm leading-7 text-neutral-600">
              We believe great work comes from collaboration, experimentation
              and a commitment to getting the details right. Our approach
              combines creative vision with the right people, tools and
              production environment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-[.25em] text-neutral-500">
          Let's Create Something
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-light uppercase sm:text-5xl">
          Have a project in mind?
        </h2>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 bg-neutral-950 px-7 py-4 text-xs tracking-widest text-white transition hover:bg-neutral-700"
        >
          START A CONVERSATION
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
