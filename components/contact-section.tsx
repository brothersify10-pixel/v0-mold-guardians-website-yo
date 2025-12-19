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
      className="py-20 md:py-32 relative bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] overflow-hidden"
      ref={sectionRef}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Interested in Our Residential Mold Damage Services?
          </h2>

          <div className={`space-y-6 text-white/80 text-lg leading-relaxed transition-all duration-1000 delay-200 ${
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
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] hover:scale-110 hover:shadow-2xl hover:shadow-[#FFC107]/50 font-bold text-lg px-10 py-7 group transition-all duration-300"
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
