'use client'

import { useEffect, useRef, useState } from "react"
import { Check, Award, Shield, Clock, Heart, Star, Users } from "lucide-react"

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
    { text: "Family owned & operated", icon: Heart },
    { text: "30+ Years of expertise", icon: Award },
    { text: "Realtors trust us", icon: Star },
    { text: "Local community focused", icon: Users },
    { text: "Quick response times", icon: Clock },
    { text: "Licensed, insured & certified", icon: Shield },
  ]

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating golden particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#FFC107]/25 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full text-[#FFC107] text-sm font-bold uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Protecting Families & Pets
            <span className="block text-[#FFC107] mt-2">Since 1994</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Enhanced Image with decorative elements */}
          <div className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC107]/20 to-transparent rounded-3xl blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#FFC107] rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#FFC107] rounded-br-3xl"></div>

            {/* Main image */}
            <div className="relative group">
              <div
                className="h-[450px] md:h-[550px] rounded-2xl bg-cover bg-center shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:shadow-[#FFC107]/50 relative overflow-hidden"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/5998697/pexels-photo-5998697.jpeg?auto=compress&cs=tinysrgb&w=1280')",
                }}
              >
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FFC107] to-[#E5AC00] p-6 rounded-2xl shadow-2xl animate-float-slow">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#1A1A1A]">30+</div>
                  <div className="text-sm font-bold text-[#1A1A1A] uppercase">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Content */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-[#FFC107]/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex items-start gap-6 p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFC107]/50 hover:bg-white/10 transition-all duration-500 hover:translate-x-2">
                  {/* Icon container */}
                  <div className="relative flex-shrink-0">
                    {/* Rotating ring */}
                    <div className="absolute inset-0 border-2 border-[#FFC107]/30 rounded-full group-hover:rotate-180 transition-transform duration-700"></div>

                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC107] to-[#E5AC00] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-[#FFC107]/50">
                      <reason.icon className="w-7 h-7 text-[#1A1A1A]" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 pt-2">
                    <p className="text-xl font-bold text-white group-hover:text-[#FFC107] transition-colors duration-300">
                      {reason.text}
                    </p>
                  </div>

                  {/* Check mark */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107]/20 flex items-center justify-center group-hover:bg-[#FFC107] transition-all duration-300">
                    <Check className="w-5 h-5 text-[#FFC107] group-hover:text-[#1A1A1A] transition-colors duration-300" />
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom tagline */}
            <div className={`pt-6 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="p-6 rounded-xl bg-gradient-to-r from-[#FFC107]/10 to-transparent border-l-4 border-[#FFC107]">
                <p className="text-white/90 text-lg leading-relaxed">
                  <span className="font-bold text-[#FFC107]">Trusted by thousands</span> of homeowners and real estate professionals for exceptional mold remediation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
