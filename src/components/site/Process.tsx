import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", title: "Inquiry", desc: "Reach out with your date, vision, and questions. We respond within 24 hours." },
  { n: "02", title: "Consultation", desc: "A relaxed call or meeting to understand your story and aesthetic." },
  { n: "03", title: "Planning", desc: "Custom timeline, mood board, and location scouting tailored to your day." },
  { n: "04", title: "Photoshoot", desc: "Calm direction, cinematic eye, and presence — we disappear into the moments." },
  { n: "05", title: "Editing", desc: "Hand-edited frames with natural color and timeless tone. No filters, no fads." },
  { n: "06", title: "Delivery", desc: "A private online gallery within 2–3 weeks, plus heirloom album options." },
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-muted/30">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="The Process"
          title="From First Hello to Heirloom Album"
          subtitle="A clear, considered path so you always know what's next."
        />
        <div className="relative grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-7 group hover:bg-foreground hover:text-background transition-colors">
              <p className="font-serif text-5xl text-gold group-hover:text-[var(--color-gold)] mb-6">{s.n}</p>
              <h3 className="font-serif text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
