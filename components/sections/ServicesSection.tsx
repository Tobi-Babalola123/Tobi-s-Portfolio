import { Video, Music, Radio, Briefcase } from "lucide-react";
import { services } from "@/lib/data";
import { Button, Section, SectionHeading } from "@/components/ui/ui";
const I = {
  video: Video,
  music: Music,
  radio: Radio,
  briefcase: Briefcase,
} as const;
export default function Services() {
  return (
    <Section id="services" className="pt-4">
      <SectionHeading
        label="Eliza Film Production"
        title="Production built around your vision"
        text="Our purpose-built campus, current equipment and experienced crew give you everything for a shoot of any size, from a single artist to a full live broadcast."
      />
      <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = I[s.icon as keyof typeof I];
          return (
            <article
              key={s.title}
              className={`flex flex-col items-center px-6 text-center ${i ? "lg:border-l lg:border-neutral-200" : ""}`}
            >
              <Icon size={44} strokeWidth={1.25} className="text-brand" />
              <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
              <p className="mt-3 flex-1 text-xs text-mute">{s.text}</p>
              <Button small className="mt-5" href="#contact">
                READ MORE
              </Button>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
