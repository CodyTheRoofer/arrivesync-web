"use client"

import { useState, type FormEvent } from "react"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Loader2, CheckCircle2 } from "lucide-react"

const trades = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Electrical",
  "General Contracting",
  "Other",
]

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xpzzpqjr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch {
      // Silently handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="waitlist" className="border-t border-border">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

        <div className="relative px-6 py-16 md:px-16">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Early access
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Get Early Access
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Join the waitlist and be one of the first contractors to
                experience ArriveSync. Early adopters get priority onboarding
                and exclusive pricing.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-10 max-w-lg">
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/10 p-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      You{"'"}re on the list.
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      We{"'"}ll be in touch. Thanks for your interest in ArriveSync.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Apex HVAC"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@apexhvac.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(903) 555-0123"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="trade"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Trade
                    </label>
                    <select
                      id="trade"
                      name="trade"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="" disabled>
                        Select your trade
                      </option>
                      {trades.map((trade) => (
                        <option key={trade} value={trade}>
                          {trade}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Section>
  )
}
