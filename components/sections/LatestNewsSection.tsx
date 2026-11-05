import { news } from "@/lib/data";
import { Img, Section, SectionHeading } from "@/components/ui/ui";
export default function News() {
  return (
    <Section id="news">
      <SectionHeading label="Eliza Film Production" title="Latest stories" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {news.map((n) => (
          <article key={n.title} className="group">
            <Img src={n.img} alt="" className="aspect-video" />
            <p className="mt-3 text-[10px] uppercase tracking-wider text-mute">
              {n.date} · {n.cat}
            </p>
            <h3 className="mt-1 text-sm font-semibold">{n.title}</h3>
            <p className="mt-1 text-xs text-mute">{n.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center">
        <a
          href="#news"
          className="text-xs font-medium text-brand hover:underline"
        >
          View all stories
        </a>
      </p>
    </Section>
  );
}
