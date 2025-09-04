import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Paintbrush } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const features = [
  {
    icon: CheckCircle2,
    title: "Focused Productivity",
    body: "Keep your top tasks on your wallpaper so they never get lost in tabs.",
  },
  {
    icon: Paintbrush,
    title: "Beautifully Minimal",
    body: "Clean, calm layouts that feel at home on any phone or desktop.",
  },
  {
    icon: Sparkles,
    title: "Smart Priorities",
    body: "AI (coming soon) helps you pick what matters most each day.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Everything you need, nothing you don’t</h2>
          <p className="mt-3 text-muted-foreground">
            Simple, intentional features designed to help you ship, not distract.
          </p>
        </div>
      </ScrollReveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:grid-cols-3">
        {features.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 90}>
            <Card className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.body}</CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
