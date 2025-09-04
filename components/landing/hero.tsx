"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "../common/scroll-reveal";
import Image from "next/image";
import { GridBackground } from "../ui/grid-bg";

export function Hero() {
  return (
    <section className="relative ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-140px] z-0 h-[320px] bg-[radial-gradient(ellipse_at_center,theme(colors.primary/20),transparent_60%)] blur-2xl"
      />
      <ScrollReveal>
        <div className="absolute inset-0 px-4 lg:px-0 max-w-5xl mx-auto aspect-video mt-12 md:mt-8 lg:mt-16">
          <div className="rounded-lg w-full h-full border border-muted overflow-hidden">
            <GridBackground />
          </div>
        </div>
      </ScrollReveal>
      <div className="relative z-10 mx-auto max-w-5xl px-8 lg:px-4 pt-12 md:pt-16 lg:pt-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">
              Get more done by putting your tasks where you can&apos;t ignore
              them.
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">
              Walllist turns your to-dos into a beautiful, always-visible
              wallpaper. Focus on what matters with a calm, minimal workspace.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href="/download">Get Started</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="group relative z-10 mx-auto mt-10 w-full max-w-5xl px-8 lg:px-4">
        <div
          className="relative mx-auto w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          aria-label="App preview"
        >
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent from-80% to-background/80 z-20 group-hover:opacity-0 transition-opacity duration-300 ease-in "
            aria-hidden="true"
          />
          <ScrollReveal delay={120} className="h-full w-full">
            <Image
              src="/smartphone-mockup-showing-wallpaper-with-task-list.png"
              alt="Walllist app preview on smartphone wallpaper"
              width={1920}
              height={1280}
              className="w-full aspect-video rounded-t-xl object-cover"
              priority
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
