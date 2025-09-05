"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import Masonry from "react-masonry-css";
import { Button } from "../ui/button";

const TestimonialItems = [
  {
    name: "Emily Watson",
    role: "Student",
    quote:
      "Tasks on my wallpaper keep me on track like nothing else has. Tasks on my wallpaper keep me on track like nothing else has.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    quote:
      "Walllist changed how I manage my day. Always visible, always focused.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Designer",
    quote:
      "Beautiful customization without losing productivity. Perfect balance.",
    rating: 4,
  },
];

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export function Testimonials() {
  return (
    <section
      id="features"
      className="mx-auto max-w-5xl px-4 pt-20 md:pt-32 lg:pt-48 space-y-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          What people say
        </h2>
        <p className="mt-3 text-muted-foreground">
          Listen to what people feel about WallList.
        </p>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-2"
        columnClassName="bg-clip-padding"
      >
        {TestimonialItems?.map((item, i) => (
          <Card className="shadow-lg my-2 p-0" key={`testimonial_${i}`}>
            <CardContent className="p-6 space-y-2">
              {/* <div className="flex justify-start space-x-1">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div> */}
              <p className="text-muted-foreground text-pretty">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-2">
                <p className="w-10 aspect-square rounded-full bg-muted flex items-center justify-center text-xl">
                  {item.role.slice(0, 1)}
                </p>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Masonry>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="relative px-6 py-3 flex items-center justify-center border border-border rounded-md cursor-pointer shadow-lg">
          <div className="absolute w-full h-px inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p>Share your experience</p>
        </button>
      </div>
    </section>
  );
}
