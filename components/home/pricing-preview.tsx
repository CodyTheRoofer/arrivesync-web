"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying things out",
    features: ["150 notifications/mo", "1 user", "Basic SMS notifications"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    description: "For growing service businesses",
    features: [
      "500 notifications/mo",
      "5 users",
      "CRM integrations",
      "CascadeSync\u2122 delay propagation",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$349",
    period: "/mo",
    description: "For multi-crew operations",
    features: [
      "1,500 notifications/mo",
      "15 users",
      "WeatherSync\u2122 alerts",
      "Priority support",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$699",
    period: "/mo",
    description: "For large fleet operations",
    features: [
      "4,000 notifications/mo",
      "Unlimited users",
      "White-label branding",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
]

const packs = [
  { size: "250", price: "$100" },
  { size: "500", price: "$175" },
  { size: "1K", price: "$320" },
  { size: "2.5K", price: "$750" },
  { size: "5K", price: "$1,400" },
  { size: "10K", price: "$2,500" },
]

export function PricingPreview() {
  return (
    <Section id="pricing-preview" pattern="grid" className="border-t border-border">
      <ScrollReveal>
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Pricing
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Start free. Scale as you grow. No hidden fees, no long-term contracts.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.1}
      >
        {tiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <div
              className={cn(
                "relative flex flex-col rounded-xl border p-6 transition-all hover:shadow-lg",
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10 hover:shadow-primary/20"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-primary/5"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {tier.description}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#waitlist"
                className={cn(
                  "mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
                  tier.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                    : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                Get Early Access
              </Link>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Notification Packs */}
      <ScrollReveal delay={0.2}>
        <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground">
            Need more? Notification Packs never expire.
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {packs.map((pack) => (
              <div
                key={pack.size}
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2"
              >
                <span className="font-mono text-sm font-semibold text-foreground">
                  {pack.size}
                </span>
                <span className="text-sm text-muted-foreground">&mdash;</span>
                <span className="font-mono text-sm font-semibold text-primary">
                  {pack.price}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-6 inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View full pricing details
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1 h-4 w-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  )
}
