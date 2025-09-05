import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { About } from "@/components/landing/about";
import BentoGallery from "@/components/landing/BentoGallery";

export default function WalllistLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Features />
      <BentoGallery />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
