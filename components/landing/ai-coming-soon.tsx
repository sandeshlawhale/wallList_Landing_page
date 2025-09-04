import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "../common/scroll-reveal";
import { Sparkles } from "lucide-react";

export function AIComingSoon() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <ScrollReveal>
        <Card className="bg-card">
          <CardHeader className="flex items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle className="text-lg">
                AI-Powered Priority Suggestions
              </CardTitle>
            </div>
            <Badge variant="secondary" className="whitespace-nowrap">
              Coming Soon
            </Badge>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Walllist will soon help you choose what to do next by analyzing your
            tasks, schedules, and habits—keeping your focus exactly where it
            needs to be.
          </CardContent>
        </Card>
      </ScrollReveal>
    </section>
  );
}
