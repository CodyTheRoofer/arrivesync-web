import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  pattern?: "dots" | "grid" | "none"
}

export function Section({
  children,
  className,
  id,
  pattern = "none",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-6 py-20 md:py-28",
        pattern === "dots" && "dot-pattern",
        pattern === "grid" && "grid-pattern",
        className
      )}
    >
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
