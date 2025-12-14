import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat"
})

export const metadata: Metadata = {
  title: "Mold Guardians | Professional Mold Remediation & Removal",
  description:
    "Professional mold removal and remediation services. Family-owned with 30+ years experience. Get 50% off your inspection today!",
  generator: "v0.app",
  keywords: ["mold removal", "mold remediation", "water damage restoration", "moisture control", "Barrie", "Ontario"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
