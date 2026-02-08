"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { Target, Heart, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Built for the Field",
    description:
      "Every feature we build starts with a real problem we've faced on job sites. No ivory tower features here.",
  },
  {
    icon: Heart,
    title: "Customer Trust First",
    description:
      "We believe the relationship between a contractor and their customer should be built on transparency, not silence.",
  },
  {
    icon: Lightbulb,
    title: "Simple Over Complex",
    description:
      "Your office manager shouldn't need a degree to use your dispatch software. If it's not simple, we rebuild it.",
  },
  {
    icon: Users,
    title: "Contractor Community",
    description:
      "We're building a platform shaped by the contractors who use it. Your feedback drives our roadmap.",
  },
]

const milestones = [
  {
    year: "2014",
    event: "Started in the field as a roofing contractor in Tyler, Texas.",
  },
  {
    year: "2020",
    event:
      "Property Vault founded to bring technology solutions to the trades.",
  },
  {
    year: "2025",
    event:
      "ArriveSync concept born from real frustration with missed appointments.",
  },
  {
    year: "2026",
    event: "ArriveSync enters early access with the first 100 contractors.",
  },
]

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Story
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Built by a Contractor Who{" "}
              <span className="gradient-text">Lived the Problem</span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              ArriveSync wasn{"'"}t born in a startup accelerator. It was born
              from years of watching great contractors lose customers because of
              something as simple as a missed text message.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Story */}
      <Section className="border-t border-border" pattern="dots">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                The Problem We Lived Every Day
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  After 11 years in the field, the same problems kept coming
                  back: homeowners calling asking where the crew was, techs
                  burning hours on the phone giving updates, and customers
                  canceling because they didn{"'"}t know we were on the way.
                </p>
                <p>
                  We tried every tool on the market. They were either too
                  complicated for our office staff, too expensive for a small
                  crew, or required customers to download yet another app. None
                  of them worked the way a contractor actually operates.
                </p>
                <p>
                  So we built ArriveSync. A tool that does one thing incredibly
                  well: it tells your customer you{"'"}re coming, exactly when
                  you{"'"}re coming, without anyone lifting a finger.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Our Mission
              </h3>
              <blockquote className="mt-4 border-l-2 border-primary pl-4 text-xl font-semibold leading-relaxed text-foreground">
                Make every service call feel like an{" "}
                <span className="gradient-text">Amazon delivery.</span>
              </blockquote>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your customers expect real-time visibility into every delivery
                and ride they order. Why should a service call be any different?
                ArriveSync bridges that gap for the trades.
              </p>

              <div className="mt-8 rounded-lg border border-border bg-secondary p-4">
                <p className="text-sm font-medium text-foreground">
                  Part of the Property Vault Ecosystem
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  ArriveSync is built by Property Vault, a technology company
                  creating tools that empower contractors and service
                  professionals to deliver exceptional customer experiences.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Values */}
      <Section className="border-t border-border">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Our values come from the job site, not a corporate playbook.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="mt-12 grid gap-6 sm:grid-cols-2"
          staggerDelay={0.1}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Timeline */}
      <Section className="border-t border-border" pattern="grid">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Journey
            </h2>
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-12 max-w-2xl">
          <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.12}>
            {milestones.map((milestone, index) => (
              <StaggerItem key={milestone.year}>
                <div className="flex gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <span className="font-mono text-xs font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="h-12 w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-12 pt-2">
                    <p className="leading-relaxed text-muted-foreground">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Team placeholder */}
      <Section className="border-t border-border">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The Team
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We{"'"}re a small, focused team of builders and contractors who
              believe field service deserves better technology.
            </p>
            <div className="mt-8 rounded-xl border border-dashed border-border bg-card/50 p-12">
              <p className="text-sm font-medium text-muted-foreground">
                Team profiles coming soon.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Want to be part of the team?{" "}
                <Link
                  href="/contact"
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section className="border-t border-border">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Stop Losing Customers?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Join the waitlist and see what automated ETA notifications can do
              for your business.
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
