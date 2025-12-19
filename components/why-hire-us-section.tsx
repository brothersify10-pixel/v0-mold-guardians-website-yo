'use client'

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

export function WhyHireUsSection() {
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

  const reasons = [
    "Family owned",
    "30+ Years experience",
    "Realtors love us",
    "We are local",
    "Quick response times",
    "Licensed, insured & certified",
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F5F5]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Large Image */}
          <div
            className={`h-[400px] md:h-[500px] rounded-2xl bg-cover bg-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/5998697/pexels-photo-5998697.jpeg?auto=compress&cs=tinysrgb&w=1280')",
            }}
          />

          {/* Right - Content */}
          <div className="space-y-8">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              Protecting Families & Pets Since 1994
            </h2>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-500 hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100 + 300}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center hover:scale-125 hover:rotate-12 transition-all duration-300">
                    <Check className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <span className="text-[#2D2D2D] text-lg font-semibold">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
