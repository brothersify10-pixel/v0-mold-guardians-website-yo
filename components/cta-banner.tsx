'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface CTABannerProps {
  onBookInspection: () => void
}

export function CTABanner({ onBookInspection }: CTABannerProps) {
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
      className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFC107] rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#FFC107]/50 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#FFC107] rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-[#FFC107]/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#FFC107]/35 rounded-full animate-float-slow"></div>

        {/* Gradient orbs for ambient glow */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Large Phone Number */}
          <a
            href="tel:1800-730-3183"
            className={`block group transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Phone className="w-16 h-16 md:w-20 md:h-20 text-[#FFC107] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <p className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FFC107] tracking-tight group-hover:scale-110 transition-transform duration-300">
                1800-730-3183
              </p>
            </div>
          </a>

          {/* Call to Action Text */}
          <p className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Call Today for a FREE Consultation!
          </p>

          {/* Button */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              onClick={onBookInspection}
              size="lg"
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] hover:scale-110 hover:shadow-2xl hover:shadow-[#FFC107]/50 font-bold text-xl px-12 py-8 mt-8 group transition-all duration-500"
            >
              SCHEDULE INSPECTION
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
