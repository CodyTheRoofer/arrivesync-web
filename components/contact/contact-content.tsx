"use client"

import { useState, type FormEvent } from "react"
import { Section } from "@/components/section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react"

export function ContactContent() {
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
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Contact
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Have a question, want a demo, or just want to talk shop? We{"'"}d
              love to hear from you.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Contact form + info */}
      <Section className="border-t border-border pt-0 -mt-4" pattern="dots">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {isSubmitted ? (
                <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/10 p-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Message sent.
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      We{"'"}ll get back to you as soon as we can. Thanks for
                      reaching out.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      placeholder="Apex HVAC"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      required
                      placeholder="I have a question about..."
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a
                    href="mailto:hello@arrivesync.com"
                    className="mt-1 text-sm text-primary hover:text-primary/80"
                  >
                    hello@arrivesync.com
                  </a>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tyler, Texas
                  </p>
                </div>

                <div className="rounded-xl border border-dashed border-border bg-card/50 p-6">
                  <h3 className="font-semibold text-foreground">
                    Prefer to chat?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We{"'"}re contractors at heart. Drop us a line and we{"'"}ll
                    get back to you within 24 hours. No bots, no runaround --
                    just real people.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  )
}
