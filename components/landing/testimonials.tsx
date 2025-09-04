"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MoveLeft, MoveRight, Star } from "lucide-react";

const items = [
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
  {
    name: "Emily Watson",
    role: "Student",
    quote: "Tasks on my wallpaper keep me on track like nothing else has.",
    rating: 5,
  },
];

export function Testimonials() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const next = () => setIndex(([i]) => [(i + 1) % items.length, 1]);
  const prev = () =>
    setIndex(([i]) => [(i - 1 + items.length) % items.length, -1]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
    }),
  };

  return (
    <section
      id="features"
      className="mx-auto max-w-5xl px-4 pt-20 md:pt-32 lg:pt-48"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
          What people say
        </h2>
        <p className="mt-3 text-muted-foreground">
          Listen to what people feel about WallList.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35 }}
            >
              <Card className="shadow-lg max-w-2xl mx-auto my-2">
                <CardContent className="p-2 space-y-4 text-center">
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: items[index].rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-pretty">
                    "{items[index].quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{items[index].name}</p>
                    <p className="text-sm text-muted-foreground">
                      {items[index].role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="group absolute right-0 top-0 cursor-pointer opacity-0 bg-secondary z-10 h-full aspect-square rounded-full flex items-center justify-center hover:opacity-30 transition-opacity"
          onClick={next}
        >
          <MoveRight className="w-12 h-12 fill-primary text-primary group-hover:opacity-100" />
        </div>

        <div
          className="absolute left-0 top-0 cursor-pointer opacity-0 bg-secondary z-10 h-full aspect-square rounded-full flex items-center justify-center hover:opacity-30 transition-opacity"
          onClick={prev}
        >
          <MoveLeft className="w-12 h-12 fill-primary text-primary group-hover:opacity-100" />
        </div>
      </div>
    </section>
    // <section className="pt-12 ms:pt-20 lg:pt-32">
    //   <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl lg:text-4xl font-bold">What people say</h2>
    //     </div>
    //     <div className="relative">
    //       <div className="overflow-hidden">
    //         <AnimatePresence mode="wait" custom={direction}>
    //           <motion.div
    //             key={index}
    //             custom={direction}
    //             variants={variants}
    //             initial="enter"
    //             animate="center"
    //             exit="exit"
    //             transition={{ duration: 0.35 }}
    //           >
    //             <Card className="shadow-lg max-w-2xl mx-auto my-2">
    //               <CardContent className="p-2 space-y-4 text-center">
    //                 <div className="flex justify-center space-x-1">
    //                   {Array.from({ length: items[index].rating }).map(
    //                     (_, j) => (
    //                       <Star
    //                         key={j}
    //                         className="w-5 h-5 fill-primary text-primary"
    //                       />
    //                     )
    //                   )}
    //                 </div>
    //                 <p className="text-muted-foreground text-pretty">
    //                   "{items[index].quote}"
    //                 </p>
    //                 <div>
    //                   <p className="font-semibold">{items[index].name}</p>
    //                   <p className="text-sm text-muted-foreground">
    //                     {items[index].role}
    //                   </p>
    //                 </div>
    //               </CardContent>
    //             </Card>
    //           </motion.div>
    //         </AnimatePresence>
    //       </div>

    //       <div
    //         className="group absolute right-0 top-0 cursor-pointer opacity-0 bg-secondary z-10 h-full aspect-square rounded-full flex items-center justify-center hover:opacity-30 transition-opacity"
    //         onClick={next}
    //       >
    //         <MoveRight className="w-12 h-12 fill-primary text-primary group-hover:opacity-100" />
    //       </div>

    //       <div
    //         className="absolute left-0 top-0 cursor-pointer opacity-0 bg-secondary z-10 h-full aspect-square rounded-full flex items-center justify-center hover:opacity-30 transition-opacity"
    //         onClick={prev}
    //       >
    //         <MoveLeft className="w-12 h-12 fill-primary text-primary group-hover:opacity-100" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
