"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CheckSquare, Smartphone, Tag, Layers, BellOff } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Wallpaper Integration",
    body: "Set todos on both your home screen and lock screen wallpapers.",
  },
  {
    icon: CheckSquare,
    title: "Todos & Sub-Todos",
    body: "Break down big tasks into smaller steps to stay organized.",
  },
  {
    icon: Tag,
    title: "Daily & Important Tags",
    body: "Highlight daily routines and mark important tasks with ease.",
  },
  {
    icon: Layers,
    title: "Labels for Clarity",
    body: "Group and categorize your todos with labels for better focus.",
  },
  {
    icon: BellOff,
    title: "Minimal & Silent",
    body: "Stay productive with clean layouts and zero notifications.",
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

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`flex-1 max-w-[300px] min-w-[220px]`}
            style={{
              flexBasis: i < 3 ? "30%" : "40%",
            }}
          >
            <div className="relative h-full rounded-2xl border border-border md:rounded-3xl p-2 bg-background shadow-lg">
              {/* <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              /> */}
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
          </div>
        ))}
      </div>
    </section>
  );
}
