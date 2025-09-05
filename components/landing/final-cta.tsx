import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../common/scroll-reveal";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="download"
      className="mx-auto max-w-5xl px-4 pt-20 md:pt-32 lg:pt-48 pb-8 md:pb-14 lg:pb-20 text-center"
      aria-label="Final Call to Action"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-accent/80 to-accent/40 px-6 py-16 text-primary-foreground md:px-12">
          <ScrollReveal>
            <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-4xl w-3/4 mx-auto">
              Ready to put your tasks where they actually get done?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-primary-foreground/90">
              Download Walllist and make your home screen your focus screen.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/download"
                className="hover:text-foreground transition-colors cursor-pointer"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="cursor-pointer"
                >
                  Get the App
                </Button>
              </Link>
              <Button
                size="lg"
                variant={"outline"}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
