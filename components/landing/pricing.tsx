"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const plans = [
  { name: "Starter", monthly: 0, annual: 0, features: ["Unlimited tasks", "Basic wallpapers", "Reminders"] },
  { name: "Pro", monthly: 6, annual: 60, features: ["All Starter", "Custom styles", "AI suggestions"], popular: true },
  { name: "Team", monthly: 12, annual: 120, features: ["All Pro", "Shared lists", "Priority support"] },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold">Simple, transparent pricing</h2>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span>Monthly</span>
            <Switch checked={annual} onCheckedChange={setAnnual} aria-label="Toggle annual billing" />
            <span>Annual</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const price = annual ? p.annual : p.monthly
            return (
              <Card
                key={p.name}
                className={cn(
                  "border-0 shadow-lg transition-all",
                  p.popular && "relative ring-2 ring-primary/60 shadow-primary/20",
                )}
              >
                {p.popular && (
                  <div
                    className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold">{p.name}</h3>
                    <p className="text-3xl font-bold mt-2">
                      {price === 0 ? "Free" : `$${price}`}
                      <span className="text-sm text-muted-foreground font-normal">{annual ? "/year" : "/mo"}</span>
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="leading-relaxed">
                        • {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose {p.name}</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
