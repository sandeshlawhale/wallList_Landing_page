import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import QuickInstall from "@/components/download/quick-install";

type Release = {
  version: string;
  date: string;
  notes: string;
  href: string;
  latest?: boolean;
};

const releases: Release[] = [
  {
    version: "v1.2.0",
    date: "Aug 20, 2025",
    notes: "Faster sync, improved wallpaper rendering, smaller app size.",
    href: "#",
    latest: true,
  },
  {
    version: "v1.1.1",
    date: "Aug 3, 2025",
    notes: "Bug fixes: notification badge edge cases and settings persistence.",
    href: "#",
  },
  {
    version: "v1.1.0",
    date: "Jul 15, 2025",
    notes: "New: color accents for lists and refined onboarding.",
    href: "#",
  },
  {
    version: "v1.0.0",
    date: "Jun 10, 2025",
    notes: "Initial release with tasks-on-wallpaper and reminders.",
    href: "#",
  },
];

export default function DownloadPage() {
  return (
    <main className="max-w-5xl mx-auto text-foreground h-full">
      <section className="px-4 pt-16 md:pt-24 pb-8 md:pb-10">
        <div className="mx-auto text-left space-y-2">
          <h1 className="text-pretty text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            {"Download WallList"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            {"Choose your version & start using instantly."}
          </p>
          {/* <div className="flex items-center justify-start gap-3 pt-2">
            <Button asChild>
              <Link href="#releases" className="gap-2">
                <Download className="h-4 w-4" aria-hidden="true" />
                {"See Releases"}
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/" className="gap-2">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {"Back to Home"}
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      <section id="releases" className="px-4 py-10 md:py-14">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
            {"Available Versions"}
          </h2>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{"Version"}</TableHead>
                  <TableHead>{"Release Date"}</TableHead>
                  <TableHead>{"Notes / Changelog"}</TableHead>
                  <TableHead>{"Status"}</TableHead>
                  <TableHead className="text-right">{"Download"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {releases.map((rel) => {
                  const isLatest = !!rel.latest;
                  return (
                    <TableRow
                      key={rel.version}
                      className={cn(
                        "transition-colors hover:bg-muted/50",
                        isLatest && "bg-primary/5"
                      )}
                    >
                      <TableCell className="font-medium">
                        {rel.version}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {rel.date}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {rel.notes}
                      </TableCell>
                      <TableCell>
                        {isLatest ? (
                          <Badge variant="default">{"Latest"}</Badge>
                        ) : (
                          <Badge variant="secondary">{"Stable"}</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          asChild
                          variant={"secondary"}
                          size="sm"
                          className="gap-2"
                        >
                          <Link
                            href={rel.href}
                            aria-label={`Download ${rel.version}`}
                          >
                            <Download className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      <section className="px-4">
        <div className="flex justify-between items-center">
          <div className="items-start text-left">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold">
              {"Quick Install"}
            </p>
            <p>
              {
                "Scan the QR code with your phone to download the latest version directly."
              }
            </p>
          </div>
          <div className="flex items-center justify-center py-6">
            {/* <QuickInstall /> */}
            <div className="w-40 h-40 bg-muted rounded-md" />
          </div>
        </div>
      </section>
    </main>
  );
}
