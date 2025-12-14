"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WhatIsMoldSection } from "@/components/what-is-mold-section"
import { ContactSection } from "@/components/contact-section"
import { WhyHireUsSection } from "@/components/why-hire-us-section"
import { StatisticsSection } from "@/components/statistics-section"
import { SymptomsSection } from "@/components/symptoms-section"
import { ProtectFamilySection } from "@/components/protect-family-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { BookingFormModal } from "@/components/booking-form-modal"

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const openBookingModal = () => setIsBookingModalOpen(true)
  const closeBookingModal = () => setIsBookingModalOpen(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onBookInspection={openBookingModal} />
      <HeroSection onBookInspection={openBookingModal} />
      <ServicesSection />
      <WhyHireUsSection />
      <WhatIsMoldSection />
      <SymptomsSection />
      <ContactSection />
      <StatisticsSection />
      <ProtectFamilySection />
      <TestimonialsSection />
      <CTABanner onBookInspection={openBookingModal} />
      <Footer />

      <BookingFormModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
    </main>
  )
}
