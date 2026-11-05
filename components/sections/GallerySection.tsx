"use client";
import { useState } from "react";
import { gallery, galleryCats } from "@/lib/data";
import { Img, Section, SectionHeading } from "@/components/ui/ui";

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const items = gallery.filter((g) => cat === "All" || g.cat === cat);
  return (
    <Section id="gallery" gray className="sm:py-20">
      <SectionHeading
        label="Eliza Film Production"
        title="Inside our world"
        text="From packed stages to quiet recording sessions, a look at the artists and productions that pass through our doors."
      />
      <div
        role="group"
        aria-label="Filter gallery"
        className="mt-6 flex flex-wrap justify-center gap-x-4 text-xs"
      >
        {galleryCats.map((c) => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`min-h-11 px-1 ${cat === c ? "text-brand underline underline-offset-4" : "text-mute hover:text-ink"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((g, i) => (
          <li key={`${g.img}-${i}`} className="group">
            <Img
              src={g.img}
              alt={g.alt}
              className={i % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
