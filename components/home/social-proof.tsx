"use client"

import Link from "next/link"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SocialProof() {
  return (
    <Section className="border-t border-border">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        {/* Subtle gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        <div className="relative flex flex-col items-center gap-8 px-8 py-16 text-center md:px-16">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <blockquote className="text-2xl font-semibold leading-relaxed text-foreground md:text-3xl">
                {"\""}We didn{"'"}t build this in a boardroom.{" "}
                <span className="gradient-text">We built it on rooftops.</span>
                {"\""}
              </blockquote>
              <p className="mt-6 text-muted-foreground">
                Built by a contractor who{"'"}s been in the field for 11+ years.
                ArriveSync solves the problems we{"'"}ve lived every single day.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              <div className="h-px w-16 bg-border" />
              <p className="text-sm text-muted-foreground">
                Join our first 100 contractors and shape the future of field
                service.
              </p>
              <Link
                href="#waitlist"
                className="inline-flex items-center rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/20"
              >
                Be one of our first 100
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
