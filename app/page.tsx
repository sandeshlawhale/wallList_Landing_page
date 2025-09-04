import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { LivePreview } from "@/components/landing/live-preview";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { About } from "@/components/landing/about";

export default function WalllistLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Features />
      <LivePreview />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
