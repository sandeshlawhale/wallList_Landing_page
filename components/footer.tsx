import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-md bg-primary" aria-hidden="true" />
          <span className="font-medium text-foreground">Walllist</span>
          <span className="sr-only">Walllist logo</span>
        </div>
        <p className="order-3 md:order-none">© {new Date().getFullYear()} Walllist. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
