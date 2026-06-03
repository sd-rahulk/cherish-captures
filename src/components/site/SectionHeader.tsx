export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-14 md:mb-20`}>
      <p className={`text-[11px] tracking-luxe uppercase mb-5 ${light ? "text-[var(--color-gold)]" : "text-gold"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <>
          <div className={`gold-divider mt-8 ${center ? "mx-auto" : ""}`} />
          <p className={`mt-6 text-base md:text-lg leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
