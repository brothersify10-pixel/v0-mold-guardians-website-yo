'use client'

import { useEffect, useRef, useState } from "react"
import { Facebook, Twitter, Instagram, Rss } from "lucide-react"

export function ProtectFamilySection() {
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

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Rss, href: "#", label: "RSS" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A] py-20 md:py-28 overflow-hidden" ref={sectionRef}>
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FFC107]/20 rounded-full animate-float blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#FFC107]/30 rounded-full animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#FFC107]/15 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#FFC107]/25 rounded-full animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            Protect Your Family's & Pets Health and Your Home's Value
          </h2>

          {/* Subtext */}
          <p className={`text-white/80 text-lg md:text-xl font-semibold transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Eliminate health risks • Prevent future growth • Restore your home's integrity
          </p>

          {/* Connect With Us */}
          <div className={`pt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-[#FFC107] text-xl font-bold mb-6">Connect With Us</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFC107] to-[#E5AC00] flex items-center justify-center text-[#1A1A1A] hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg shadow-[#FFC107]/50 hover:shadow-2xl hover:shadow-[#FFC107]/80"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
