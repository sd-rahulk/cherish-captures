import heroImg from "@/assets/hero-wedding-DrTEKxt6.jpg";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bride and groom embracing at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      <div className="relative container-luxe flex min-h-screen flex-col justify-end pb-20 pt-32 text-white">
        <div className="max-w-3xl reveal-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-[var(--color-gold)]" />
            <span className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)]">
              Est. 2017 · aanurag Photography
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
            Capturing Moments.
            <br />
            <em className="text-[var(--color-gold)] not-italic font-light">Preserving</em> Emotions.
          </h1>
          <p className="max-w-xl text-base md:text-lg text-white/80 mb-10 leading-relaxed">
            Professional photography that transforms your most precious memories into
            timeless stories — crafted with cinematic detail and quiet intention.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[var(--color-gold)] text-black px-8 py-4 text-xs tracking-luxe uppercase hover:bg-white transition-colors"
            >
              Book a Session
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-xs tracking-luxe uppercase hover:bg-white hover:text-black transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 text-white/85 fade-in-slow">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
            <span className="text-sm font-medium">4.9</span>
            <span className="text-xs text-white/60">/ 5</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <p className="text-xs tracking-luxe uppercase">107+ Verified Reviews</p>
          <div className="h-4 w-px bg-white/20" />
          <p className="text-xs tracking-luxe uppercase">1000+ Happy Clients</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] tracking-luxe uppercase">Scroll</span>
        <span className="h-12 w-px bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}
