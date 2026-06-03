import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { name: "Priya & Arjun", event: "Wedding · Udaipur", text: "aanurag Photography captured our wedding beautifully. Every image feels emotional, natural, and timeless — we relive the day every time we open the album." },
  { name: "Neha Kapoor", event: "Maternity Session", text: "I was nervous on camera, but the team made me feel so at ease. The photos brought me to tears — quiet, gentle, and unforgettable." },
  { name: "The Mehra Family", event: "Family Portraits", text: "Three generations in one frame, all genuinely laughing. They have a gift for catching the in-between moments that matter most." },
  { name: "Rahul Sinha", event: "Corporate Headshots", text: "Polished, modern, and turned around in three days. Easily the best headshot experience I've had in my career." },
  { name: "Ananya & Vikram", event: "Pre-Wedding · Goa", text: "Cinematic does not begin to describe it. The team treated our story like a film — every frame feels intentional." },
  { name: "Shreya Bansal", event: "Newborn Session", text: "Calm, patient, and incredibly skilled with our baby. The photos are tender and beautifully lit. Worth every rupee." },
  { name: "Tanvi & Karan", event: "Wedding · Jaipur", text: "We have looked through hundreds of wedding portfolios. None felt as soulful as aanurag. They delivered beyond expectation." },
  { name: "Rohit Verma", event: "Commercial · Brand Campaign", text: "Professional, on-brief, and creatively daring. Our campaign visuals outperformed last year by every metric." },
  { name: "Meera & Aakash", event: "Engagement Shoot", text: "We laughed the entire shoot. Then the gallery arrived and we cried. That tells you everything." },
  { name: "Kavya Iyer", event: "Maternity Session", text: "The light, the styling, the calm direction — it felt like a luxury experience from start to finish." },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-36 bg-foreground text-background">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Client Stories"
          title="Words from Those Who've Trusted Us"
          subtitle="A glimpse of what couples, families, and brands say after their session."
          light
        />

        <div className="max-w-4xl mx-auto text-center">
          <Quote className="mx-auto h-10 w-10 text-[var(--color-gold)] mb-8" />
          <div className="flex justify-center mb-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
            ))}
          </div>
          <blockquote className="font-serif text-2xl md:text-4xl leading-[1.4] text-white/95 mb-10 min-h-[180px] reveal-up" key={index}>
            "{t.text}"
          </blockquote>
          <p className="font-serif text-xl">{t.name}</p>
          <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mt-2">{t.event}</p>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button onClick={prev} aria-label="Previous" className="h-12 w-12 border border-white/30 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-black flex items-center justify-center transition-all">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs tracking-luxe text-white/60">
              {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button onClick={next} aria-label="Next" className="h-12 w-12 border border-white/30 hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-black flex items-center justify-center transition-all">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
