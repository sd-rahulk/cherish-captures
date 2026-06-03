import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { name: "Wedding Photography", price: "₹25,000", desc: "Full-day coverage with cinematic storytelling, two photographers, and a heirloom album.", deliverables: "500+ edited photos · Online gallery · Album included" },
  { name: "Pre-Wedding Shoot", price: "₹12,000", desc: "Three-hour location shoot designed around your story and chemistry.", deliverables: "80+ edited photos · 2 outfit changes" },
  { name: "Maternity Photography", price: "₹8,000", desc: "Gentle, fine-art portraits celebrating the glow of pregnancy.", deliverables: "40+ edited photos · Studio or outdoor" },
  { name: "Newborn Photography", price: "₹8,000", desc: "Calm, in-home or studio newborn sessions in the first 14 days.", deliverables: "30+ edited photos · Props included" },
  { name: "Family Portraits", price: "₹6,000", desc: "Relaxed, candid family sessions that feel like home.", deliverables: "50+ edited photos · 90-minute session" },
  { name: "Corporate Headshots", price: "₹5,000", desc: "Polished, modern headshots for executives, teams, and creatives.", deliverables: "3 retouched portraits · LinkedIn-ready" },
  { name: "Commercial Photography", price: "Custom", desc: "Product, lifestyle, and brand campaigns shot in-studio or on-location.", deliverables: "Licensing included · Art direction" },
  { name: "Event Photography", price: "Custom", desc: "Conferences, launches, parties, and milestone celebrations.", deliverables: "Same-day previews · Coverage as required" },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Services & Investment"
          title="Crafted Sessions, Honest Pricing"
          subtitle="Every package is a starting point — we'll shape it around your story, venue, and timeline."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map((s) => (
            <a
              key={s.name}
              href="#contact"
              className="group bg-background p-8 flex flex-col transition-all hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-6">
                <p className="text-[10px] tracking-luxe uppercase text-gold group-hover:text-[var(--color-gold)]">
                  Starting from
                </p>
                <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition-all" />
              </div>
              <p className="font-serif text-3xl mb-1">{s.price}</p>
              <h3 className="font-serif text-xl mt-6 mb-3">{s.name}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed mb-6 flex-1">
                {s.desc}
              </p>
              <p className="text-[11px] tracking-wide text-muted-foreground/80 group-hover:text-background/60 border-t border-border group-hover:border-background/20 pt-4">
                {s.deliverables}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
