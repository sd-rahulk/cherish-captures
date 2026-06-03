import photographer from "@/assets/photographer.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-luxe grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <img
            src={photographer}
            alt="Founder of Cherish Photography holding a film camera"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-[500px] md:h-[640px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold text-background px-8 py-6">
            <p className="font-serif text-3xl">7+ Years</p>
            <p className="text-[10px] tracking-luxe uppercase">Behind the lens</p>
          </div>
        </div>

        <div>
          <p className="text-[11px] tracking-luxe uppercase text-gold mb-5">Behind The Lens</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            Meet the Photographer Behind the Memories
          </h2>
          <div className="gold-divider mb-8" />
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm Arjun Cherish — a photographer who believes the best images live in
              the half-seconds between poses. For over seven years, I've travelled
              across India and beyond photographing weddings, families, and brands
              that value craft over trend.
            </p>
            <p>
              Cherish Photography was built on a simple belief: that a great
              photograph isn't just looked at — it's remembered, returned to, and
              passed on. Every session, large or small, is approached with the same
              cinematic rigor and the same gentle eye.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-[10px] tracking-luxe uppercase text-muted-foreground">Awards</dt>
              <dd className="font-serif text-2xl mt-1">12+</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-luxe uppercase text-muted-foreground">Published In</dt>
              <dd className="font-serif text-2xl mt-1">8</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-luxe uppercase text-muted-foreground">Destinations</dt>
              <dd className="font-serif text-2xl mt-1">40+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
