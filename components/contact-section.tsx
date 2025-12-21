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
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Interested in Our Residential Mold Damage Services?
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent mx-auto mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>

          <div className={`space-y-6 text-white/90 text-lg leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFC107]/30 transition-all duration-500 p-2 rounded">
              With our extensive experience and expert teams, <span className="text-[#FFC107] font-bold">MoldGuardian</span> specializes in eliminating harmful mold from
              your home. We'll restore spore counts to safe levels, ensuring your living space is healthy once more.
            </p>

            <p className="hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFC107]/30 transition-all duration-500 p-2 rounded">
              Don't wait for the situation to worsen — secure a healthier environment for your family today.
            </p>

            <p className="font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FFC107]/30 transition-all duration-500 p-2 rounded">
              Do you have any questions or need immediate assistance? We're here and ready to help!
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Button
              size="lg"
              className="bg-[#FFC107] text-[#1A1A1A] hover:bg-[#E5AC00] hover:scale-110 hover:shadow-2xl hover:shadow-[#FFC107]/50 font-bold text-xl px-12 py-8 group transition-all duration-500"
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
