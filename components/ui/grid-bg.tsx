import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--border),transparent_2px),linear-gradient(to_bottom,var(--border),transparent_2px)]",
          "dark:[background-image:linear-gradient(to_right,var(--border),transparent_2px),linear-gradient(to_bottom,var(--border),transparent_2px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_bottom_right,transparent_0%,white)] bg-background" />
      <div className="bg-[radial-gradient(at_top_left,transparent_60%,var(--accent))] pointer-events-none absolute inset-0 flex items-center justify-center" />
    </div>
  );
}
