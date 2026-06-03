import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustedBy } from "@/components/site/TrustedBy";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { StickyBook } from "@/components/site/StickyBook";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cherish Photography — Luxury Wedding & Portrait Photographer" },
      { name: "description", content: "Cinematic wedding, maternity, newborn, family, and commercial photography. 1000+ happy clients · 4.9★ rated." },
      { property: "og:title", content: "Cherish Photography — Luxury Wedding & Portrait Photographer" },
      { property: "og:description", content: "Cinematic photography that transforms your most precious memories into timeless stories." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Portfolio />
        <WhyChoose />
        <Services />
        <Stats />
        <Testimonials />
        <About />
        <Process />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <StickyBook />
      <Toaster />
    </div>
  );
}
