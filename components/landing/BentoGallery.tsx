"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const screenshots = [
  {
    src: "/minimal-wallpaper-style-1.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/minimal-wallpaper-style-1.png",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/minimal-wallpaper-style-2.png",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/minimal-wallpaper-style-2.png",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/minimal-wallpaper-style-2.png",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/minimal-wallpaper-style-3.png",
    span: "lg:col-span-1 lg:row-span-2",
  },
  {
    src: "/minimal-wallpaper-style-4.png",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/minimal-wallpaper-style-5.png",
    span: "lg:col-span-2 lg:row-span-1",
  },
];

const BentoGallery = () => {
  const [showExpanded, setShowExpanded] = useState(false);

  return (
    <section
      id="gallery"
      className="mx-auto max-w-5xl px-4 pt-20 md:pt-32 lg:pt-48 space-y-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          What You&apos;ll Experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Take a look inside WallList — every feature designed to help you stay
          focused and organized.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 max-w-5xl mx-auto">
        {screenshots.slice(0, 4).map((shot, i) => (
          <div
            className={`bg-card rounded-2xl shadow overflow-hidden flex items-center justify-center ${shot.span} shadow-lg`}
            key={`first_${i}`}
          >
            <img
              src={shot.src}
              alt={`screenshot-${i}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
        <AnimatePresence>
          {showExpanded &&
            screenshots.slice(4).map((shot, i) => (
              <motion.div
                layout
                key={`last_${i}`}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`bg-card rounded-2xl shadow overflow-hidden flex items-center justify-center ${shot.span} shadow-lg`}
              >
                <img
                  src={shot.src}
                  alt={`screenshot-${i}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            ))}
        </AnimatePresence>

        <div
          key="bento-btn"
          className="bg-card rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer hover:bg-accent/10 transition lg:col-span-1 lg:row-span-1 border border-border shadow-md"
          onClick={() => setShowExpanded(!showExpanded)}
        >
          <span className="text-foreground font-medium">
            {showExpanded ? "Show Less ▲" : "Show More ▼"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
