'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative"
      ref={sectionRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(https://images.pexels.com/photos/8031873/pexels-photo-8031873.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Interested in Our Residential Mold Damage Services?
          </h2>

          <div className={`space-y-6 text-[#2D2D2D] text-lg leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="hover:scale-105 transition-transform duration-300">
              With our extensive experience and expert teams, <span className="text-[#FFC107] font-bold">MoldGuardian</span> specializes in eliminating harmful mold from
              your home. We'll restore spore counts to safe levels, ensuring your living space is healthy once more.
            </p>

            <p className="hover:scale-105 transition-transform duration-300">
              Don't wait for the situation to worsen — secure a healthier environment for your family today.
            </p>

            <p className="font-semibold hover:scale-105 transition-transform duration-300">
              Do you have any questions or need immediate assistance? We're here and ready to help!
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              size="lg"
              className="bg-[#1A1A1A] text-white hover:bg-[#2D2D2D] hover:scale-110 hover:shadow-2xl font-bold text-lg px-10 py-7 group transition-all duration-300"
            >
              GET IN TOUCH
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
