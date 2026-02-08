"use client"

import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { DollarSign, UserX, PhoneOff } from "lucide-react"

const painPoints = [
  {
    icon: DollarSign,
    stat: "$125B",
    description: "lost annually to no-shows and missed windows",
  },
  {
    icon: UserX,
    stat: "68%",
    description: "of customers won't rebook after a missed appointment",
  },
  {
    icon: PhoneOff,
    stat: "2+ hrs/day",
    description: "your techs waste on status update calls",
  },
]

export function Problem() {
  return (
    <Section pattern="dots" className="border-t border-border">
      <ScrollReveal>
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Missed Appointments Cost You More Than You Think
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Every missed window is a lost customer, a wasted trip, and a hit to
            your reputation. The numbers tell the story.
          </p>
        </div>
      </ScrollReveal>

      <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
        {painPoints.map((point) => (
          <StaggerItem key={point.stat}>
            <div className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <div className="mb-4 inline-flex rounded-lg bg-destructive/10 p-3">
                <point.icon className="h-6 w-6 text-destructive" />
              </div>
              <p className="font-mono text-4xl font-bold text-foreground">
                {point.stat}
              </p>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {point.description}
              </p>
              {/* Subtle gradient overlay on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-primary/0 transition-all group-hover:from-primary/[0.02] group-hover:to-primary/[0.05]" />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  )
}
