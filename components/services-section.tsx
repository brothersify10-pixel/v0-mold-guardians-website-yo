'use client'

import { useEffect, useRef, useState } from "react"

export function ServicesSection() {
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

  const services = [
    {
      image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "ATTICS",
      description: "Complete attic mold inspection and remediation services",
    },
    {
      image: "https://images.pexels.com/photos/1893229/pexels-photo-1893229.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "WINDOWS",
      description: "Window moisture and mold damage solutions",
    },
    {
      image: "https://images.pexels.com/photos/11899171/pexels-photo-11899171.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "CRAWL SPACE",
      description: "Comprehensive crawl space mold removal",
    },
    {
      image: "https://images.pexels.com/photos/4092030/pexels-photo-4092030.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "BASEMENTS",
      description: "Basement waterproofing and mold prevention",
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2D2D2D] to-[#1A1A1A]" ref={sectionRef}>
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
        <div
          className={`text-center mb-16 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Create a Healthier Home with Our Mold Removal & Remediation Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent mx-auto mb-8"></div>
          <p className="text-white/90 text-lg leading-relaxed">
            With extensive experience and expert teams, MoldGuardians specializes in eliminating harmful mold from your home.
            We restore spore counts to safe levels, ensuring your living space is healthy once more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col items-center text-center space-y-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFC107]/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Circular Image Container with glow */}
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-[#FFC107]/0 group-hover:bg-[#FFC107]/20 rounded-full blur-xl transition-all duration-500 transform scale-110" />

                <div
                  className="circle-image cursor-pointer relative z-10 group-hover:shadow-2xl group-hover:shadow-[#FFC107]/50"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
              </div>

              {/* Title with animation */}
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FFC107] transition-all duration-300 group-hover:scale-110">
                {service.title}
              </h3>

              {/* Decorative underline */}
              <div className="w-0 h-1 bg-[#FFC107] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
