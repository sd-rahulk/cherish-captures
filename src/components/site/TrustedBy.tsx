const brands = [
  "TAJ HOTELS", "VOGUE INDIA", "OBEROI", "FORBES", "HARPER'S BAZAAR",
  "WEDDINGSUTRA", "TANISHQ", "MARRIOTT",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-muted/40 py-10">
      <div className="container-luxe">
        <p className="text-center text-[10px] tracking-luxe uppercase text-muted-foreground mb-8">
          Trusted by leading brands & wedding planners
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center font-serif text-sm tracking-[0.2em] text-muted-foreground/70 hover:text-foreground transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
