"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  CheckCircle2,
  Sparkles,
  Paintbrush,
  BellRing,
  Smartphone,
  ListTodo,
} from "lucide-react";

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
  {
    icon: BellRing,
    title: "Gentle Reminders",
    body: "Stay on track with helpful nudges—never noisy, always timely.",
  },
  {
    icon: Smartphone,
    title: "Home Screen Ready",
    body: "Your tasks live where you look most: on your wallpaper.",
  },
  {
    icon: ListTodo,
    title: "Simple Tasking",
    body: "Fast capture and reordering with zero friction.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-5xl px-4 pt-20 md:pt-32 lg:pt-48"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          Features that keep life on track
        </h2>
        <p className="mt-3 text-muted-foreground">
          WallList is built to be effortless—just the essentials that make your
          todos visible, organized, and impossible to forget.
        </p>
      </div>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li key={f.title} className="list-none">
            <div className="relative h-full rounded-2xl border border-border md:rounded-3xl p-2 bg-background">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col gap-4 rounded-xl bg-background p-6 md:p-8 shadow-sm">
                <f.icon className="h-6 w-6 text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
