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
      "150 notifications/mo",
      "1 user",
      "Basic SMS notifications",
      "Standard tracking page",
    ],
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
      "Custom branding",
      "Email support",
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
      "Everything in Pro",
      "WeatherSync\u2122 alerts",
      "Priority support",
      "Analytics dashboard",
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
        free: "150",
        pro: "500",
        business: "1,500",
        enterprise: "4,000",
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
        name: "CascadeSync\u2122 delay propagation",
        free: false,
        pro: true,
        business: true,
        enterprise: true,
      },
      {
        name: "WeatherSync\u2122 scheduling",
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
  { size: "250", price: "$55", perNotification: "$0.22" },
  { size: "500", price: "$100", perNotification: "$0.20" },
  { size: "1,000", price: "$180", perNotification: "$0.18" },
  { size: "2,500", price: "$400", perNotification: "$0.16" },
  { size: "5,000", price: "$700", perNotification: "$0.14" },
  { size: "10,000", price: "$1,200", perNotification: "$0.12" },
]

const faqs = [
  {
    question: "How does billing work?",
    answer:
      "You're billed monthly based on your chosen plan. Your notification allotment resets each billing cycle. If you need more, notification packs can be added at any time and never expire. Save 20% with annual billing.",
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
    question: "What is CascadeSync\u2122?",
    answer:
      "CascadeSync is our proprietary delay propagation system. When one job runs late, CascadeSync automatically recalculates and updates the ETAs for all downstream customers, so nobody is left waiting without notice.",
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
      <span className="text-sm font-medium text-foreground">{value}</span>
    )
  }
  if (value) {
    return <Check className="mx-auto h-5 w-5 text-emerald-500" />
  }
  return <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
}

export function PricingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-500 mb-4">
              Pricing
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Start free. Scale as you grow. No hidden fees, no long-term
              contracts. Every plan includes a free trial to make sure ArriveSync
              is right for you.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing tiers */}
      <Section className="pb-24">
        <StaggerContainer className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-4">
          {tiers.map((tier) => (
            <StaggerItem
              key={tier.name}
              className={cn(
                "relative rounded-2xl border p-8",
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
              <div className="mt-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#waitlist"
                className={cn(
                  "mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors",
                  tier.highlighted
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                Get Started
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Feature comparison */}
      <Section className="pb-24">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Feature Comparison
            </h2>
            <p className="mt-4 text-muted-foreground">
              See exactly what{"\'"}s included in each plan.
            </p>
          </div>
        </ScrollReveal>
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-4 pr-4 text-left font-medium">Feature</th>
                <th className="px-4 py-4 text-center font-medium">Free</th>
                <th className="px-4 py-4 text-center font-medium">Pro</th>
                <th className="px-4 py-4 text-center font-medium">Business</th>
                <th className="px-4 py-4 text-center font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((category) => (
                <>
                  <tr key={category.category} className="border-b bg-muted/30">
                    <td colSpan={5} className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature) => (
                    <tr key={feature.name} className="border-b">
                      <td className="py-3 pr-4 text-sm">{feature.name}</td>
                      <td className="px-4 py-3 text-center"><FeatureValue value={feature.free} /></td>
                      <td className="px-4 py-3 text-center"><FeatureValue value={feature.pro} /></td>
                      <td className="px-4 py-3 text-center"><FeatureValue value={feature.business} /></td>
                      <td className="px-4 py-3 text-center"><FeatureValue value={feature.enterprise} /></td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Notification packs */}
      <Section className="pb-24">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Notification Packs</h2>
            <p className="mt-4 text-muted-foreground">Need more notifications? Packs never expire and can be added to any paid plan.</p>
          </div>
        </ScrollReveal>
        <StaggerContainer className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {packs.map((pack) => (
            <StaggerItem key={pack.size} className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-2xl font-bold">{pack.size}</div>
              <div className="text-xs text-muted-foreground">notifications</div>
              <div className="mt-3 text-lg font-semibold text-emerald-500">{pack.price}</div>
              <div className="text-xs text-muted-foreground">{pack.perNotification}/ea</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* FAQ */}
      <Section className="pb-24">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about ArriveSync pricing.</p>
          </div>
        </ScrollReveal>
        <div className="mx-auto max-w-2xl divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openFaq === index}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="ml-4 shrink-0 text-muted-foreground">{openFaq === index ? "\u2212" : "+"}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Get Started?</h2>
            <p className="mt-4 text-muted-foreground">Join the waitlist and lock in early-adopter pricing.</p>
            <Link href="/#waitlist" className="mt-8 inline-flex rounded-lg bg-emerald-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-600">
              Get Early Access
            </Link>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}