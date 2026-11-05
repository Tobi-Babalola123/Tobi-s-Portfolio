import { Button, Img, Section } from "@/components/ui/ui";

function Feature({
  id,
  flip,
  img,
  alt,
  title,
  p,
  cta,
}: {
  id?: string;
  flip?: boolean;
  img: string;
  alt: string;
  title: string;
  p: string[];
  cta?: string;
}) {
  return (
    <Section id={id}>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <Img
          src={img}
          alt={alt}
          className={`aspect-[4/3] object-cover ${flip ? "md:order-2" : ""}`}
        />

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-brand">
            Eliza Film Production
          </p>

          <h2 className="mt-2 text-2xl font-light uppercase tracking-wide sm:text-3xl">
            {title}
          </h2>

          {p.map((t) => (
            <p key={t} className="mt-3 text-[13px] text-mute">
              {t}
            </p>
          ))}

          {cta && (
            <Button small className="mt-5" href="#contact">
              {cta}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}

export const ControlRoom = () => (
  <Feature
    id="studio"
    img="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85"
    alt="Professional recording studio with a mixing console and audio equipment"
    title="The control room"
    p={[
      "Our control room pairs a large-format mixing console with a wall of calibrated monitors, so directors and engineers see and hear exactly what the cameras capture.",
      "Routing, intercom and playback are built in, letting a crew run a live shoot or a recording session from one comfortable room.",
    ]}
  />
);

export const StudioSpace = () => (
  <Feature
    flip
    img="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85"
    alt="Professional video production setup with studio equipment"
    title="A space for big ideas"
    p={[
      "A seamless white cyc wall and a wide-open floor give you a blank canvas for music videos, product shoots and photography.",
      "Grid lighting, power and loading access are ready, so your team can build, shoot and strike without delay.",
    ]}
    cta="EXPLORE THE STUDIO"
  />
);
