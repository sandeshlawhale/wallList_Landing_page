import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

export function FinalCTA() {
  return (
    <section id="download" className="mx-auto max-w-4xl px-4 py-16 md:py-20 text-center">
      <ScrollReveal>
        <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-4xl">
          Ready to put your tasks where they actually get done?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Download Walllist and make your home screen your focus screen.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Button size="lg">Download for iOS</Button>
          <Button size="lg" variant="secondary">
            Download for Android
          </Button>
        </div>
      </ScrollReveal>
    </section>
  )
}
