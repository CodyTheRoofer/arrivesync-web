"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Section } from "@/components/section"

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mx-auto w-[280px] md:w-[320px]"
    >
      {/* Phone outer shell */}
      <div className="rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl shadow-primary/5">
        {/* Notch */}
        <div className="mx-auto mb-3 h-6 w-28 rounded-full bg-background" />
        {/* Screen */}
        <div className="rounded-[2rem] bg-background p-4">
          {/* Status bar */}
          <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono">9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-2.5 w-4 rounded-sm border border-muted-foreground/50">
                <div className="m-[1px] h-[calc(100%-2px)] w-[70%] rounded-sm bg-primary" />
              </div>
            </div>
          </div>

          {/* SMS Notification */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="hsl(160, 72%, 40%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  ArriveSync
                </p>
                <p className="text-[10px] text-muted-foreground">now</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">
              Hi Sarah! Mike from{" "}
              <span className="font-semibold text-foreground">Apex HVAC</span>{" "}
              is on his way.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-mono font-semibold text-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3 w-3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                ETA: 23 min
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.4 }}
              className="mt-3 rounded-lg bg-primary/10 px-3 py-2"
            >
              <p className="text-[10px] text-muted-foreground">
                Track here:
              </p>
              <p className="text-xs font-mono text-primary">
                arrivesync.app/t/abc123
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-primary/5 blur-2xl" />
    </motion.div>
  )
}

export function Hero() {
  return (
    <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Copy */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Now accepting early access
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Your Customers Know You{"'"}re Coming.{" "}
            <span className="gradient-text">Before You Even Leave.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            ArriveSync sends automated ETA notifications the moment your tech is
            dispatched. No apps to download. No calls to make. Just trust,
            delivered by text.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Link
              href="#waitlist"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
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
            <Link
              href="#how-it-works"
              className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See how it works
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Phone mockup */}
        <div className="flex-shrink-0">
          <PhoneMockup />
        </div>
      </div>
    </Section>
  )
}
