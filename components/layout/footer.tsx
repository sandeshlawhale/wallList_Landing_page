import Link from "next/link";
import { Logo } from "../common/logo";

const FooterLinks = [
  {
    href: "/privacy",
    label: "Privacy",
  },
  {
    href: "/terms",
    label: "Terms",
  },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-4 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p className="order-3 md:order-none">
          © {new Date().getFullYear()} WallList by{" "}
          <Link
            href="https://sandeshlawhale.vercel.app"
            target="_blank"
            className="hover:text-accent cursor-pointer transition-colors duration-300 ease-in-out font-semibold"
          >
            sandeshlawhale
          </Link>
          . All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          {FooterLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
