import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingContent } from "@/components/pricing/pricing-content"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for ArriveSync. Start free, scale as you grow. No hidden fees, no long-term contracts.",
}

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingContent />
      </main>
      <Footer />
    </>
  )
}
