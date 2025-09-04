"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-5xl px-4 pt-8 md:pt-20 lg:pt-32 text-center"
    >
      <blockquote
        className={`${inter.className} text-xl md:text-2xl lg:text-4xl font-semibold leading-snug text-foreground`}
      >
        <span className="text-accent">WallList</span> puts your tasks where you
        can&apos;t ignore them—right on your{" "}
        <span className="text-accent">wallpaper</span>. No clutter, no noisy
        reminders. Just quiet focus on what matters most.
      </blockquote>

      <div className="mt-8 flex gap-2 items-center justify-center">
        <Image
          src="/placeholder-user.jpg"
          alt="Founder"
          width={48}
          height={48}
          className="rounded-full border border-border"
        />
        <div className="flex flex-col items-start justify-center ">
          <Link
            href="https://sandeshlawhale.vercel.app"
            className="text-balance font-semibold text-foreground hover:text-accent cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Sandesh Lawhale
          </Link>
          <p className="text-xs text-muted-foreground">Creator of WallList</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 mx-auto max-w-3xl rounded-full bg-gradient-to-t from-primary/10 via-transparent to-transparent blur-3xl" />
    </section>
  );
}
