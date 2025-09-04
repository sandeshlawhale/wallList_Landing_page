import React from "react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <p className="text-lg md:text-xl lg:text-2xl font-black">
        Wall<span className="text-accent">List.</span>
      </p>
      <span className="sr-only">Walllist logo</span>
    </Link>
  );
};
