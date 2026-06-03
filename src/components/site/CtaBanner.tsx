import hero from "@/assets/hero-wedding.jpg";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative container-luxe text-center text-white">
        <p className="text-[11px] tracking-luxe uppercase text-[var(--color-gold)] mb-6">Begin Your Story</p>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-4xl mx-auto">
          Let's create something beautiful together.
        </h2>
        <div className="gold-divider mx-auto mt-10 mb-10" />
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-[var(--color-gold)] text-black px-10 py-5 text-xs tracking-luxe uppercase hover:bg-white transition-colors"
        >
          Book Your Session →
        </a>
      </div>
    </section>
  );
}
