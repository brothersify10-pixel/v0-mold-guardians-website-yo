import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
