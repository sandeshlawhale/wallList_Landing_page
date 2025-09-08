import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { FinalCTA } from "@/components/landing/final-cta";
import { About } from "@/components/landing/about";
import BentoGallery from "@/components/landing/BentoGallery";
import FAQ from "@/components/landing/faq";

export default function WalllistLanding() {
  return (
    <div className="min-h-screen bg-background my-12 md:my-8 lg:my-16 space-y-20 md:space-y-32 lg:space-y-48">
      <Hero />
      <About />
      <Features />
      <BentoGallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
