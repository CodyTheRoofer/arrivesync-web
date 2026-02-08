import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about/about-content"

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by a contractor who lived the problem. Learn about ArriveSync's mission to make every service call feel like an Amazon delivery.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
