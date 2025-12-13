import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SymptomsSection } from "@/components/symptoms-section"
import { WhyHireUsSection } from "@/components/why-hire-us-section"
import { ServicesSection } from "@/components/services-section"
import { WhatIsMoldSection } from "@/components/what-is-mold-section"
import { StatisticsSection } from "@/components/statistics-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SymptomsSection />
      <WhyHireUsSection />
      <ServicesSection />
      <WhatIsMoldSection />
      <StatisticsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
