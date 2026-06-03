import { useEffect, useState } from "react";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Cherish</span>
          <span className="text-[10px] tracking-luxe text-gold uppercase">Photography</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-luxe uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-xs tracking-luxe uppercase text-foreground hover:bg-gold hover:text-background transition-all"
        >
          Book Session
        </a>
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-luxe py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm tracking-luxe uppercase">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="border border-gold text-center py-3 text-xs tracking-luxe uppercase">
              Book Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
