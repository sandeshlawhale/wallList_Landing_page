import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-background">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--border),transparent_1px),linear-gradient(to_bottom,var(--border),transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--border),transparent_1px),linear-gradient(to_bottom,var(--border),transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_50%,white)] bg-background"></div>
    </div>
  );
}
