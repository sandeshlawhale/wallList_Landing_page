"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function LivePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1.04]);

  return (
    <section id="gallery" className="pt-12 md:pt-20 lg:pt-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Live Preview
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            See the interface in motion with subtle parallax.
          </p>
        </div>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-border bg-card p-6"
        >
          <motion.div
            style={{ y, scale }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/smartphone-mockup-showing-wallpaper-with-task-list.png"
              alt="Live app interface preview"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
