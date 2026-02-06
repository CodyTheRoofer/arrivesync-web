"use client"

import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Link2, Truck, MessageSquare, Star } from "lucide-react"

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect Your CRM",
    description:
      "Webhooks from JobNimbus, ServiceTitan, Jobber, or manual entry. Setup takes under 10 minutes.",
  },
  {
    icon: Truck,
    number: "02",
    title: "Tech Gets Dispatched",
    description:
      "Status change triggers ArriveSync automatically. No extra steps for your office staff.",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Customer Gets Notified",
    description:
      "SMS with live ETA, tech name, and tracking link. No app download needed.",
  },
  {
    icon: Star,
    number: "04",
    title: "Everyone Wins",
    description:
      "No more phone tag. No more no-shows. Customer satisfaction and reviews go up.",
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" pattern="grid">
      <ScrollReveal>
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            How it works
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Four Steps to Happy Customers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Getting started with ArriveSync is simple. Connect your CRM and
            start sending automated ETA notifications in minutes.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer
        className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.12}
      >
        {steps.map((step, index) => (
          <StaggerItem key={step.number}>
            <div className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              {/* Step number */}
              <span className="mb-4 font-mono text-sm font-semibold text-primary">
                {step.number}
              </span>
              {/* Icon */}
              <div className="mb-4 inline-flex self-start rounded-lg bg-primary/10 p-3">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>

              {/* Connector line (not on last item, desktop only) */}
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block" />
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
