import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  { q: "How do I book a session?", a: "Send us an inquiry through the contact form or WhatsApp. We'll reply within 24 hours with availability and a custom proposal. A 25% retainer secures your date." },
  { q: "How long until I receive my photos?", a: "Portrait sessions are delivered in 7–10 days. Weddings and events are delivered in 2–3 weeks via a private online gallery." },
  { q: "Do you travel for shoots?", a: "Absolutely. We photograph weddings and editorials across India and internationally. Travel and stay are billed at actuals." },
  { q: "Do you provide raw files?", a: "We deliver fully retouched, high-resolution JPEGs that represent our finished work. Raw files are not part of our standard delivery." },
  { q: "What is your cancellation policy?", a: "The 25% retainer is non-refundable. Cancellations more than 60 days from the shoot are eligible to apply the retainer to a future date." },
  { q: "What should I wear?", a: "We send a detailed style guide once your session is booked, with palette suggestions and fabric recommendations to suit the location." },
  { q: "How many photos will I receive?", a: "It varies by session — 30+ for newborns, 80+ for pre-weddings, and 500+ for full-day weddings. Quality always over quantity." },
  { q: "Can I customize a package?", a: "Yes. Every package is a starting point. We'll shape coverage, deliverables, and add-ons around your specific needs." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Frequently Asked"
          title="Everything You Might Be Wondering"
        />
        <div className="max-w-3xl mx-auto divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl md:text-2xl">{f.q}</span>
                <Plus className={`h-5 w-5 flex-shrink-0 text-gold transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground leading-relaxed pr-12">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
