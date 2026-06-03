import { Award, Camera, Clock, Heart, Palette, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Award, title: "Professional Expertise", desc: "Years of experience capturing meaningful moments with editorial precision." },
  { icon: Camera, title: "High-End Equipment", desc: "Professional cameras, prime lenses, and studio-grade lighting on every shoot." },
  { icon: Clock, title: "Fast Delivery", desc: "Carefully edited galleries delivered in 2–3 weeks without compromise." },
  { icon: Heart, title: "Personalized Experience", desc: "Every shoot tailored to your story, your space, and your aesthetic." },
  { icon: Palette, title: "Natural Editing", desc: "Authentic colors and timeless retouching — never trendy, always lasting." },
  { icon: Users, title: "Loved by Clients", desc: "Hundreds of happy clients, glowing reviews, and a roster of returning families." },
];

export function WhyChoose() {
  return (
    <section className="py-24 md:py-36 bg-muted/30">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Why Choose Cherish"
          title="An Experience as Considered as the Photographs"
          subtitle="Six reasons couples, families, and brands trust us with their most important days."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-background p-10 transition-colors hover:bg-card"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-gold text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
