import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "ArriveSync - Automated ETA Notifications for Field Service",
    template: "%s | ArriveSync",
  },
  description:
    "ArriveSync sends automated ETA notifications the moment your tech is dispatched. No apps to download. No calls to make. Just trust, delivered by text.",
  keywords: [
    "ETA notifications",
    "field service",
    "contractor software",
    "roofing",
    "HVAC",
    "plumbing",
    "dispatch",
    "customer notifications",
    "SMS alerts",
  ],
  openGraph: {
    title: "ArriveSync - Automated ETA Notifications for Field Service",
    description:
      "Your customers know you're coming before you even leave. Automated ETA notifications for field service contractors.",
    url: "https://arrivesync.com",
    siteName: "ArriveSync",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArriveSync - Automated ETA Notifications for Field Service",
    description:
      "Your customers know you're coming before you even leave. Automated ETA notifications for field service contractors.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
