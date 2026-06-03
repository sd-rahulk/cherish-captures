import { useState } from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().min(7, "Please share a contact number").max(20),
  eventType: z.string().trim().min(1, "Please pick an event type"),
  date: z.string().max(50).optional(),
  budget: z.string().max(50).optional(),
  message: z.string().trim().max(1000).optional(),
});

const events = ["Wedding", "Pre-Wedding", "Maternity", "Newborn", "Family", "Corporate", "Commercial", "Event"];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "", date: "", budget: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    toast.success("Thank you. We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", eventType: "", date: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-muted/30">
      <div className="container-luxe grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Let's Create Something Beautiful Together"
            subtitle="Tell us about your story. We'll reply within 24 hours with availability and a tailored proposal."
            center={false}
          />
          <div className="space-y-5 mt-10">
            <a href="tel:+919999999999" className="flex items-start gap-4 group">
              <Phone className="h-5 w-5 text-gold mt-1" />
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Call</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">+91 99999 99999</p>
              </div>
            </a>
            <a href="https://wa.me/919999999999" className="flex items-start gap-4 group">
              <MessageCircle className="h-5 w-5 text-gold mt-1" />
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">WhatsApp</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">Chat with us instantly</p>
              </div>
            </a>
            <a href="mailto:hello@aanuragphoto.com" className="flex items-start gap-4 group">
              <Mail className="h-5 w-5 text-gold mt-1" />
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Email</p>
                <p className="font-serif text-lg group-hover:text-gold transition-colors">hello@aanuragphoto.com</p>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-gold mt-1" />
              <div>
                <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">Studio</p>
                <p className="font-serif text-lg">Mumbai · Available worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-background p-8 md:p-12 border border-border shadow-[var(--shadow-soft)]">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Event Type</label>
              <div className="flex flex-wrap gap-2">
                {events.map((ev) => (
                  <button
                    type="button"
                    key={ev}
                    onClick={() => setForm({ ...form, eventType: ev })}
                    className={`px-4 py-2 text-xs tracking-wide border transition-all ${
                      form.eventType === ev
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-gold"
                    }`}
                  >
                    {ev}
                  </button>
                ))}
              </div>
            </div>
            <Field label="Preferred Date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
            <Field label="Budget (optional)" value={form.budget} onChange={(v) => setForm({ ...form, budget: v })} placeholder="₹ — to ₹ —" />
            <div className="sm:col-span-2">
              <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">Tell us about your story</label>
              <textarea
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground resize-none transition-colors"
              />
            </div>
          </div>
          <button type="submit" className="mt-10 w-full bg-foreground text-background py-4 text-xs tracking-luxe uppercase hover:bg-gold hover:text-background transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", className = "", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; className?: string; placeholder?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-[10px] tracking-luxe uppercase text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={200}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
      />
    </div>
  );
}
