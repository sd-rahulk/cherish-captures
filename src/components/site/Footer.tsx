import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container-luxe">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-3xl">Cherish</span>
              <span className="text-[10px] tracking-luxe text-[var(--color-gold)] uppercase">Photography</span>
            </div>
            <p className="text-background/70 max-w-md leading-relaxed">
              Cinematic, soulful photography for weddings, families, and brands who
              value images that last a lifetime.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 border border-background/20 flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-[var(--color-gold)] mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-background/80">
              <li><a href="#portfolio" className="hover:text-[var(--color-gold)]">Portfolio</a></li>
              <li><a href="#services" className="hover:text-[var(--color-gold)]">Services</a></li>
              <li><a href="#about" className="hover:text-[var(--color-gold)]">About</a></li>
              <li><a href="#process" className="hover:text-[var(--color-gold)]">Process</a></li>
              <li><a href="#contact" className="hover:text-[var(--color-gold)]">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-luxe uppercase text-[var(--color-gold)] mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-background/80">
              <li>Mumbai, India</li>
              <li>+91 99999 99999</li>
              <li>hello@cherishphoto.com</li>
              <li>Mon — Sat · 10am — 7pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/50">
          <p>© {new Date().getFullYear()} Cherish Photography. All rights reserved.</p>
          <p>Crafted with care · Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
