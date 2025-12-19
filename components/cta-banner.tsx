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
      className="py-24 md:py-32 relative parallax overflow-hidden"
      ref={sectionRef}
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.pexels.com/photos/5353875/pexels-photo-5353875.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFC107]/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
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
              <Phone className="w-16 h-16 md:w-20 md:h-20 text-[#FFC107] group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-swing" />
              <p className="text-5xl md:text-6xl lg:text-7xl font-black text-[#FFC107] tracking-tight group-hover:scale-110 transition-transform duration-300 animate-glow">
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
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] hover:scale-110 hover:shadow-2xl hover:shadow-[#FFC107]/50 font-bold text-lg px-12 py-8 text-xl mt-8 transition-all duration-300 animate-pulse-slow"
            >
              SCHEDULE INSPECTION
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
