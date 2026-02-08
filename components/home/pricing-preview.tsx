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
  { size: "250", price: "$55" },
  { size: "500", price: "$100" },
  { size: "1K", price: "$180" },
  { size: "2.5K", price: "$400" },
  { size: "5K", price: "$700" },
  { size: "10K", price: "$1,200" },
]

export function PricingPreview() {
  return (
    <Section id="pricing" className="py-24">
      <ScrollReveal>
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-500 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free with 150 notifications. Upgrade when you{"'"}re ready.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4">
        {tiers.map((tier) => (
          <StaggerItem
            key={tier.name}
            className={cn(
              "relative rounded-2xl border p-6",
              tier.highlighted
                ? "border-emerald-500/50 bg-emerald-500/5 shadow-lg shadow-emerald-500/10"
                : "border-border bg-card"
            )}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {tier.description}
            </p>
            <div className="mt-4">
              <span className="text-3xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground">{tier.period}</span>
            </div>
            <ul className="mt-6 space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Notification Packs */}
      <ScrollReveal>
        <div className="mx-auto max-w-4xl mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold">Need more? Add notification packs.</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Packs never expire. Add to any paid plan.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {packs.map((pack) => (
              <div
                key={pack.size}
                className="rounded-lg border border-border bg-card p-3 text-center"
              >
                <div className="text-lg font-bold">{pack.size}</div>
                <div className="text-xs text-muted-foreground">notifications</div>
                <div className="mt-1 text-sm font-semibold text-emerald-500">
                  {pack.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex rounded-lg bg-emerald-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
          >
            View Full Pricing
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  )
}