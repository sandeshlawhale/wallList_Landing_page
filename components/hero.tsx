"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 pt-12 md:pt-16">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">
              Get more done by putting your tasks where you can’t ignore them.
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
              Walllist turns your to-dos into a beautiful, always-visible wallpaper. Focus on what matters with a calm,
              minimal workspace.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href="#download">Download Now</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#demo">Watch Demo</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Half-visible preview */}
      <div className="mx-auto mt-10 w-full max-w-5xl px-4">
        <div
          className="relative mx-auto w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          style={{ height: 320 }} // show top half only
          aria-label="App preview"
        >
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/90"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-12 rounded-b-xl shadow-[0_-24px_48px_-16px_rgba(0,0,0,0.12)]"
            aria-hidden="true"
          />
          <ScrollReveal delay={120} className="h-[640px] w-full">
            <Image
              src="/wallpaper-with-todo-list-app-mockup.png"
              alt="Walllist app preview on smartphone wallpaper"
              width={1920}
              height={1280}
              className="h-[640px] w-full rounded-t-xl object-cover"
              priority
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
