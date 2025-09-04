import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "wallList - List and Conquer",
  description:
    "WallList is a minimalist task management app designed to help you organize your tasks efficiently and effectively to your wallpaper.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body
        style={
          {
            // Core shadcn tokens mapped to your palette
            // Using exactly 5 visible colors in UI: background, card, primary, secondary, text
            // Other tokens are defined for consistency but minimally used.
            ["--background" as any]: "#FFFFFF",
            ["--foreground" as any]: "#000000",
            ["--card" as any]: "#F5F5F5",
            ["--card-foreground" as any]: "#000000",
            ["--muted" as any]: "#F5F5F5",
            ["--muted-foreground" as any]: "#4A4A4A",
            ["--border" as any]: "#E0E0E0",
            ["--input" as any]: "#E0E0E0",
            ["--primary" as any]: "#6200EE",
            ["--primary-foreground" as any]: "#FFFFFF",
            ["--secondary" as any]: "#018786",
            ["--secondary-foreground" as any]: "#FFFFFF",
            ["--ring" as any]: "#6200EE",
            ["--destructive" as any]: "#B00020",
            ["--destructive-foreground" as any]: "#FFFFFF",
            // Popover/tooltip surfaces
            ["--popover" as any]: "#FFFFFF",
            ["--popover-foreground" as any]: "#000000",
          } as React.CSSProperties
        }
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-dvh bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
