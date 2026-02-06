"use client"

import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import {
  MessageSquare,
  MapPin,
  Plug,
  Zap,
  CloudSun,
  Users,
  Shield,
  CreditCard,
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Real-time ETA via SMS",
    description:
      "No app download required. Customers get a text with live ETA the moment a tech is dispatched.",
  },
  {
    icon: MapPin,
    title: "Live Tracking Page",
    description:
      "Branded tracking page for customers to follow their technician's arrival in real-time.",
  },
  {
    icon: Plug,
    title: "CRM Integrations",
    description:
      "Native integrations with JobNimbus, ServiceTitan, Jobber, and Housecall Pro.",
  },
  {
    icon: Zap,
    title: "CASCADE\u2122 Delay Propagation",
    description:
      "One delay auto-updates all downstream customers. No manual rescheduling needed.",
  },
  {
    icon: CloudSun,
    title: "Weather-Aware Scheduling",
    description:
      "Automatic weather alerts that notify customers of potential delays before they happen.",
  },
  {
    icon: Users,
    title: "Multi-Tech Fleet Management",
    description:
      "Manage your entire fleet from one dashboard. See every tech, every job, every ETA.",
  },
  {
    icon: Shield,
    title: "Role-Based Dashboard",
    description:
      "Owner, Office, and Technician views. Everyone sees exactly what they need.",
  },
  {
    icon: CreditCard,
    title: "Intelligent Billing",
    description:
      "Notification packs that never expire. Pay for what you use, scale when you grow.",
  },
]

export function Features() {
  return (
    <Section className="border-t border-border">
      <ScrollReveal>
        <div className="text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Features
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need to Keep Customers Informed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Built by contractors, for contractors. Every feature solves a real
            problem we{"'"}ve faced in the field.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.08}
      >
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
