"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Check, X, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying things out",
    features: [
      "100 notifications/mo",
      "1 user",
      "Basic SMS notifications",
      "Standard tracking page",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$150",
    period: "/mo",
    description: "For growing service businesses",
    features: [
      "500 notifications/mo",
      "5 users",
      "CRM integrations",
      "CASCADE\u2122 delay propagation",
      "Custom branding",
      "Email support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "$350",
    period: "/mo",
    description: "For multi-crew operations",
    features: [
      "1,400 notifications/mo",
      "15 users",
      "Everything in Pro",
      "Weather-aware alerts",
      "Priority support",
      "Analytics dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$700",
    period: "/mo",
    description: "For large fleet operations",
    features: [
      "3,500 notifications/mo",
      "Unlimited users",
      "Everything in Business",
      "White-label branding",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    highlighted: false,
  },
]

const comparisonFeatures = [
  {
    category: "Notifications",
    features: [
      {
        name: "SMS notifications/mo",
        free: "100",
        pro: "500",
        business: "1,400",
        enterprise: "3,500",
      },
      {
        name: "Custom notification templates",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Notification packs (add-ons)",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Users & Access",
    features: [
      {
        name: "Team members",
        free: "1",
        pro: "5",
        business: "15",
        enterprise: "Unlimited",
      },
      {
        name: "Role-based dashboards",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Technician mobile view",
        free: true,
        pro: true,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    features: [
      {
        name: "CRM integrations",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Webhook support",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Custom API access",
        free: false,
        pro: false,
        business: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Advanced Features",
    features: [
      {
        name: "CASCADE\u2122 delay propagation",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Weather-aware scheduling",
        free: false,
        pro: false,
        business: true,
        enterprise: true,
      },
      {
        name: "White-label branding",
        free: false,
        pro: false,
        business: false,
        enterprise: true,
      },
      {
        name: "Analytics dashboard",
        free: false,
        pro: false,
        business: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Community support",
        free: true,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Email support",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "Priority support",
        free: false,
        pro: false,
        business: true,
        enterprise: true,
      },
      {
        name: "Dedicated account manager",
        free: false,
        pro: false,
        business: false,
        enterprise: true,
      },
    ],
  },
]

const packs = [
  { size: "250", price: "$100", perNotification: "$0.40" },
  { size: "500", price: "$175", perNotification: "$0.35" },
  { size: "1,000", price: "$320", perNotification: "$0.32" },
  { size: "2,500", price: "$750", perNotification: "$0.30" },
  { size: "5,000", price: "$1,400", perNotification: "$0.28" },
  { size: "10,000", price: "$2,500", perNotification: "$0.25" },
]

const faqs = [
  {
    question: "How does billing work?",
    answer:
      "You're billed monthly based on your chosen plan. Your notification allotment resets each billing cycle. If you need more, notification packs can be added at any time and never expire.",
  },
  {
    question: "What counts as a notification?",
    answer:
      "Each SMS sent to a customer counts as one notification. This includes initial dispatch alerts, ETA updates, and delay notifications. Internal team messages don't count toward your limit.",
  },
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "Do notification packs really never expire?",
    answer:
      "That's right. Once you purchase a notification pack, those notifications are yours to use whenever you need them, even if you cancel your subscription.",
  },
  {
    question: "Which CRMs do you integrate with?",
    answer:
      "We currently support JobNimbus, ServiceTitan, Jobber, and Housecall Pro. More integrations are on our roadmap. You can also use our webhook API to connect any system.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. There are no setup fees, no contracts, and no hidden charges. You can start with the Free plan and upgrade when you're ready.",
  },
  {
    question: "What is CASCADE\u2122?",
    answer:
      "CASCADE is our proprietary delay propagation system. When one job runs late, CASCADE automatically recalculates and updates the ETAs for all downstream customers, so nobody is left waiting without notice.",
  },
  {
    question: "Do my customers need to download an app?",
    answer:
      "No. Customers receive a standard SMS text message with a link to a web-based tracking page. No app downloads, no account creation, no friction.",
  },
  {
    question: "What happens when I hit my notification limit?",
    answer:
      "We'll notify you when you're approaching your limit. You can add a notification pack or upgrade your plan. We'll never cut off notifications to your customers without warning.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption for all data in transit and at rest. Customer phone numbers and personal information are never shared or sold.",
  },
]

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return (
      <span className="font-mono text-sm font-semibold text-foreground">
        {value}
      </span>
    )
  }
  if (value) {
    return <Check className="mx-auto h-4 w-4 text-primary" />
  }
  return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" />
}

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Pricing
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Start free. Scale as you grow. No hidden fees, no long-term
              contracts. Every plan includes a free trial to make sure
              ArriveSync is right for you.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing tiers */}
      <Section className="border-t border-border pt-0 -mt-8">
        <StaggerContainer
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.1}
        >
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-xl border p-6 transition-all hover:shadow-lg",
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
                <h3 className="text-lg font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#waitlist"
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
      </Section>

      {/* Feature comparison */}
      <Section className="border-t border-border" pattern="dots">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Feature Comparison
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See exactly what{"'"}s included in each plan.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 pr-4 text-left text-sm font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                    Free
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-primary">
                    Pro
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                    Business
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={`cat-${category.category}`}>
                      <td
                        colSpan={5}
                        className="pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-primary"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-b border-border/50"
                      >
                        <td className="py-3 pr-4 text-sm text-muted-foreground">
                          {feature.name}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={feature.free} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={feature.pro} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={feature.business} />
                        </td>
                        <td className="px-4 py-3 text-center">
                          <FeatureValue value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </Section>

      {/* Notification packs */}
      <Section className="border-t border-border">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Notification Packs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Need more notifications? Packs never expire and can be added to
              any paid plan.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {packs.map((pack) => (
            <StaggerItem key={pack.size}>
              <div className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div>
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {pack.size}
                  </p>
                  <p className="text-sm text-muted-foreground">notifications</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xl font-bold text-primary">
                    {pack.price}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {pack.perNotification}/ea
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border" pattern="grid">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about ArriveSync pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.05}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className="rounded-xl border border-border bg-card transition-all hover:border-primary/20">
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="pr-4 text-sm font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={cn(
                        "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                        openFaq === index && "rotate-180"
                      )}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-border px-6 py-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the waitlist and lock in early-adopter pricing.
            </p>
            <Link
              href="/#waitlist"
              className="mt-8 inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
            >
              Get Early Access
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-2 h-4 w-4"
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
    </>
  )
}
