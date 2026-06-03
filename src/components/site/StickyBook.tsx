import { MessageCircle } from "lucide-react";

export function StickyBook() {
  return (
    <a
      href="https://wa.me/919999999999"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-foreground text-background pl-4 pr-5 py-3 shadow-[var(--shadow-luxe)] hover:bg-gold hover:text-background transition-all group"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="text-[11px] tracking-luxe uppercase">Book Now</span>
    </a>
  );
}
