import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/home/hero"
import { Problem } from "@/components/home/problem"
import { HowItWorks } from "@/components/home/how-it-works"
import { Features } from "@/components/home/features"
import { SocialProof } from "@/components/home/social-proof"
import { PricingPreview } from "@/components/home/pricing-preview"
import { Waitlist } from "@/components/home/waitlist"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <SocialProof />
        <PricingPreview />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
