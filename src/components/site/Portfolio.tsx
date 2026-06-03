import { useState } from "react";
import maternity from "@/assets/portfolio-maternity.jpg";
import newborn from "@/assets/portfolio-newborn.jpg";
import couple from "@/assets/portfolio-couple.jpg";
import corporate from "@/assets/portfolio-corporate.jpg";
import family from "@/assets/portfolio-family.jpg";
import wedding2 from "@/assets/portfolio-wedding2.jpg";
import commercial from "@/assets/portfolio-commercial.jpg";
import hero from "@/assets/hero-wedding.jpg";
import { SectionHeader } from "./SectionHeader";

type Item = { src: string; category: string; title: string; tall?: boolean; wide?: boolean };

const items: Item[] = [
  { src: wedding2, category: "Weddings", title: "Anjali & Rohan", tall: true },
  { src: couple, category: "Couples", title: "Misty Mornings", wide: true },
  { src: newborn, category: "Newborn", title: "Tiny Hands" },
  { src: family, category: "Family", title: "Golden Hour", wide: true },
  { src: maternity, category: "Maternity", title: "Light & Life", tall: true },
  { src: hero, category: "Weddings", title: "Vows at Dusk" },
  { src: corporate, category: "Corporate", title: "Boardroom" },
  { src: commercial, category: "Commercial", title: "Marble & Glass" },
];

const categories = ["All", "Weddings", "Couples", "Maternity", "Newborn", "Family", "Corporate", "Commercial"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Featured Portfolio"
          title="A Decade of Stories, Frame by Frame"
          subtitle="Selected work from weddings, families, and brands we've had the privilege of photographing."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-[11px] tracking-luxe uppercase border transition-all ${
                active === c
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <figure
              key={item.title + i}
              className={`group relative overflow-hidden cursor-pointer ${
                item.tall ? "row-span-2" : ""
              } ${item.wide ? "col-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] tracking-luxe uppercase text-[var(--color-gold)]">{item.category}</p>
                <p className="font-serif text-xl mt-1">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
