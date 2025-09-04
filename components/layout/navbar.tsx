import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Logo } from "../common/logo";

const NavLinks = [
  {
    href: "/#features",
    label: "Features",
  },
  {
    href: "/#gallery",
    label: "Gallery",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        {/* <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded-md bg-primary" aria-hidden="true" />
          <span className="text-balance">Walllist</span>
        </Link> */}
        <Logo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm text-muted-foreground md:flex"
        >
          {NavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant={"secondary"} className="ml-2 -mr-2">
            <a href="/download">Download</a>
          </Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
