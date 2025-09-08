import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../common/scroll-reveal";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section
      id="download"
      className="mx-auto max-w-5xl px-4 text-center"
      aria-label="Final Call to Action"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl">
        <div className="bg-gradient-to-r from-secondary to-secondary px-6 py-16 text-primary-foreground md:px-12">
          <ScrollReveal>
            <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-4xl w-3/4 mx-auto text-secondary-foreground">
              Ready to put your tasks where they actually get done?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-secondary-foreground/90">
              Turn your home screen into your personal productivity space.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/download"
                className="hover:text-foreground transition-colors cursor-pointer"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="cursor-pointer"
                  style={{ textShadow: "1px 2px 2px rgba(225,225,225,0.5)" }}
                >
                  Get the App
                </Button>
              </Link>
              {/* <Button
                size="lg"
                variant={"secondary"}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 cursor-pointer"
              >
                Learn More
              </Button> */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
