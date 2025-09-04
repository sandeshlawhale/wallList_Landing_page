import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ScrollReveal } from "./scroll-reveal"

const images = [
  "/minimal-wallpaper-style-1.png",
  "/minimal-wallpaper-style-2.png",
  "/minimal-wallpaper-style-3.png",
  "/minimal-wallpaper-style-4.png",
  "/minimal-wallpaper-style-5.png",
]

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Gallery Preview</h2>
          <p className="mt-3 text-muted-foreground">Explore wallpaper styles and customization options.</p>
        </div>
      </ScrollReveal>

      <ScrollArea className="mt-8 w-full whitespace-nowrap rounded-xl border border-border bg-card">
        <div className="flex w-max gap-4 p-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src || "/placeholder.svg"}
              alt={`Wallpaper style ${idx + 1}`}
              className="h-56 w-[360px] shrink-0 rounded-lg object-cover shadow-sm"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
