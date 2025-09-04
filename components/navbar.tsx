import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-6 w-6 rounded-md bg-primary" aria-hidden="true" />
          <span className="text-balance">Walllist</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link href="#features" className="hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#gallery" className="hover:text-foreground transition-colors">
            Gallery
          </Link>
          <Link href="#download" className="hover:text-foreground transition-colors">
            Download
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Button asChild className="ml-2">
            <a href="#download">Get App</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
