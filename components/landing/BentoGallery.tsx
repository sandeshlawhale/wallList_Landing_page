"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Screenshot = {
  id: number;
  src: string;
  title: string;
  description: string;
};

interface BentoGalleryProps {
  featured: Screenshot[]; // main storytelling flow (4–6)
  all: Screenshot[]; // extra screenshots (accordion)
}

export default function BentoGallery({ featured, all }: BentoGalleryProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState<Screenshot | null>(null);

  return (
    <section className="w-full py-16">
      <h2 className="text-center text-3xl font-bold mb-10 text-foreground">
        See WallList in Action
      </h2>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {featured.map((shot) => (
          <motion.div
            key={shot.id}
            className="relative rounded-2xl overflow-hidden shadow-md border bg-card cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(shot)}
          >
            <img
              src={shot.src}
              alt={shot.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-background/90 to-transparent p-4">
              <p className="text-sm font-medium text-foreground">
                {shot.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Accordion Button */}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={() => setExpanded(!expanded)}
          className="rounded-xl"
        >
          {expanded ? "Hide images ↑" : "See all images ↓"}
        </Button>
      </div>

      {/* Accordion Content */}
      {expanded && (
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
        >
          {all.map((shot) => (
            <motion.div
              key={shot.id}
              className="relative rounded-xl overflow-hidden shadow-md border bg-card cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(shot)}
            >
              <img
                src={shot.src}
                alt={shot.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Lightbox Dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl bg-card text-card-foreground p-6 rounded-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="rounded-lg border shadow-sm w-full h-auto"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
