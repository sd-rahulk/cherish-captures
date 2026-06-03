import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimal: true },
  { value: 7, suffix: "+", label: "Years Experience" },
];

function Counter({ value, suffix, decimal }: { value: number; suffix: string; decimal?: boolean }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-serif text-6xl md:text-7xl">
      {decimal ? n.toFixed(1) : Math.floor(n)}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 md:py-28 border-y border-border">
      <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <Counter value={s.value} suffix={s.suffix} decimal={s.decimal} />
            <p className="mt-3 text-[11px] tracking-luxe uppercase text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
